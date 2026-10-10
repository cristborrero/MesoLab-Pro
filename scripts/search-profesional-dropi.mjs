/**
 * Script de Prospección de Productos Línea Profesional en Dropi Colombia
 * MesoLab Pro - Pipeline Dropshipping & Dermo-Estética
 */

const TOKEN = process.env.DROPI_MCP_ACCESS_TOKEN;

async function callDropiMcp(method, params, sessionId = null) {
  const headers = {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/json, text/event-stream",
  };
  if (sessionId) headers["mcp-session-id"] = sessionId;

  const res = await fetch("https://mcp.dropi.co/mcp", {
    method: "POST",
    headers,
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: Date.now(),
      method,
      params,
    }),
  });

  const rawText = await res.text();
  const newSessionId = res.headers.get("mcp-session-id") || sessionId;

  for (const line of rawText.split("\n")) {
    if (line.startsWith("data: ")) {
      try {
        const parsed = JSON.parse(line.slice(6));
        if (parsed.result) {
          return { result: parsed.result, sessionId: newSessionId };
        }
      } catch {}
    }
  }
  return { result: null, sessionId: newSessionId };
}

async function searchProfesional() {
  console.log("Inicializando sesión con Dropi MCP para Línea Profesional...");
  const init = await callDropiMcp("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "mesolab-crawler-profesional", version: "1.0.0" },
  });
  const sessionId = init.sessionId;

  await callDropiMcp("notifications/initialized", {}, sessionId);

  const keywords = [
    "dermapen",
    "dr pen",
    "agujas dermapen",
    "vapor ozono",
    "alta frecuencia",
    "centrifuga",
    "mascara led facial",
    "microdermoabrasion",
    "peeling",
    "acido glicolico",
    "acido mandelico",
    "alginato",
    "mascara hidroplastica",
    "velo colageno",
    "silicio organico",
    "alcachofa",
    "ampollas faciales",
    "anestesico",
    "tktx",
    "micropigmentacion",
    "papel camilla",
    "sabana desechable",
    "guantes nitrilo"
  ];

  const seenIds = new Set();
  const candidates = [];

  for (const kw of keywords) {
    console.log(`[Dropi Crawler] Consultando: "${kw}"...`);
    try {
      const resp = await callDropiMcp(
        "tools/call",
        {
          name: "list_products",
          arguments: {
            search: kw,
            get_stock: true,
            page_size: 15,
          },
        },
        sessionId
      );

      const content = resp?.result?.content?.[0]?.text;
      if (!content) continue;

      const itemBlocks = content.split(/\n\s*-\s+id:\s+/);
      for (let i = 1; i < itemBlocks.length; i++) {
        const block = "id: " + itemBlocks[i];
        const idMatch = block.match(/id:\s*(\d+)/);
        const nameMatch = block.match(/name:\s*(.+)/);
        const stockMatch = block.match(/stock:\s*(\d+)/);
        const salePriceMatch = block.match(/sale_price:\s*([\d\.]+)/);
        const suggestedMatch = block.match(/suggested_price:\s*([\d\.]+)/);
        const supplierMatch = block.match(/supplier_id:\s*(\d+)/);
        const imgMatch = block.match(/https:\/\/d39ru7awumhhs2\.cloudfront\.net[^\s"']+\.(jpg|jpeg|png)/i);

        if (idMatch && nameMatch && stockMatch) {
          const id = idMatch[1];
          const stock = parseInt(stockMatch[1], 10);
          const name = nameMatch[1].trim();
          const salePrice = salePriceMatch ? parseFloat(salePriceMatch[1]) : 0;
          const suggestedPrice = suggestedMatch ? parseFloat(suggestedMatch[1]) : 0;
          const supplierId = supplierMatch ? supplierMatch[1] : "";
          const imgUrl = imgMatch ? imgMatch[0] : null;

          if (!seenIds.has(id) && stock >= 50 && imgUrl && salePrice >= 4000) {
            seenIds.add(id);
            candidates.push({
              id,
              name,
              stock,
              salePrice,
              suggestedPrice,
              supplierId,
              imgUrl,
              keyword: kw,
            });
          }
        }
      }
    } catch (err) {
      console.error(`  Error en keyword "${kw}":`, err.message);
    }
  }

  console.log(`\n======================================================`);
  console.log(`TOTAL PRODUCTOS PROFESIONALES CALIFICADOS: ${candidates.length}`);
  console.log(`======================================================\n`);

  candidates.forEach((p, idx) => {
    console.log(`${idx + 1}. [ID: ${p.id}] ${p.name} | Stock: ${p.stock} | Costo: $${p.salePrice} | Proveedor: ${p.supplierId}`);
    console.log(`   Img: ${p.imgUrl} | Keyword: ${p.keyword}`);
  });
}

searchProfesional().catch(console.error);
