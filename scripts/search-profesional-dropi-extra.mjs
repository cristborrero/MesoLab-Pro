/**
 * Script de Prospección Adicional para Línea Profesional en Dropi Colombia
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

async function searchExtra() {
  const init = await callDropiMcp("initialize", {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: { name: "mesolab-crawler-profesional-extra", version: "1.0.0" },
  });
  const sessionId = init.sessionId;
  await callDropiMcp("notifications/initialized", {}, sessionId);

  const keywords = [
    "cartuchos",
    "dermapen agujas",
    "puntas diamante",
    "esterilizador",
    "lupa estetica",
    "ultrasonido facial",
    "camilla",
    "radiofrecuencia",
    "tktx",
    "anestesica",
    "plasma pen",
    "fibroblast",
    "mascara hidroplastica",
    "acido lactico",
    "acido salicilico"
  ];

  const seenIds = new Set();
  const candidates = [];

  for (const kw of keywords) {
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
        const supplierMatch = block.match(/supplier_id:\s*(\d+)/);
        const imgMatch = block.match(/https:\/\/d39ru7awumhhs2\.cloudfront\.net[^\s"']+\.(jpg|jpeg|png)/i);

        if (idMatch && nameMatch && stockMatch) {
          const id = idMatch[1];
          const stock = parseInt(stockMatch[1], 10);
          const name = nameMatch[1].trim();
          const salePrice = salePriceMatch ? parseFloat(salePriceMatch[1]) : 0;
          const supplierId = supplierMatch ? supplierMatch[1] : "";
          const imgUrl = imgMatch ? imgMatch[0] : null;

          if (!seenIds.has(id) && stock >= 50 && imgUrl && salePrice >= 4000) {
            seenIds.add(id);
            candidates.push({
              id,
              name,
              stock,
              salePrice,
              supplierId,
              imgUrl,
              keyword: kw,
            });
          }
        }
      }
    } catch {}
  }

  console.log(`\n=== EXTRA CANDIDATOS ENCONTRADOS: ${candidates.length} ===\n`);
  candidates.forEach((p, idx) => {
    console.log(`${idx + 1}. [ID: ${p.id}] ${p.name} | Stock: ${p.stock} | Costo: $${p.salePrice} | Prov: ${p.supplierId}`);
    console.log(`   Img: ${p.imgUrl} | Keyword: ${p.keyword}`);
  });
}

searchExtra().catch(console.error);
