/**
 * Script de Ingesta de 30 Productos de Cuidado Capilar hacia WooCommerce REST API
 * MesoLab Pro - Pipeline Dropshipping & Dermo-Estética
 */

const WC_URL = process.env.NEXT_PUBLIC_WC_URL;
const KEY = process.env.WC_CONSUMER_KEY;
const SECRET = process.env.WC_CONSUMER_SECRET;

if (!WC_URL || !KEY || !SECRET) {
  console.error("Faltan credenciales de WooCommerce en el entorno");
  process.exit(1);
}

const authHeader = "Basic " + Buffer.from(`${KEY}:${SECRET}`).toString("base64");

async function wcRequest(endpoint, method = "GET", body = null) {
  const options = {
    method,
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
  };
  if (body) options.body = JSON.stringify(body);

  const res = await fetch(`${WC_URL}${endpoint}`, options);
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Error en WC API (${res.status} ${res.statusText}): ${errorText}`);
  }
  return res.json();
}

export const CAPILAR_PRODUCTS_30 = [
  {
    idInterno: "091",
    name: "Kit Terapia Anticaída Minoxidil 5% con Dermaroller y Gotero Dosificador",
    slug: "kit-terapia-anticaida-minoxidil-5-dermaroller",
    categorySlug: "capilar",
    subcategory: "Terapias Anticaída Folicular",
    dropiId: "2143299",
    supplierId: "57938",
    costoDropi: 31200,
    pvpSugerido: 79000,
    stock: 4993,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Protocolo integral de micro-punciones y vasodilatación periférica folicular. Estimula la angiogénesis y reactiva folículos en fase telógena.",
    description: "<h3>Protocolo Clínico de Reactivación Folicular</h3><p>La combinación de microagujas de titanio de 0.5mm y solución tópica de Minoxidil al 5% incrementa la absorción transepidérmica hasta un 300%, reactivando la fase anágena en áreas con pérdida de densidad capilar.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2143299/1777793588magnific_crea-el-producto-sobre-un_2910041134.png",
    specs: { "Principio Activo": "Minoxidil 5%", "Herramienta": "Dermaroller Titanio 540 Agujas 0.5mm", "Uso": "Cuero Cabelludo y Barba", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Kit Completo (Minoxidil + Dermaroller)", "Dúo Tratamiento (2 Kits)"] }],
    variations: [
      { regular_price: "79000", sku: "KIT-MINOX-DERM-01", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Kit Completo (Minoxidil + Dermaroller)" }] },
      { regular_price: "139000", sku: "KIT-MINOX-DERM-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Tratamiento (2 Kits)" }] }
    ]
  },
  {
    idInterno: "092",
    name: "Serum de Crecimiento Folicular Minoxidil Avanzado 30ml",
    slug: "serum-crecimiento-folicular-minoxidil-30ml",
    categorySlug: "capilar",
    subcategory: "Terapias Anticaída Folicular",
    dropiId: "2156471",
    supplierId: "156110",
    costoDropi: 10000,
    pvpSugerido: 39000,
    stock: 357,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Fórmula de absorción rápida enriquecida con Minoxidil y péptidos estimulantes para frenar la caída progresiva y fortalecer el tallo capilar.",
    description: "<h3>Estimulación Directa del Bulbo Capilar</h3><p>Concentrado liposomado diseñado para penetrar el estrato córneo del cuero cabelludo sin dejar residuo graso. Actúa prolongando el ciclo de vida del cabello y engrosando el diámetro de la fibra.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2156471/1779409131ChatGPT%20Image%2021%20may%202026,%2019_15_45.png",
    specs: { "Volumen": "30 ml", "Activo": "Minoxidil + Péptidos", "Aplicación": "Gotero Nocturno", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco Individual 30ml", "Tratamiento Bimensual (2 Frascos)"] }],
    variations: [
      { regular_price: "39000", sku: "SERUM-MINOX-30ML", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Frasco Individual 30ml" }] },
      { regular_price: "69000", sku: "SERUM-MINOX-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Tratamiento Bimensual (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "093",
    name: "Minoxidil Kirkland Líquido Extra Fuerte 5% Frasco 60ml",
    slug: "minoxidil-kirkland-liquido-extra-fuerte-5-60ml",
    categorySlug: "capilar",
    subcategory: "Terapias Anticaída Folicular",
    dropiId: "809258",
    supplierId: "65645",
    costoDropi: 29900,
    pvpSugerido: 69000,
    stock: 88,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Tratamiento tópico de referencia internacional para alopecia androgénica. Reactiva los folículos miniaturizados con resultados clínicamente probados.",
    description: "<h3>Estándar de Oro en Alopecia Androgénica</h3><p>Kirkland 5% es el vasodilatador tópico más prescrito a nivel global. Revierte el proceso de miniaturización folicular aumentando el flujo sanguíneo y el aporte de nutrientes esenciales a la raíz del cabello.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/809258/1714149137D_NQ_NP_899681-MLV74760634302_032024-O[1].png",
    specs: { "Volumen": "60 ml (Tratamiento 1 mes)", "Concentración": "Minoxidil USP 5%", "Formato": "Solución Tópica con Gotero", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 60ml (1 Mes)", "Pack Bimestral (2 Frascos 60ml)"] }],
    variations: [
      { regular_price: "69000", sku: "MINOX-KIRK-60ML", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Frasco 60ml (1 Mes)" }] },
      { regular_price: "125000", sku: "MINOX-KIRK-PACK2", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Pack Bimestral (2 Frascos 60ml)" }] }
    ]
  },
  {
    idInterno: "094",
    name: "Tónico Capilar Fortalecedor con Extracto de Romero y Quina 120ml",
    slug: "tonico-capilar-fortalecedor-romero-quina-120ml",
    categorySlug: "capilar",
    subcategory: "Tónicos y Lociones Fortalecedoras",
    dropiId: "7556",
    supplierId: "2090",
    costoDropi: 19700,
    pvpSugerido: 49000,
    stock: 200,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Infusión fito-terapéutica de romero silvestre, corteza de quina y extractos botánicos. Fortalece las raíces debilitadas y combate el envejecimiento del folículo.",
    description: "<h3>Fitoterapia Activa para el Cuero Cabelludo</h3><p>El romero estimula la microcirculación dérmica capilar mientras que los alcaloides de la quina astringen y vigorizan la fibra, controlando la caída estacional y el exceso de sebo.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/7556/17031021061703102106TONICO.PNG",
    specs: { "Volumen": "120 ml", "Activos": "Romero, Quina, Provitamina B5", "Tipo de Pelo": "Todo tipo de cabello", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 120ml", "Dúo Fortalecedor (2 Frascos)"] }],
    variations: [
      { regular_price: "49000", sku: "TON-ROMERO-120", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco 120ml" }] },
      { regular_price: "89000", sku: "TON-ROMERO-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Fortalecedor (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "095",
    name: "Tónico Capilar Crecimiento Intensivo con Complejo de Aminoácidos Kab 60ml",
    slug: "tonico-capilar-crecimiento-aminoacidos-kab-60ml",
    categorySlug: "capilar",
    subcategory: "Tónicos y Lociones Fortalecedoras",
    dropiId: "871190",
    supplierId: "225053",
    costoDropi: 36790,
    pvpSugerido: 75000,
    stock: 644,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Tónico molecular biotecnológico con aminoácidos ramificados y zinc. Nutre la papila dérmica e incrementa la velocidad de proliferación celular folicular.",
    description: "<h3>Nutrición Molecular de la Papila Dérmica</h3><p>Complejo formulado con arginina, cisteína y péptidos biológicos que recargan los depósitos proteicos del folículo, promoviendo hebras más gruesas, densas y elásticas desde la primera aplicación.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/871190/1746297489K048.jpg",
    specs: { "Volumen": "60 ml", "Fórmula": "Biotecnológica con Complejo B y Aminoácidos", "Efecto": "Densificación y Crecimiento", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 60ml", "Dúo Intensivo (2 Frascos)"] }],
    variations: [
      { regular_price: "75000", sku: "TON-KAB-60ML", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Frasco 60ml" }] },
      { regular_price: "135000", sku: "TON-KAB-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Intensivo (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "096",
    name: "Tónico Capilar Anticaída Intensivo y Densificador Folicular 250ml",
    slug: "tonico-capilar-anticaida-intensivo-densificador-250ml",
    categorySlug: "capilar",
    subcategory: "Tónicos y Lociones Fortalecedoras",
    dropiId: "1713366",
    supplierId: "437663",
    costoDropi: 30000,
    pvpSugerido: 65000,
    stock: 1000,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Loción capilar de gran formato para tratamientos prolongados contra el desprendimiento prematuro y la pérdida difusa de densidad capilar.",
    description: "<h3>Terapia Anticaída de Cobertura Integral</h3><p>Su fórmula ligera no oleosa equilibra el microbiota del cuero cabelludo y oxigena las raíces, aportando una sensación refrescante inmediata y reduciendo la caída en el cepillado diario.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1713366/1782440094comprimida_DSC01445.JPG",
    specs: { "Volumen": "250 ml", "Uso": "Diario Mañana y Noche", "Textura": "Loción Acuosa Refrescante", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 250ml", "Dúo Densificador (2 Frascos)"] }],
    variations: [
      { regular_price: "65000", sku: "TON-INT-250ML", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Frasco 250ml" }] },
      { regular_price: "119000", sku: "TON-INT-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Densificador (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "097",
    name: "Serum Capilar Fortalecedor Mielle con Romero y Menta Silvestre 59ml",
    slug: "serum-capilar-fortalecedor-mielle-romero-menta-59ml",
    categorySlug: "capilar",
    subcategory: "Óleos y Serums Nutritivos",
    dropiId: "30234",
    supplierId: "5381",
    costoDropi: 18900,
    pvpSugerido: 49000,
    stock: 998,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Aceite esencial puro con infusión de romero, menta piperita y biotina. Nutre profundamente las puntas secas y estimula el cuero cabelludo.",
    description: "<h3>Elixir Botánico de Romero y Menta</h3><p>Fórmula icónica con más de 30 aceites esenciales naturales y extractos que proporcionan alivio instantáneo al cuero cabelludo tenso o irritado, fortaleciendo la cutícula capilar contra la rotura.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/30234/1780496738Mesa%20de%20trabajo%201.png",
    specs: { "Volumen": "59 ml (2 fl oz)", "Ingredientes Clave": "Romero, Menta, Biotina", "Tipo de Pelo": "Seco, Maltratado, Afro, Liso", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco Gotero 59ml", "Dúo Crecimiento (2 Goteros)"] }],
    variations: [
      { regular_price: "49000", sku: "SERUM-MIELLE-59", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Frasco Gotero 59ml" }] },
      { regular_price: "89000", sku: "SERUM-MIELLE-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Crecimiento (2 Goteros)" }] }
    ]
  },
  {
    idInterno: "098",
    name: "Serum Capilar Tri-Activo de Biotina, Romero y Extracto de Cebolla",
    slug: "serum-capilar-triactivo-biotina-romero-cebolla",
    categorySlug: "capilar",
    subcategory: "Óleos y Serums Nutritivos",
    dropiId: "2155400",
    supplierId: "156110",
    costoDropi: 12000,
    pvpSugerido: 42000,
    stock: 189,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Complejo trío botánico rico en azufre natural, quercetina y biotina hidrosoluble. Acelera el ritmo de crecimiento folicular y sella la fibra.",
    description: "<h3>Sinergia de Azufre Botánico y Biotina</h3><p>La quercetina y los compuestos sulfurados del extracto de cebolla desinflaman los folículos y activan la microcirculación, mientras la biotina reconstruye las cadenas de queratina dañadas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2155400/1779315344ChatGPT%20Image%2020%20may%202026,%2016_42_20.png",
    specs: { "Volumen": "30 ml", "Componentes": "Biotina, Romero, Cebolla Roja", "Aroma": "Frutal Suave Sin Olor a Cebolla", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Gotero Individual 30ml", "Tratamiento Doble (2 Goteros)"] }],
    variations: [
      { regular_price: "42000", sku: "SERUM-TRIACT-30", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Gotero Individual 30ml" }] },
      { regular_price: "75000", sku: "SERUM-TRIACT-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Tratamiento Doble (2 Goteros)" }] }
    ]
  },
  {
    idInterno: "099",
    name: "Serum Capilar Nutritivo con Feromonas y Acabado Sedoso Silky Glow",
    slug: "serum-capilar-nutritivo-feromonas-silky-glow",
    categorySlug: "capilar",
    subcategory: "Óleos y Serums Nutritivos",
    dropiId: "1714215",
    supplierId: "27771",
    costoDropi: 24000,
    pvpSugerido: 59000,
    stock: 1500,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Elixir sensorial que combina lípidos nutritivos de alta penetración con una fragancia cautivadora y brillo tipo espejo instantáneo.",
    description: "<h3>Brillo Sensorial y Acabado Satinado</h3><p>Tratamiento de acabado ligero que alinea la cutícula capilar, neutraliza el frizz de forma duradera y envuelve la melena en notas aromáticas sofisticadas sin apelmazar.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1714215/1741721821Imagen%20de%20WhatsApp%202025-03-11%20a%20las%2014.30.25_032ca883.jpg",
    specs: { "Volumen": "60 ml", "Efecto": "Antifrizz, Brillo Espejo y Fijación Aromática", "Acabado": "Tacto Seco Sedoso", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco Dosificador 60ml", "Dúo Brillo Sedoso (2 Frascos)"] }],
    variations: [
      { regular_price: "59000", sku: "SERUM-SILKY-60", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco Dosificador 60ml" }] },
      { regular_price: "105000", sku: "SERUM-SILKY-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Brillo Sedoso (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "100",
    name: "Batana Oil Aceite Capilar Reparador Puro para Hebra Dañada",
    slug: "batana-oil-aceite-capilar-reparador-puro",
    categorySlug: "capilar",
    subcategory: "Óleos y Serums Nutritivos",
    dropiId: "594276",
    supplierId: "5381",
    costoDropi: 16000,
    pvpSugerido: 45000,
    stock: 499,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Aceite ancestral de nuez de palma americana (Batana). Regenera el cemento intercelular de la hebra maltratada por decoloraciones y calor.",
    description: "<h3>Oro Líquido Ancestral para Hebras Críticamente Dañadas</h3><p>Rico en ácidos grasos insaturados omega-6 y fitosteroles, el aceite de batana actúa reparando la cutícula capilar fracturada, restaurando la elasticidad perdida y sellando las puntas abiertas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/594276/1781187671Captura%206.PNG",
    specs: { "Volumen": "50 ml", "Origen": "Aceite Puro de Batana Prensado", "Indicación": "Cabello Decolorado o Quebradizo", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 50ml", "Pack Nutrición Profunda (2 Frascos)"] }],
    variations: [
      { regular_price: "45000", sku: "BATANA-OIL-50", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Frasco 50ml" }] },
      { regular_price: "79000", sku: "BATANA-OIL-PACK2", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Pack Nutrición Profunda (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "101",
    name: "Aceite Capilar Marroquí de Argán Puro Reparador de Puntas 50ml",
    slug: "aceite-capilar-marroqui-argan-puro-50ml",
    categorySlug: "capilar",
    subcategory: "Óleos y Serums Nutritivos",
    dropiId: "2135136",
    supplierId: "43728",
    costoDropi: 9500,
    pvpSugerido: 35000,
    stock: 198,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Óleo de argán puro extraído por primera presión en frío. Aporta brillo intenso, suavidad instantánea y protección contra la resequedad ambiental.",
    description: "<h3>Nutrición Lipídica de Argán Marroquí</h3><p>Concentrado rico en vitamina E y antioxidantes naturales que sella la humedad intrínseca de la fibra capilar, eliminando la porosidad y dejando el cabello flexible y luminoso.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2135136/17768667351748982467descarga%20(6).jpg",
    specs: { "Volumen": "50 ml", "Activo": "Aceite de Argán Puro (Argania Spinosa)", "Absorción": "Rápida sin Grasa", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 50ml", "Dúo Argán (2 Frascos)"] }],
    variations: [
      { regular_price: "35000", sku: "ARGAN-OIL-50ML", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Frasco 50ml" }] },
      { regular_price: "59000", sku: "ARGAN-OIL-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Argán (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "102",
    name: "Aceite Capilar de Romero y Keratina Hidrolizada Reestructurante",
    slug: "aceite-capilar-romero-keratina-hidrolizada",
    categorySlug: "capilar",
    subcategory: "Óleos y Serums Nutritivos",
    dropiId: "2155381",
    supplierId: "156110",
    costoDropi: 8000,
    pvpSugerido: 32000,
    stock: 195,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Tratamiento dual que combina la estimulación del romero con la reposición proteica de la queratina bio-idéntica para sellar cutículas abiertas.",
    description: "<h3>Refuerzo Proteico y Fito-Estimulación</h3><p>Ayuda a reconstruir los enlaces peptídicos de la fibra capilar sometida a procesos químicos o calor excesivo, devolviendo elasticidad y resistencia frente a la tracción del peinado.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2155381/1779314472ChatGPT%20Image%2020%20may%202026,%2016_49_43.png",
    specs: { "Volumen": "30 ml", "Activos": "Romero Silvestre + Keratina Hidrolizada", "Uso": "Medios a Puntas", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 30ml", "Dúo Reparación (2 Frascos)"] }],
    variations: [
      { regular_price: "32000", sku: "ACEITE-ROM-KER-30", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Frasco 30ml" }] },
      { regular_price: "56000", sku: "ACEITE-ROM-KER-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Reparación (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "103",
    name: "Óleo Capilar Nutritivo Antifrizz y Sellador de Puntas Abiertas",
    slug: "oleo-capilar-nutritivo-antifrizz-sellador",
    categorySlug: "capilar",
    subcategory: "Óleos y Serums Nutritivos",
    dropiId: "1650672",
    supplierId: "455251",
    costoDropi: 34900,
    pvpSugerido: 69000,
    stock: 300,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Formulación oleosa de alta ligereza con siliconas volátiles nobles y lípidos botánicos para un control del encrespamiento de hasta 48 horas.",
    description: "<h3>Control del Frizz y Sellado de Puntas</h3><p>Crea una película invisible e impermeable sobre la cutícula que bloquea la humedad atmosférica causante del esponjamiento capilar, logrando un liso pulido y sedoso.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1650672/17774299851000569539.png",
    specs: { "Volumen": "60 ml", "Efecto": "Bloqueo Anti-Humedad 48h", "Sensación": "Tacto Seco Sedoso", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco Dosificador 60ml", "Dúo Antifrizz (2 Frascos)"] }],
    variations: [
      { regular_price: "69000", sku: "OLEO-FRIZZ-60", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Frasco Dosificador 60ml" }] },
      { regular_price: "125000", sku: "OLEO-FRIZZ-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Antifrizz (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "104",
    name: "Óleo Capilar Reparador Karseell Macadamia y Colágeno Esencial",
    slug: "oleo-capilar-reparador-karseell-macadamia-colageno",
    categorySlug: "capilar",
    subcategory: "Óleos y Serums Nutritivos",
    dropiId: "2097168",
    supplierId: "187562",
    costoDropi: 41200,
    pvpSugerido: 85000,
    stock: 1000,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Tratamiento de lujo con macadamia prensada y péptidos de colágeno bioactivo. Nutre cabellos secos, porosos o tratados químicamente.",
    description: "<h3>Infusión de Macadamia y Colágeno Karseell</h3><p>Penetra profundamente en la corteza capilar reponiendo la barrera lipídica y fortaleciendo la resistencia a la quiebra. Transforma la textura áspera en una suavidad similar a la seda.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2097168/1772311075images%20(21).jpg",
    specs: { "Volumen": "50 ml", "Fórmula": "Macadamia + Colágeno Hidrolizado", "Textura": "Óleo Nutritivo Concentrado", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 50ml", "Dúo Macadamia (2 Frascos)"] }],
    variations: [
      { regular_price: "85000", sku: "OLEO-KARS-50", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco 50ml" }] },
      { regular_price: "155000", sku: "OLEO-KARS-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Macadamia (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "105",
    name: "Gotas Mágicas Capilares Elixir Estimulante de Raíz y Brillo Espejo",
    slug: "gotas-magicas-capilares-elixir-estimulante",
    categorySlug: "capilar",
    subcategory: "Tónicos y Lociones Fortalecedoras",
    dropiId: "14395",
    supplierId: "3487",
    costoDropi: 26000,
    pvpSugerido: 59000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Concentrado de extractos bio-activos formulado para despertar la raíz capilar, aportar ligereza y potenciar el brillo natural del cabello.",
    description: "<h3>Elixir Folicular Rejuvenecedor</h3><p>Gotas de alta densidad nutricional que se aplican directamente en las líneas divisorias del cuero cabelludo, acondicionando la raíz y protegiendo el tallo contra el estrés oxidativo.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/14395/17030849171703084917FC4E04AA-7596-428C-BE9A-63BEBEF2FBAF.jpeg",
    specs: { "Volumen": "30 ml", "Efecto": "Estimulación de Raíz y Brillo", "Formato": "Gotero Dosificador de Precisión", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco Gotero 30ml", "Dúo Elixir (2 Frascos)"] }],
    variations: [
      { regular_price: "59000", sku: "GOTAS-MAG-30", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Frasco Gotero 30ml" }] },
      { regular_price: "105000", sku: "GOTAS-MAG-DUO", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Dúo Elixir (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "106",
    name: "Termoprotector Capilar Escudo Térmico S.O.S Protección 230°C",
    slug: "termoprotector-capilar-escudo-termico-sos",
    categorySlug: "capilar",
    subcategory: "Termoprotectores y Selladores",
    dropiId: "2199213",
    supplierId: "778365",
    costoDropi: 30400,
    pvpSugerido: 69000,
    stock: 927,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Bruma protectora avanzada que crea una barrera aislante contra planchas, secadores y tenazas térmicas hasta 230°C (450°F).",
    description: "<h3>Blindaje Térmico Cuticular a 230°C</h3><p>Evita la desnaturalización de la queratina y la pérdida del agua de hidratación interna durante el peinado con calor. Previene la fragilidad, el quiebre y las puntas abiertas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2199213/img_6a51347864b186.51660754_0.png",
    specs: { "Volumen": "200 ml", "Resistencia Térmica": "Hasta 230°C / 450°F", "Aplicación": "Spray en Bruma Fina", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco Spray 200ml", "Dúo Blindaje Térmico (2 Frascos)"] }],
    variations: [
      { regular_price: "69000", sku: "TERMO-SOS-200", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco Spray 200ml" }] },
      { regular_price: "125000", sku: "TERMO-SOS-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Blindaje Térmico (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "107",
    name: "Perfume Capilar Termoprotector Brillo Sedoso Ritual Botánico",
    slug: "perfume-capilar-termoprotector-ritual-botanico",
    categorySlug: "capilar",
    subcategory: "Termoprotectores y Selladores",
    dropiId: "1676267",
    supplierId: "187562",
    costoDropi: 17100,
    pvpSugerido: 45000,
    stock: 665,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Fragancia de lujo sin alcohol para cabello que protege contra olores externos, el sol y el calor moderado aportando brillo cristalino.",
    description: "<h3>Aroma Sofisticado y Protección Diaria</h3><p>Formulado especialmente sin alcohol para no resecar la cutícula. Impregna una estela aromática de larga duración mientras sus polímeros protectores forman un escudo contra los rayos UV y el humo ambiental.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1676267/1739844601PERFUME%20%20TERMOPROTECTOR%20RITUAL%20BOTANICO.png",
    specs: { "Volumen": "120 ml", "Base": "Fórmula Libre de Alcohol Desnaturalizado", "Efecto": "Perfume + Termoprotección + Brillo", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Spray Aromático 120ml", "Dúo Brillo Sublime (2 Sprays)"] }],
    variations: [
      { regular_price: "45000", sku: "PERF-RITUAL-120", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Spray Aromático 120ml" }] },
      { regular_price: "79000", sku: "PERF-RITUAL-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Brillo Sublime (2 Sprays)" }] }
    ]
  },
  {
    idInterno: "108",
    name: "Desenredante y Termoprotector Capilar Nutritivo Leave-In 240ml",
    slug: "desenredante-termoprotector-capilar-leave-in-240ml",
    categorySlug: "capilar",
    subcategory: "Termoprotectores y Selladores",
    dropiId: "1246242",
    supplierId: "330565",
    costoDropi: 19000,
    pvpSugerido: 45000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Crema líquida desenredante sin enjuague con acción termoprotectora. Facilita el cepillado instantáneo en cabellos rebeldes o rizados.",
    description: "<h3>Deslizamiento Cuticular y Protección Leave-In</h3><p>Elimina los nudos sin romper la fibra capilar, aportando hidratación continua y sellando la cutícula antes de aplicar herramientas de calor o dejar secar al aire libre.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1246242/1727286812DESENREDANTE%20TERMO%20PROTECTOR.jpg",
    specs: { "Volumen": "240 ml", "Formato": "Leave-In Spray Cremoso", "Tipo de Pelo": "Rizado, Ondulado, Liso con Tendencia al Enredo", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 240ml", "Dúo Desenredante (2 Frascos)"] }],
    variations: [
      { regular_price: "45000", sku: "DESENR-TERMO-240", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Frasco 240ml" }] },
      { regular_price: "79000", sku: "DESENR-TERMO-DUO", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Dúo Desenredante (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "109",
    name: "Termoprotector Zamia Nutritivo con Ácido Hialurónico y Pantenol",
    slug: "termoprotector-zamia-nutritivo-acido-hialuronico",
    categorySlug: "capilar",
    subcategory: "Termoprotectores y Selladores",
    dropiId: "2289428",
    supplierId: "197958",
    costoDropi: 11900,
    pvpSugerido: 38000,
    stock: 654623,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Gotas concentradas termoprotectoras con ácido hialurónico biomimético. Retienen hasta 1000 veces su peso en agua dentro de la fibra capilar.",
    description: "<h3>Hidratación Hialurónica y Blindaje Térmico</h3><p>Tratamiento ultraconcentrado que rellena las micro-grietas de la cutícula capilar causadas por planchas y exposición solar, devolviendo movimiento natural y flexibilidad.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2289428/82494dd9-209e-447b-972f-4d33d0ad4b45.jpeg",
    specs: { "Volumen": "30 ml", "Activo": "Ácido Hialurónico + Pantenol B5", "Presentación": "Gotero Ámbar", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Gotero Ámbar 30ml", "Dúo Hidratación (2 Goteros)"] }],
    variations: [
      { regular_price: "38000", sku: "TERMO-ZAMIA-30", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Gotero Ámbar 30ml" }] },
      { regular_price: "68000", sku: "TERMO-ZAMIA-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Hidratación (2 Goteros)" }] }
    ]
  },
  {
    idInterno: "110",
    name: "Botox Capilar Restauración Molecular Profunda y Antifrizz 500ml",
    slug: "botox-capilar-restauracion-molecular-profunda-500ml",
    categorySlug: "capilar",
    subcategory: "Tratamientos y Mascarillas Reconstructoras",
    dropiId: "1942204",
    supplierId: "151037",
    costoDropi: 26000,
    pvpSugerido: 69000,
    stock: 2454,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Terapia reconstructora intensiva de salón para aplicar en casa. Rellena la masa cortical perdida y alinea la cutícula para un liso perfecto.",
    description: "<h3>Restauración Molecular Cortical</h3><p>Su fórmula enriquecida con aminoácidos y ácido hialurónico penetra hasta la médula capilar, sellando porosidades y eliminando el volumen indeseado sin formaldehído ni irritación.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1942204/1779129986176289387851BMfpG1NIL._SX425_-dropicup.png",
    specs: { "Volumen": "500 ml", "Fórmula": "Cero Formol, 100% Orgánica", "Efecto": "Relleno Capilar y Antifrizz", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote 500ml", "Dúo Reconstructor (2 Potes)"] }],
    variations: [
      { regular_price: "69000", sku: "BOTOX-500ML", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Pote 500ml" }] },
      { regular_price: "125000", sku: "BOTOX-500-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Reconstructor (2 Potes)" }] }
    ]
  },
  {
    idInterno: "111",
    name: "Ampollas de Botox Capilar Concentrado Reconstructor Caja x12 Unidades",
    slug: "ampollas-botox-capilar-concentrado-caja-x12",
    categorySlug: "capilar",
    subcategory: "Tratamientos y Mascarillas Reconstructoras",
    dropiId: "2283512",
    supplierId: "44666",
    costoDropi: 60000,
    pvpSugerido: 129000,
    stock: 2000,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Tratamiento intensivo monodosis termo-activo. Repara enlaces disulfuro rotos en cabellos con daño químico severo o sobre-procesados.",
    description: "<h3>Reconstrucción Monodosis en Cabina</h3><p>Cada ampolla contiene una dosis ultra-purificada de keratina hidrolizada y ceramidas que se activan con agua tibia, transformándose en una crema nutritiva densa que devuelve la vida a cabellos quebradizos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2283512/e16506f3-6748-4d85-be12-bd6ad7316aa6.jpg",
    specs: { "Contenido": "Caja x12 Ampollas Monodosis", "Activación": "Termo-activa con Agua Tibia", "Uso": "Tratamiento Semanal Intensivo", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Caja x12 Ampollas", "Pack Terapia Intensiva (2 Cajas)"] }],
    variations: [
      { regular_price: "129000", sku: "AMP-BOTOX-12", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Caja x12 Ampollas" }] },
      { regular_price: "239000", sku: "AMP-BOTOX-PACK2", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Pack Terapia Intensiva (2 Cajas)" }] }
    ]
  },
  {
    idInterno: "112",
    name: "Mascarilla Capilar de Colágeno y Raíz de Maca Karseell 500ml",
    slug: "mascarilla-capilar-colageno-maca-karseell-500ml",
    categorySlug: "capilar",
    subcategory: "Tratamientos y Mascarillas Reconstructoras",
    dropiId: "2031449",
    supplierId: "197958",
    costoDropi: 11990,
    pvpSugerido: 45000,
    stock: 109860,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Mascarilla de nutrición extrema que combina colágeno hidrolizado, maca andina y aceite de argán para revitalizar cabellos secos o deshidratados.",
    description: "<h3>Nutrición Profunda con Maca y Colágeno</h3><p>Restaura la película hidrolipídica del cabello, aportando suavidad, peinabilidad y reduciendo drásticamente la porosidad de cabellos sometidos a tinturas constantes.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2031449/b6155fe5-10db-4534-87c4-76e48e6b28d7.png",
    specs: { "Volumen": "500 ml", "Activos": "Colágeno, Esencia de Maca, Aceite de Argán", "Tiempo de Pose": "10-15 Minutos", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote 500ml", "Dúo Reparación Profunda (2 Potes)"] }],
    variations: [
      { regular_price: "45000", sku: "MASC-KARS-500", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Pote 500ml" }] },
      { regular_price: "79000", sku: "MASC-KARS-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Reparación Profunda (2 Potes)" }] }
    ]
  },
  {
    idInterno: "113",
    name: "Mascarilla Capilar Intensiva de Keratina Hidrolizada y Botox Sellador",
    slug: "mascarilla-capilar-intensiva-keratina-botox",
    categorySlug: "capilar",
    subcategory: "Tratamientos y Mascarillas Reconstructoras",
    dropiId: "2134808",
    supplierId: "501369",
    costoDropi: 22000,
    pvpSugerido: 55000,
    stock: 342,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Tratamiento acondicionador profundo que deposita queratina micro-encapsulada en las fisuras de la cutícula, devolviendo cuerpo y brillo.",
    description: "<h3>Relleno Cuticular con Micro-Queratina</h3><p>Especialmente concebida para cabellos que han perdido su elasticidad natural por exceso de calor o tinturas. Ayuda a evitar la rotura y desenreda instantáneamente sin apelmazar.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2134808/1778616012WhatsApp%20Image%202026-05-05%20at%2010.47.21%20AM-dropicup.png",
    specs: { "Volumen": "300 g", "Fórmula": "Keratina Hidrolizada + Ácido Hialurónico", "Uso": "2 a 3 Veces por Semana", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote 300g", "Dúo Keratina (2 Potes)"] }],
    variations: [
      { regular_price: "55000", sku: "MASC-KER-BOT-300", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Pote 300g" }] },
      { regular_price: "98000", sku: "MASC-KER-BOT-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Keratina (2 Potes)" }] }
    ]
  },
  {
    idInterno: "114",
    name: "Mascarilla Capilar Estimulante de Cebolla Roja y Biotina Activa",
    slug: "mascarilla-capilar-estimulante-cebolla-roja-biotina",
    categorySlug: "capilar",
    subcategory: "Tratamientos y Mascarillas Reconstructoras",
    dropiId: "2051097",
    supplierId: "197958",
    costoDropi: 13000,
    pvpSugerido: 42000,
    stock: 120111,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Crema de tratamiento fito-activa enriquecida con flavonoides de cebolla roja y biotina para potenciar el crecimiento y frenar la caída.",
    description: "<h3>Estimulación Botánica Sin Olor a Cebolla</h3><p>Aprovecha las propiedades vasodilatadoras y purificantes del extracto de cebolla roja en una base aromática exquisita. Aporta vitalidad al folículo y deja el pelo suave y sedoso.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2051097/b67991f1-fd9e-49b0-bd22-20baad6b8903.png",
    specs: { "Volumen": "300 g", "Activos": "Cebolla Roja + Biotina + Pantenol", "Fragancia": "Flor de Almendro", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote 300g", "Dúo Estimulación (2 Potes)"] }],
    variations: [
      { regular_price: "42000", sku: "MASC-CEBOLLA-300", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Pote 300g" }] },
      { regular_price: "75000", sku: "MASC-CEBOLLA-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Estimulación (2 Potes)" }] }
    ]
  },
  {
    idInterno: "115",
    name: "Shampoo Dermo-Anticaída Fortalecedor con Minoxidil y Romero 400ml",
    slug: "shampoo-dermo-anticaida-minoxidil-romero-400ml",
    categorySlug: "capilar",
    subcategory: "Higiene y Salud del Cuero Cabelludo",
    dropiId: "804562",
    supplierId: "208167",
    costoDropi: 16900,
    pvpSugerido: 45000,
    stock: 6955,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Limpieza suave del cuero cabelludo con ingredientes dermo-activos que estimulan la irrigación folicular y reducen la caída por quiebre.",
    description: "<h3>Higiene Folicular Estimulante Diaria</h3><p>Limpia suavemente sin sulfatos agresivos, eliminando la acumulación de sebo que asfixia el folículo piloso, mientras infunde minoxidil y romero para tonificar la raíz.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/804562/1780685795Diseño%20sin%20título%20(73).jpg",
    specs: { "Volumen": "400 ml", "Fórmula": "Minoxidil + Romero + Sin Sal", "Uso": "Frecuente", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Botella 400ml", "Dúo Dermo-Anticaída (2 Botellas)"] }],
    variations: [
      { regular_price: "45000", sku: "SHAMP-MINOX-400", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Botella 400ml" }] },
      { regular_price: "79000", sku: "SHAMP-MINOX-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Dermo-Anticaída (2 Botellas)" }] }
    ]
  },
  {
    idInterno: "116",
    name: "Shampoo Clínico Anticaspa y Control Sebo Derseb con Ketoconazol 250ml",
    slug: "shampoo-clinico-anticaspa-control-sebo-derseb-250ml",
    categorySlug: "capilar",
    subcategory: "Higiene y Salud del Cuero Cabelludo",
    dropiId: "2077554",
    supplierId: "5673",
    costoDropi: 88900,
    pvpSugerido: 149000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Tratamiento dermatológico intensivo contra la caspa rebelde, dermatitis seborreica y descamación severa con acción antifúngica comprobada.",
    description: "<h3>Fórmula Dermatológica de Control Micótico</h3><p>Derseb combate de raíz la proliferación del hongo Malassezia globosa, aliviando la picazón, el enrojecimiento y la descamación desde las primeras aplicaciones sin resecar la fibra.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2077554/17704109961770351509DERSEB-ControlCaspa-2-scaled.png",
    specs: { "Volumen": "250 ml", "Activo": "Ketoconazol + Piritionato de Zinc", "Uso": "2 a 3 Veces por Semana", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 250ml", "Dúo Clínico (2 Frascos)"] }],
    variations: [
      { regular_price: "149000", sku: "DERSEB-CLINIC-250", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Frasco 250ml" }] },
      { regular_price: "279000", sku: "DERSEB-CLINIC-DUO", manage_stock: true, stock_quantity: 15, attributes: [{ name: "Presentación", option: "Dúo Clínico (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "117",
    name: "Serum Capilar Dermo-Calmante Anti-Caspa con Aceite de Árbol de Té 30ml",
    slug: "serum-capilar-dermo-calmante-anticaspa-arbol-te-30ml",
    categorySlug: "capilar",
    subcategory: "Higiene y Salud del Cuero Cabelludo",
    dropiId: "1637120",
    supplierId: "345873",
    costoDropi: 18000,
    pvpSugerido: 49000,
    stock: 483,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Gotas purificantes y calmantes formuladas con Melaleuca (Tea Tree) para reducir el picor, el enrojecimiento y reequilibrar el manto dérmico.",
    description: "<h3>Purificación y Calma Dérmica Localizada</h3><p>Acción antiséptica natural que desinflama el cuero cabelludo sensible o con tendencia a la descamación, dejando una sensación de frescura duradera sin engrasar la raíz.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1637120/1737643485SERUM%20ANTICASPA%20(1).png",
    specs: { "Volumen": "30 ml", "Activos": "Árbol de Té (Tea Tree) + Ácido Salicílico", "Efecto": "Anti-picor y Anticaspa", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Gotero 30ml", "Dúo Calmante (2 Goteros)"] }],
    variations: [
      { regular_price: "49000", sku: "SERUM-CASPA-30", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Gotero 30ml" }] },
      { regular_price: "89000", sku: "SERUM-CASPA-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Calmante (2 Goteros)" }] }
    ]
  },
  {
    idInterno: "118",
    name: "Exfoliante y Peeling Purificante para Cuero Cabelludo Scalp Detox 300ml",
    slug: "exfoliante-peeling-purificante-cuero-cabelludo-300ml",
    categorySlug: "capilar",
    subcategory: "Higiene y Salud del Cuero Cabelludo",
    dropiId: "1637112",
    supplierId: "345873",
    costoDropi: 25000,
    pvpSugerido: 62000,
    stock: 496,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Tratamiento exfoliante mecánico-enzimático que remueve células muertas, polución y residuos acumulados en los ostium foliculares.",
    description: "<h3>Desintoxicación Profunda del Cuero Cabelludo</h3><p>Permite que los tónicos y serums anticaída penetren con máxima eficacia al liberar los poros foliculares de impurezas y tapones sebáceos, reactivando la oxigenación celular.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1637112/1737642906EXFOLIANTE%20CAPILAR.png",
    specs: { "Volumen": "300 ml", "Micropartículas": "Semilla de Albaricoque y Sal Marina Fina", "Uso": "1 vez por semana pre-shampoo", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote 300ml", "Dúo Peeling Detox (2 Potes)"] }],
    variations: [
      { regular_price: "62000", sku: "EXFOL-SCALP-300", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Pote 300ml" }] },
      { regular_price: "112000", sku: "EXFOL-SCALP-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Peeling Detox (2 Potes)" }] }
    ]
  },
  {
    idInterno: "119",
    name: "Cepillo Masajeador Capilar de Silicona Médica para Ducha y Estimulación",
    slug: "cepillo-masajeador-capilar-silicona-medica-ducha",
    categorySlug: "capilar",
    subcategory: "Dispositivos Capilares y Estimulación",
    dropiId: "1948427",
    supplierId: "125258",
    costoDropi: 9900,
    pvpSugerido: 29000,
    stock: 150,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Diseño ergonómico con cerdas de silicona ultra-suaves de grado médico. Estimula el riego sanguíneo y mejora la limpieza en el lavado.",
    description: "<h3>Drenaje y Masaje Folicular en la Ducha</h3><p>Facilita la distribución homogénea del shampoo o tónico, exfolia suavemente sin raspar el cuero cabelludo y alivia el estrés acumulado mediante micromasaje circular.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1948427/1759444966MASAJEADOR%20CAPILAR%201.jpg",
    specs: { "Material": "Silicona Médica Hipoalergénica", "Mango": "Ergonómico Antideslizante", "Uso": "Seco o Húmedo", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Unidad Individual", "Pack Dúo Dermo-Masaje (2 Unidades)"] }],
    variations: [
      { regular_price: "29000", sku: "CEPILLO-SIL-01", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Unidad Individual" }] },
      { regular_price: "49000", sku: "CEPILLO-SIL-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Pack Dúo Dermo-Masaje (2 Unidades)" }] }
    ]
  },
  {
    idInterno: "120",
    name: "Cepillo Masajeador Capilar Láser y Fototerapia LED con Microvibración",
    slug: "cepillo-masajeador-capilar-laser-fototerapia-led",
    categorySlug: "capilar",
    subcategory: "Dispositivos Capilares y Estimulación",
    dropiId: "2239210",
    supplierId: "13352",
    costoDropi: 34900,
    pvpSugerido: 89000,
    stock: 241,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Dispositivo de fotobioestimulación con luz roja (650nm) y masaje vibratorio acústico para acelerar la regeneración celular del folículo.",
    description: "<h3>Fotobiomodulación Capilar Domiciliaria</h3><p>La luz roja de baja intensidad penetra hasta la papila dérmica incrementando la producción de ATP mitocondrial, acelerando la regeneración capilar y potenciando la efectividad de los tratamientos tópicos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2239210/d03893cc-1522-4827-a2af-f2f80a761f4c.png",
    specs: { "Tecnología": "Fototerapia LED Roja (650nm) + Microvibración", "Batería": "Recargable USB Tipo-C", "Uso": "10 Minutos Diarios", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Dispositivo Láser + Cable Carga", "Kit Premium Dispositivo + Tónico"] }],
    variations: [
      { regular_price: "89000", sku: "CEPILLO-LASER-01", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dispositivo Láser + Cable Carga" }] },
      { regular_price: "129000", sku: "CEPILLO-LASER-KIT", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Kit Premium Dispositivo + Tónico" }] }
    ]
  }
];

async function syncCapilar() {
  console.log(`Iniciando sincronización de ${CAPILAR_PRODUCTS_30.length} productos de Cuidado Capilar hacia WooCommerce...`);

  const categoryId = 83; // Category ID for 'capilar'

  // 1. Obtener productos existentes en WC para saber si ya existen por slug
  const existingProducts = await wcRequest(`/products?category=${categoryId}&per_page=100`);
  const existingMap = new Map(existingProducts.map((p) => [p.slug, p.id]));

  const results = [];

  for (const p of CAPILAR_PRODUCTS_30) {
    console.log(`\nProcesando [${p.idInterno}] ${p.name}...`);
    try {
      let productId = existingMap.get(p.slug);

      const payload = {
        name: p.name,
        slug: p.slug,
        type: p.type || "variable",
        status: p.status || "publish",
        featured: p.featured || false,
        short_description: `<p>${p.shortDescription}</p>`,
        description: p.description,
        categories: [{ id: categoryId }],
        images: [{ src: p.imageSrc }],
        attributes: p.attributes,
        meta_data: [
          { key: "_dropi_product_id", value: p.dropiId },
          { key: "_dropi_supplier_id", value: p.supplierId },
          { key: "_dropi_cost", value: String(p.costoDropi) },
          { key: "_suggested_price", value: String(p.pvpSugerido) },
          { key: "_specs_json", value: JSON.stringify(p.specs) },
          { key: "_subcategory", value: p.subcategory },
          { key: "_free_shipping", value: "no" },
          { key: "_cod_available", value: "yes" },
          { key: "_internal_id", value: p.idInterno },
        ],
      };

      let saved;
      if (productId) {
        saved = await wcRequest(`/products/${productId}`, "PUT", payload);
        console.log(`  ✓ Actualizado (ID: ${saved.id})`);
      } else {
        saved = await wcRequest("/products", "POST", payload);
        productId = saved.id;
        console.log(`  + Creado nuevo (ID: ${productId})`);
      }

      if (p.variations) {
        const existingVars = await wcRequest(`/products/${productId}/variations?per_page=50`);
        const varMap = new Map(existingVars.map((v) => [v.sku, v.id]));

        for (const v of p.variations) {
          if (varMap.has(v.sku)) {
            await wcRequest(`/products/${productId}/variations/${varMap.get(v.sku)}`, "PUT", v);
          } else {
            await wcRequest(`/products/${productId}/variations`, "POST", v);
          }
        }
        console.log(`  ✓ ${p.variations.length} variaciones sincronizadas.`);
      }

      results.push({
        idInterno: p.idInterno,
        wcId: saved.id,
        slug: p.slug,
        name: p.name,
      });
    } catch (err) {
      console.error(`Error procesando ${p.name}:`, err.message);
    }
  }

  console.log(`\n¡Sincronización Cuidado Capilar completada! Total: ${results.length}`);
}

syncCapilar().catch(console.error);
