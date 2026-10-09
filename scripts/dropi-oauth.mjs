import http from "node:http";
import crypto from "node:crypto";
import { exec } from "node:child_process";

// 1. PKCE Helpers
function base64URLEncode(str) {
  return str
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

function sha256(buffer) {
  return crypto.createHash("sha256").update(buffer).digest();
}

const codeVerifier = base64URLEncode(crypto.randomBytes(32));
const codeChallenge = base64URLEncode(sha256(codeVerifier));
const state = base64URLEncode(crypto.randomBytes(16));

const PORT = 3333;
const REDIRECT_URI = `http://localhost:${PORT}/callback`;

console.log("Registrando cliente OAuth en Dropi...");
const regRes = await fetch("https://integrations.dropi.co/oauth/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    client_name: "Antigravity IDE MesoLab",
    redirect_uris: [REDIRECT_URI],
  }),
});

const regData = await regRes.json();
const clientId = regData.client_id;
console.log("Client ID obtenido:", clientId);

const authUrl = new URL("https://oauth.dropi.co/oauth/authorize");
authUrl.searchParams.set("client_id", clientId);
authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
authUrl.searchParams.set("response_type", "code");
authUrl.searchParams.set("scope", "mcp");
authUrl.searchParams.set("resource", "https://mcp.dropi.co/mcp");
authUrl.searchParams.set("code_challenge", codeChallenge);
authUrl.searchParams.set("code_challenge_method", "S256");
authUrl.searchParams.set("state", state);

const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://localhost:${PORT}`);
  if (reqUrl.pathname === "/callback") {
    const code = reqUrl.searchParams.get("code");
    const receivedState = reqUrl.searchParams.get("state");

    if (!code) {
      res.writeHead(400, { "Content-Type": "text/html" });
      res.end("<h1>Error: No se recibió código de autorización</h1>");
      return;
    }

    console.log("\nCódigo de autorización recibido:", code);
    console.log("Intercambiando código por Access Token en Dropi...");

    try {
      const tokenRes = await fetch("https://integrations.dropi.co/oauth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grant_type: "authorization_code",
          client_id: clientId,
          code,
          redirect_uri: REDIRECT_URI,
          code_verifier: codeVerifier,
          resource: "https://mcp.dropi.co/mcp",
        }),
      });

      const tokenData = await tokenRes.json();
      console.log("\n--- RESULTADO DROPI OAUTH ---");
      console.log(JSON.stringify(tokenData, null, 2));

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`
        <div style="font-family: system-ui; padding: 40px; text-align: center;">
          <h1 style="color: #059669;">Conexión con Dropi Autorizada con Éxito</h1>
          <p>Tu token ha sido generado y configurado en Antigravity IDE.</p>
          <p>Ya puedes cerrar esta pestaña y volver al chat.</p>
        </div>
      `);

      server.close();
      process.exit(0);
    } catch (err) {
      console.error("Error al intercambiar token:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error al intercambiar token: " + err.message);
      server.close();
      process.exit(1);
    }
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`\nServidor local de autorización escuchando en ${REDIRECT_URI}`);
  console.log(`\nAbre este enlace en tu navegador para autorizar Dropi:\n\n${authUrl.toString()}\n`);
  
  // Intenta abrir el navegador en macOS
  exec(`open "${authUrl.toString()}"`);
});
