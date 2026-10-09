const TOKEN = process.env.DROPI_MCP_ACCESS_TOKEN;

async function main() {
  console.log("1. Inicializando sesión MCP...");
  const initRes = await fetch("https://mcp.dropi.co/mcp", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      "Accept": "application/json, text/event-stream",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "initialize",
      params: {
        protocolVersion: "2024-11-05",
        capabilities: {},
        clientInfo: { name: "antigravity", version: "1.0.0" },
      },
    }),
  });

  const sessionId = initRes.headers.get("mcp-session-id");
  console.log("Sesión establecida ID:", sessionId);

  console.log("2. Enviando notificación de inicializado...");
  await fetch("https://mcp.dropi.co/mcp", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      "mcp-session-id": sessionId,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "notifications/initialized",
    }),
  });

  console.log("3. Obteniendo herramientas (tools/list)...");
  const toolsRes = await fetch("https://mcp.dropi.co/mcp", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      "Accept": "application/json, text/event-stream",
      "mcp-session-id": sessionId,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 2,
      method: "tools/list",
      params: {},
    }),
  });

  const rawText = await toolsRes.text();
  console.log("\n--- HERRAMIENTAS ACTIVAS EN DROPI MCP ---");
  for (const line of rawText.split("\n")) {
    if (line.startsWith("data: ")) {
      const data = JSON.parse(line.slice(6));
      if (data.result && data.result.tools) {
        data.result.tools.forEach((t) => {
          console.log(`- [${t.name}]: ${t.description}`);
        });
      } else {
        console.log(JSON.stringify(data, null, 2));
      }
    }
  }
}

main().catch(console.error);
