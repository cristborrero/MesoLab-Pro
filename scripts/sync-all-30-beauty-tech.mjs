/**
 * Script de Ingesta Automatizada de 30 Productos Beauty Tech hacia WooCommerce REST API
 * MesoLab Pro - Pipeline Dropshipping & Dermo-Estética
 */

const WC_URL = process.env.NEXT_PUBLIC_WC_URL;
const KEY = process.env.WC_CONSUMER_KEY;
const SECRET = process.env.WC_CONSUMER_SECRET;

if (!WC_URL || !KEY || !SECRET) {
  console.error("Faltan credenciales de WooCommerce en .env.local");
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

// ── Lista Maestra de los 30 Productos de Beauty Tech ─────────────────────────
export const BEAUTY_TECH_30 = [
  // 1 a 5 (Ya existentes y verificados)
  {
    idInterno: "001",
    name: "Depiladora Láser IPL Portátil Pro",
    slug: "depiladora-laser-ipl-pro",
    categorySlug: "beauty-tech",
    subcategory: "Depilación Láser IPL",
    dropiId: "1101421",
    supplierId: "33580",
    costoDropi: 50000,
    pvpSugerido: 139000,
    stock: 272,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Tecnología de luz pulsada intensa (IPL) de 999.000 pulsos. Reduce hasta el 92% del vello en 8 semanas desde casa. Pago Contra Entrega.",
    description: "<h3>Piel Suave y Sin Vello Definitiva en Casa</h3><p>La Depiladora Láser IPL Portátil Pro utiliza pulsos de luz clínicamente probados que actúan sobre el folículo piloso debilitando el crecimiento progresivamente.</p>",
    imageSrc: "https://api.mesolabpro.com.co/wp-content/uploads/2026/10/1717018299imagen_2024-05-29_163101962.png",
    specs: { "Pulsos": "999.000", "Niveles": "5", "Garantía": "12 meses", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Kit Estándar (999.000 Pulsos)", "Kit Pro (+ Gafas UV & Cabezal Precisión)"] }],
    variations: [
      { regular_price: "139000", sku: "IPL-STD-01", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Kit Estándar (999.000 Pulsos)" }] },
      { regular_price: "169000", sku: "IPL-PRO-02", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Kit Pro (+ Gafas UV & Cabezal Precisión)" }] }
    ]
  },
  {
    idInterno: "002",
    name: "Masajeador Facial Gua Sha con Radiofrecuencia y LED",
    slug: "masajeador-gua-sha-radiofrecuencia-led",
    categorySlug: "beauty-tech",
    subcategory: "Masajeadores Faciales y Gua Sha LED",
    dropiId: "2182490",
    supplierId: "2182490",
    costoDropi: 26500,
    pvpSugerido: 89000,
    stock: 525,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Diseño ergonómico ancestral combinado con microcorrientes EMS, radiofrecuencia bimodal y terapia LED roja/azul. Estimula colágeno y define contorno.",
    description: "<h3>Lifting Facial y Drenaje Linfático Inteligente</h3><p>Fusiona la medicina tradicional con electroterapia avanzada para descongestionar y tonificar el tejido facial.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2182490/17820187971000796740.jpg",
    specs: { "Tecnología": "EMS + RF + LED", "Batería": "Recargable USB", "Garantía": "6 meses", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Blanco Perla", "Oro Rosa"] }],
    variations: [
      { regular_price: "89000", sku: "GS-RF-WHT", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Color", option: "Blanco Perla" }] },
      { regular_price: "89000", sku: "GS-RF-RSG", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Color", option: "Oro Rosa" }] }
    ]
  },
  {
    idInterno: "003",
    name: "Espátula Peeling Ultrasónico Limpieza Facial Profunda",
    slug: "espatula-peeling-ultrasonico",
    categorySlug: "beauty-tech",
    subcategory: "Electroporadores y Peeling Ultrasónico",
    dropiId: "1375642",
    supplierId: "55384",
    costoDropi: 19900,
    pvpSugerido: 79000,
    stock: 983,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Vibración ultrasónica de alta frecuencia (24.000 Hz) que desincrusta puntos negros, exceso de grasa y células queratinizadas sin irritación.",
    description: "<h3>Higiene Facial Dermo-Clínica sin Dolor</h3><p>Emulsiona el sebo de los poros abiertos mediante 24.000 Hz de oscilación ultrasónica sin lesionar la epidermis.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/649293/1707834447peelingFacial.png",
    specs: { "Frecuencia": "24.000 Hz", "Cabezal": "Acero Quirúrgico", "Garantía": "6 meses", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Blanco Glaciar", "Negro Matte"] }],
    variations: [
      { regular_price: "79000", sku: "PEEL-US-WHT", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Color", option: "Blanco Glaciar" }] },
      { regular_price: "79000", sku: "PEEL-US-BLK", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Color", option: "Negro Matte" }] }
    ]
  },
  {
    idInterno: "004",
    name: "Masajeador Lifting Cuello y Papada Triple Fototerapia LED",
    slug: "masajeador-cuello-papada-led",
    categorySlug: "beauty-tech",
    subcategory: "Masajeadores Faciales y Gua Sha LED",
    dropiId: "2116554",
    supplierId: "2116554",
    costoDropi: 21000,
    pvpSugerido: 79000,
    stock: 600,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Cabezal ergonómico delfín 160° para cuello, papada y escote con calor constante a 45°C y triple fototerapia LED (Rojo, Azul, Verde).",
    description: "<h3>Esculpe Mandíbula, Cuello y Escote</h3><p>Termoterapia constante combinada con microvibración acústica para tonificar el platisma y reducir la papada.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2116554/17745430001714503299WhatsApp%20Image%202024-04-30%20at%201.48.24%20PM%20(1).jpeg",
    specs: { "Curvatura": "160 Grados", "Temperatura": "45°C", "Fototerapia": "3 Modos LED", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Blanco Esculpido", "Negro Satinado"] }],
    variations: [
      { regular_price: "79000", sku: "LIFT-NCK-WHT", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Color", option: "Blanco Esculpido" }] },
      { regular_price: "79000", sku: "LIFT-NCK-BLK", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Color", option: "Negro Satinado" }] }
    ]
  },
  {
    idInterno: "005",
    name: "Equipo Facial Alta Frecuencia Portátil 4 Electrodos Neón",
    slug: "equipo-alta-frecuencia-neon",
    categorySlug: "beauty-tech",
    subcategory: "Alta Frecuencia y Microcorrientes",
    dropiId: "879697",
    supplierId: "879697",
    costoDropi: 33500,
    pvpSugerido: 99000,
    stock: 298,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Aparato profesional de corriente de alta frecuencia con gas Neón (luz naranja). Acción bactericida antiacné y oxigenación celular inmediata.",
    description: "<h3>Desinfección y Rejuvenecimiento Clínico</h3><p>Emite microdescargas de alta frecuencia que generan ozono en la superficie dérmica, eliminando bacterias causantes de brotes.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/879697/1718293382Alta%20Frecuencia%20Portatil%20Facial%20Y%20Corporal%204%20Electrodos%20B.jpg",
    specs: { "Gas": "Neón Puro", "Electrodos": "4 piezas de cristal", "Voltaje": "110V Colombia", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Kit Estándar (4 Tubos Neón)", "Kit Pro (+ Suero Conductor Ácido Hialurónico)"] }],
    variations: [
      { regular_price: "99000", sku: "AF-PORT-STD", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Kit Estándar (4 Tubos Neón)" }] },
      { regular_price: "129000", sku: "AF-PORT-PRO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Kit Pro (+ Suero Conductor Ácido Hialurónico)" }] }
    ]
  },

  // 6 a 10
  {
    idInterno: "006",
    name: "Máscara Facial Fototerapia LED 7 Colores Espectro Completo",
    slug: "mascara-led-fototerapia-7-colores",
    categorySlug: "beauty-tech",
    subcategory: "Máscaras LED y Fototerapia",
    dropiId: "2281566",
    supplierId: "43339",
    costoDropi: 49970,
    pvpSugerido: 129000,
    stock: 379,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Tratamiento dérmico integral con 7 longitudes de onda LED. Estimula síntesis de colágeno, combate bacterias de acné y aclara hiperpigmentación.",
    description: "<h3>Fototerapia de Cabina Profesional en Casa</h3><p>La máscara LED de 7 colores penetra a diferentes profundidades celulares para activar la regeneración tisular sin dolor ni tiempo de recuperación.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2281566/4fb85123-8cca-43fc-aabf-c51ed0906d6c.png",
    specs: { "Colores LED": "7 Longitudes de onda", "Alimentación": "Control USB recargable", "Garantía": "6 meses", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Edición", position: 0, visible: true, variation: true, options: ["Edición Estándar Rostro", "Edición Premium Rostro + Cuello"] }],
    variations: [
      { regular_price: "129000", sku: "MASK-7C-STD", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Edición", option: "Edición Estándar Rostro" }] },
      { regular_price: "159000", sku: "MASK-7C-PRO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Edición", option: "Edición Premium Rostro + Cuello" }] }
    ]
  },
  {
    idInterno: "007",
    name: "Dermapen Eléctrico Auto-Microneedling Profesional",
    slug: "dermapen-electrico-microneedling-profesional",
    categorySlug: "beauty-tech",
    subcategory: "Dermapen y Microneedling",
    dropiId: "1752995",
    supplierId: "36223",
    costoDropi: 70000,
    pvpSugerido: 149000,
    stock: 175,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Dispositivo de microneedling automático con profundidad regulable de 0.25mm a 2.5mm. Inducción de colágeno, atenuación de cicatrices y poros abiertos.",
    description: "<h3>Bioestimulación Cutánea de Precisión</h3><p>Genera microcanales transdérmicos controlados para multiplicar hasta un 80% la absorción de sueros de ácido hialurónico y activos tensores.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1752995/1744482792dermapen.png",
    specs: { "Profundidad": "0.25 mm a 2.5 mm regulable", "Velocidades": "5 niveles de oscilación", "Garantía": "12 meses", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Kit Básico (+ 2 Cartuchos)", "Kit Clínico (+ 10 Cartuchos Variados)"] }],
    variations: [
      { regular_price: "149000", sku: "DPEN-110V-STD", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Kit Básico (+ 2 Cartuchos)" }] },
      { regular_price: "179000", sku: "DPEN-110V-CLI", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Kit Clínico (+ 10 Cartuchos Variados)" }] }
    ]
  },
  {
    idInterno: "008",
    name: "Vaporizador Facial Iónico con Nano-Niebla Térmica",
    slug: "vaporizador-facial-ionico-nano-niebla",
    categorySlug: "beauty-tech",
    subcategory: "Vaporizadores y Saunas Faciales",
    dropiId: "1192987",
    supplierId: "32016",
    costoDropi: 45000,
    pvpSugerido: 99000,
    stock: 1000,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Nano-vapor caliente ionizado que penetra 10 veces más que el vapor común. Dilata poros, disuelve impurezas rebeldes y prepara la piel para tratamientos.",
    description: "<h3>Apertura e Hidratación Iónica Celular</h3><p>Genera partículas de vapor nanométricas que ablandan comedones y restauran la barrera de hidratación natural.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1192987/1726241790Diseño%20sin%20título%20-%202024-09-13T103326.579.png",
    specs: { "Tiempo de Vapor": "10-15 min continuos", "Capacidad": "Tanque 70 ml", "Garantía": "6 meses", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Blanco Puro", "Rosa Suave"] }],
    variations: [
      { regular_price: "99000", sku: "VAPO-ION-WHT", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Color", option: "Blanco Puro" }] },
      { regular_price: "99000", sku: "VAPO-ION-PNK", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Color", option: "Rosa Suave" }] }
    ]
  },
  {
    idInterno: "009",
    name: "Extractor Hidrofacial por Microburbujas y Succión al Vacío",
    slug: "extractor-hidrofacial-microburbujas-vacio",
    categorySlug: "beauty-tech",
    subcategory: "Extractores de Poros y Succión",
    dropiId: "1824329",
    supplierId: "43728",
    costoDropi: 28000,
    pvpSugerido: 89000,
    stock: 218,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Sistema de hidrodermoabrasión con recirculación de agua limpia y succión de impurezas. Limpia puntos negros sin pellizcar ni dejar marcas.",
    description: "<h3>Limpieza Húmeda Dermo-Aspirativa</h3><p>Combina microflujo hídrico con vacío regulable para extraer sebo, desincrustar poros e hidratar simultáneamente.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1824329/1747444650Diseño%20sin%20título%20-%202025-05-16T200412.815.png",
    specs: { "Tanques": "Doble depósito independiente", "Cabezales": "6 Boquillas intercambiables", "Garantía": "6 meses", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Kit Estándar (6 Boquillas)", "Kit Dúo (2 Equipos con Descuento)"] }],
    variations: [
      { regular_price: "89000", sku: "HYDRA-VAC-STD", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Kit Estándar (6 Boquillas)" }] },
      { regular_price: "149000", sku: "HYDRA-VAC-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Kit Dúo (2 Equipos con Descuento)" }] }
    ]
  },
  {
    idInterno: "010",
    name: "Equipo Cavitador Ultrasónico y EMS Corporal 3 en 1",
    slug: "cavitador-ultrasonico-ems-corporal-3en1",
    categorySlug: "beauty-tech",
    subcategory: "Cavitación y Reducción Corporal",
    dropiId: "788821",
    supplierId: "36082",
    costoDropi: 52000,
    pvpSugerido: 139000,
    stock: 249,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Ultrasonido cavitacional 1 MHz, calor infrarrojo y gimnasia pasiva EMS de 5 modos. Moldea abdomen, piernas y brazos estimulando el metabolismo graso.",
    description: "<h3>Moldeamiento y Tonificación Silueta</h3><p>La cavitación acústica descompone adipocitos mientras el infrarrojo activa la microcirculación y el modo EMS tonifica las fibras musculares.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/788821/1713475872masajeador%20ultrasonico2.jpg",
    specs: { "Frecuencia": "1 MHz Cavitación", "Modos EMS": "5 Intensidades", "Garantía": "12 meses", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Kit Estándar 3 en 1", "Kit Pro (+ Gel Conductor Lipolítico)"] }],
    variations: [
      { regular_price: "139000", sku: "CAVIT-3IN1-STD", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Kit Estándar 3 en 1" }] },
      { regular_price: "169000", sku: "CAVIT-3IN1-PRO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Kit Pro (+ Gel Conductor Lipolítico)" }] }
    ]
  },

  // 11 a 15
  {
    idInterno: "011",
    name: "Lápiz Cauterizador Plasma Pen Recargable",
    slug: "plasma-pen-cauterizador-recargable",
    categorySlug: "beauty-tech",
    subcategory: "Plasma Pen y Cauterizadores",
    dropiId: "1982303",
    supplierId: "197931",
    costoDropi: 42000,
    pvpSugerido: 99000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Tecnología de descarga de microplasma de baja temperatura. Permite remoción estética precisa de pequeñas imperfecciones, manchas superficiales y puntos de rubí.",
    description: "<h3>Electrocauterio Focalizado</h3><p>Produce un pequeño arco de plasma térmico que sublima el tejido superficial estimulando la regeneración celular limpia.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1982303/1762016142Diseño%20sin%20título%20-%202025-11-01T115340.729.png",
    specs: { "Niveles": "9 Potencias", "Agujas": "Finas y gruesas incluidas", "Batería": "Recargable USB", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Blanco Perla", "Oro Metálico"] }],
    variations: [
      { regular_price: "99000", sku: "PLAS-PEN-WHT", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Color", option: "Blanco Perla" }] },
      { regular_price: "99000", sku: "PLAS-PEN-GLD", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Color", option: "Oro Metálico" }] }
    ]
  },
  {
    idInterno: "012",
    name: "Cepillo Limpiador Facial Giratorio 5 en 1 Beauty Care",
    slug: "cepillo-facial-giratorio-5en1",
    categorySlug: "beauty-tech",
    subcategory: "Cepillos y Limpiadores Sónicos",
    dropiId: "98860",
    supplierId: "7151",
    costoDropi: 13000,
    pvpSugerido: 59000,
    stock: 200,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Sistema rotativo de exfoliación y masaje dérmico con 5 cabezales intercambiables (cerdas suaves, esponja látex, piedra pómez, masajeador esferas).",
    description: "<h3>Limpieza y Exfoliación Mecánica 5 en 1</h3><p>Remueve restos de maquillaje, piel escamosa e impurezas preparando la epidermis para la absorción de principios activos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/98860/17023924201702392420descarga%20(4).jpg",
    specs: { "Cabezales": "5 Accesorios incluidos", "Velocidades": "2 Niveles rotativos", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Kit Estándar (5 Cabezales)", "Dúo Familiar (2 Kits)"] }],
    variations: [
      { regular_price: "59000", sku: "BRSH-5IN1-STD", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Kit Estándar (5 Cabezales)" }] },
      { regular_price: "99000", sku: "BRSH-5IN1-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Familiar (2 Kits)" }] }
    ]
  },
  {
    idInterno: "013",
    name: "Dispositivo Radiofrecuencia Facial Tripolar con Fototerapia LED",
    slug: "radiofrecuencia-facial-tripolar-led",
    categorySlug: "beauty-tech",
    subcategory: "Radiofrecuencia y Electroporación",
    dropiId: "1851775",
    supplierId: "394103",
    costoDropi: 55900,
    pvpSugerido: 129000,
    stock: 654,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Ondas electromagnéticas de radiofrecuencia bimodal combinadas con 5 terapias de luz LED. Regenera la matriz dérmica y alisa líneas finas de expresión.",
    description: "<h3>Reafirmación Cutánea No Invasiva</h3><p>Genera calor dérmico controlado que induce la neocolagénesis y revitaliza la turgencia facial.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1851775/1750168537D_NQ_NP_984625-MLA79972702958_102024-O.png",
    specs: { "Modos LED": "Rojo, Azul, Amarillo, Verde, Rosa", "Frecuencia": "RF Tripolar", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Blanco Nácar", "Rosa Oro"] }],
    variations: [
      { regular_price: "129000", sku: "RF-TRIP-WHT", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Color", option: "Blanco Nácar" }] },
      { regular_price: "129000", sku: "RF-TRIP-RSG", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Color", option: "Rosa Oro" }] }
    ]
  },
  {
    idInterno: "014",
    name: "Derma Wand Pro Tonificador Facial por Alta Frecuencia",
    slug: "derma-wand-pro-tonificador-facial",
    categorySlug: "beauty-tech",
    subcategory: "Alta Frecuencia y Microcorrientes",
    dropiId: "1682676",
    supplierId: "144205",
    costoDropi: 37000,
    pvpSugerido: 99000,
    stock: 382,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Emite microcorrientes pulsadas a 100.000 ciclos por segundo con liberación de oxígeno enriquecido. Desinflama bolsas, minimiza poros y alisa líneas.",
    description: "<h3>Oxigenación y Efecto Tensor Inmediato</h3><p>La tecnología Derma Wand proporciona masaje térmico de alta frecuencia que tonifica la musculatura facial y combate la piel cansada.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1682676/1740255728descarga%20(6).jpg",
    specs: { "Microciclos": "100.000 ciclos/segundo", "Regulación": "9 Niveles de potencia", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Kit Estándar con Estuche", "Kit Dúo (2 Equipos)"] }],
    variations: [
      { regular_price: "99000", sku: "DWAND-PRO-STD", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Kit Estándar con Estuche" }] },
      { regular_price: "169000", sku: "DWAND-PRO-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Kit Dúo (2 Equipos)" }] }
    ]
  },
  {
    idInterno: "015",
    name: "Cepillo Masajeador Capilar Eléctrico 3D Fototerapia y Crecimiento",
    slug: "cepillo-masajeador-capilar-electrico-3d",
    categorySlug: "beauty-tech",
    subcategory: "Aparatología Capilar",
    dropiId: "2097027",
    supplierId: "228310",
    costoDropi: 32000,
    pvpSugerido: 89000,
    stock: 4976,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Cabezal de masaje 3D con fototerapia roja y vibración microacústica. Estimula la circulación folicular y optimiza la absorción de tónicos anticaída.",
    description: "<h3>Reactivación del Folículo Piloso</h3><p>Masaje multidireccional que alivia la tensión del cuero cabelludo y oxigena las raíces para un cabello más denso y fuerte.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2097027/1772299660BBBBB.jpg",
    specs: { "Movimiento": "3D Multidireccional", "Resistencia": "Resistente a salpicaduras IPX7", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Blanco Titanio", "Gris Espacial"] }],
    variations: [
      { regular_price: "89000", sku: "CAP-3D-WHT", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Color", option: "Blanco Titanio" }] },
      { regular_price: "89000", sku: "CAP-3D-GRY", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Color", option: "Gris Espacial" }] }
    ]
  },

  // 16 a 20
  {
    idInterno: "016",
    name: "Cepillo Masajeador Capilar con Nano Spray de Iones",
    slug: "cepillo-capilar-nano-spray-iones",
    categorySlug: "beauty-tech",
    subcategory: "Aparatología Capilar",
    dropiId: "2222902",
    supplierId: "141975",
    costoDropi: 23000,
    pvpSugerido: 69000,
    stock: 206,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Pulveriza lociones o agua destilada en microgotas nanoiónicas mientras desenreda y masajea. Hidrata la fibra capilar reduciendo el frizz.",
    description: "<h3>Hidratación Transdérmica Capilar</h3><p>La tecnología ultrasónica convierte cualquier loción revitalizante en niebla ultrafina que penetra profundamente en la cutícula capilar.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2222902/209ddbcf-3b9c-475c-b985-425e0cf4ff1a.png",
    specs: { "Tanque": "Integrado para loción capilar", "Tecnología": "Nano-Spray ultrasónico", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Verde Menta", "Blanco Glaciar"] }],
    variations: [
      { regular_price: "69000", sku: "CAP-NANO-GRN", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Color", option: "Verde Menta" }] },
      { regular_price: "69000", sku: "CAP-NANO-WHT", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Color", option: "Blanco Glaciar" }] }
    ]
  },
  {
    idInterno: "017",
    name: "Rizador Térmico de Pestañas Eléctrico con Termorregulación",
    slug: "rizador-termico-pestanas-electrico",
    categorySlug: "beauty-tech",
    subcategory: "Ojos y Pestañas Tech",
    dropiId: "2168876",
    supplierId: "894235",
    costoDropi: 13000,
    pvpSugerido: 49000,
    stock: 145,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Calor suave de 65°C a 85°C que arquea las pestañas de forma natural y duradera hasta por 24 horas sin pellizcar ni quebrar el pelo.",
    description: "<h3>Curvatura de Precisión sin Pellizcos</h3><p>Almohadilla de silicona termoactiva con control de temperatura inteligente para proteger las pestañas más delicadas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2168876/17805411362ae6cbe3-977c-49b1-8eaa-ce0c781bfc22.jpg",
    specs: { "Temperatura": "65°C - 85°C", "Carga": "USB tipo C", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Rosa Bebé", "Blanco Perla"] }],
    variations: [
      { regular_price: "49000", sku: "RIZ-TERM-PNK", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Color", option: "Rosa Bebé" }] },
      { regular_price: "49000", sku: "RIZ-TERM-WHT", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Color", option: "Blanco Perla" }] }
    ]
  },
  {
    idInterno: "018",
    name: "Depiladora Facial de Precisión y Perfilador de Cejas Recargable",
    slug: "depiladora-facial-cejas-recargable",
    categorySlug: "beauty-tech",
    subcategory: "Depilación Láser IPL",
    dropiId: "1965520",
    supplierId: "49923",
    costoDropi: 31980,
    pvpSugerido: 79000,
    stock: 1222,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Cabezal microquirúrgico dual para cejas, bozo, mentón y mejillas. Corte hipoalergénico indoloro al ras con luz LED auxiliar de precisión.",
    description: "<h3>Perfilado Facial Instantáneo sin Enrojecimiento</h3><p>Cuchillas de acero inoxidable alemán que cortan el vello sin arrancarlo de raíz ni provocar vellos encarnados.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1965520/1760711769DL06.JPG",
    specs: { "Cabezales": "Dual (Cejas + Rostro)", "Carga": "Batería recargable USB", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Oro Rosa", "Blanco Nácar"] }],
    variations: [
      { regular_price: "79000", sku: "DEP-CEJ-RSG", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Color", option: "Oro Rosa" }] },
      { regular_price: "79000", sku: "DEP-CEJ-WHT", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Color", option: "Blanco Nácar" }] }
    ]
  },
  {
    idInterno: "019",
    name: "Depiladora Facial Multifunción 4 en 1 para Rostro y Cuerpo",
    slug: "depiladora-facial-multifuncion-4en1",
    categorySlug: "beauty-tech",
    subcategory: "Depilación Láser IPL",
    dropiId: "242034",
    supplierId: "32016",
    costoDropi: 24000,
    pvpSugerido: 69000,
    stock: 676,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Kit completo de depilación suave con 4 cabezales intercambiables: rasurado facial, perfilador de cejas, recortador de nariz y recortador de zona bikini.",
    description: "<h3>Higiene y Perfilado Integral Portátil</h3><p>Un solo dispositivo ergonómico para resolver todas las necesidades de corte corporal y facial sin irritación.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/242034/17019755361701975536Screenshot_7.jpg",
    specs: { "Cabezales": "4 Accesorios intercambiables", "Carga": "USB", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Rosa Metálico", "Plata Satinado"] }],
    variations: [
      { regular_price: "69000", sku: "DEP-4IN1-PNK", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Color", option: "Rosa Metálico" }] },
      { regular_price: "69000", sku: "DEP-4IN1-SLV", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Color", option: "Plata Satinado" }] }
    ]
  },
  {
    idInterno: "020",
    name: "Sauna Facial con Inhalador Térmico Spa para Hidratación Profunda",
    slug: "sauna-facial-inhalador-termico-spa",
    categorySlug: "beauty-tech",
    subcategory: "Vaporizadores y Saunas Faciales",
    dropiId: "1965189",
    supplierId: "49923",
    costoDropi: 52777,
    pvpSugerido: 119000,
    stock: 1466,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Máscara ergonómica envolvente con generación continua de vapor cálido. Dilata poros en todo el óvalo facial e incluye cono nasal para descongestión respiratoria.",
    description: "<h3>Experiencia Spa y Limpieza Profunda Facial</h3><p>El calor húmedo uniforme ablanda comedones y toxinas retenidas, aumentando la circulación cutánea y la relajación.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1965189/1760651539VP01.JPG",
    specs: { "Capacidad": "Tanque 50 ml", "Voltaje": "110V estándar", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Púrpura Spa", "Blanco Glaciar"] }],
    variations: [
      { regular_price: "119000", sku: "SAUN-FAC-PUR", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Color", option: "Púrpura Spa" }] },
      { regular_price: "119000", sku: "SAUN-FAC-WHT", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Color", option: "Blanco Glaciar" }] }
    ]
  },

  // 21 a 25
  {
    idInterno: "021",
    name: "Dispositivo Esculpidor de Rostro y Reductor de Papada SkinLift V-Face",
    slug: "tonificador-rostro-papada-skinlift",
    categorySlug: "beauty-tech",
    subcategory: "Masajeadores Faciales y Gua Sha LED",
    dropiId: "2228164",
    supplierId: "96165",
    costoDropi: 29000,
    pvpSugerido: 79000,
    stock: 452,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Banda anatómica con electrodos EMS y fototerapia roja/azul que tensa la barbilla y define el óvalo mandibular mientras descansas.",
    description: "<h3>Lifting Mandibular Manos Libres</h3><p>Aplica impulsos de microcorriente continuos para tonificar el músculo masetero y reducir el descolgamiento cervical.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2228164/05522c86-ec8e-4174-bd9c-c16f818453d0.jpeg",
    specs: { "Modos": "Lifting EMS + Fototerapia Bicolor", "Control": "Mando inalámbrico", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Blanco Puro", "Rosa Cuarzo"] }],
    variations: [
      { regular_price: "79000", sku: "VFACE-LIFT-WHT", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Color", option: "Blanco Puro" }] },
      { regular_price: "79000", sku: "VFACE-LIFT-PNK", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Color", option: "Rosa Cuarzo" }] }
    ]
  },
  {
    idInterno: "022",
    name: "Dispositivo Reafirmante Esculpidor Corporal EMS y Tonificación",
    slug: "esculpidor-tonificador-corporal-ems",
    categorySlug: "beauty-tech",
    subcategory: "Cavitación y Reducción Corporal",
    dropiId: "2290771",
    supplierId: "96165",
    costoDropi: 46000,
    pvpSugerido: 119000,
    stock: 208,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Dispositivo ergonómico de electroestimulación muscular profunda para abdomen, glúteos y muslos. Favorece la firmeza y reduce la apariencia de celulitis.",
    description: "<h3>Electroestimulación Focalizada de Alta Intensidad</h3><p>Genera contracciones musculares involuntarias de alta frecuencia para compactar el tejido graso y redefinir contornos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2290771/b3403877-6468-41d7-b1b5-9219b6934c5a.png",
    specs: { "Niveles": "10 Intensidades EMS", "Zonas": "Abdomen, glúteos, muslos", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Kit Estándar Corporal", "Kit Pro (+ Geles Conductores Dúo)"] }],
    variations: [
      { regular_price: "119000", sku: "BODY-EMS-STD", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Kit Estándar Corporal" }] },
      { regular_price: "149000", sku: "BODY-EMS-PRO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Kit Pro (+ Geles Conductores Dúo)" }] }
    ]
  },
  {
    idInterno: "023",
    name: "Masajeador Facial de Microcorrientes Bipolar y Esferas 3D",
    slug: "masajeador-microcorriente-esferas-3d",
    categorySlug: "beauty-tech",
    subcategory: "Alta Frecuencia y Microcorrientes",
    dropiId: "2185008",
    supplierId: "49923",
    costoDropi: 16270,
    pvpSugerido: 59000,
    stock: 2688,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Doble esfera giratoria en ángulo de 70° que imita el pinzamiento dérmico profesional con microcorrientes suaves que tonifican pómulos y cejas.",
    description: "<h3>Gimnasia Facial y Efecto Tensor Diario</h3><p>Activa la circulación linfática disminuyendo la hinchazón matutina y redefiniendo pómulos con sesiones de 5 minutos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2185008/17823332412.jpeg",
    specs: { "Ángulo": "Esferas 70 Grados", "Batería": "Recargable USB", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Rosa Pastel", "Blanco Perla"] }],
    variations: [
      { regular_price: "59000", sku: "ESF-3D-PNK", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Color", option: "Rosa Pastel" }] },
      { regular_price: "59000", sku: "ESF-3D-WHT", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Color", option: "Blanco Perla" }] }
    ]
  },
  {
    idInterno: "024",
    name: "Extractor de Puntos Negros Eléctrico con Pantalla LCD",
    slug: "extractor-puntos-negros-pantalla-lcd",
    categorySlug: "beauty-tech",
    subcategory: "Extractores de Poros y Succión",
    dropiId: "339276",
    supplierId: "55394",
    costoDropi: 25000,
    pvpSugerido: 69000,
    stock: 124,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Aspiración por vacío con pantalla digital LCD que muestra nivel de potencia y batería. Incluye 5 boquillas ergonómicas para distintas zonas de la nariz y rostro.",
    description: "<h3>Succión Dérmica de Poros Controlada</h3><p>3 intensidades de succión ajustables según el tipo de piel (sensible, normal, mixta) para extraer impurezas sin hematomas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/339276/17018797261701879726pWzSZ5KUgSlJK01hsfcEe53ooweGbvclN4WiIjDI.jpg",
    specs: { "Pantalla": "LCD Inteligente", "Boquillas": "5 Puntas intercambiables", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Blanco Puro", "Verde Jade"] }],
    variations: [
      { regular_price: "69000", sku: "EXTR-LCD-WHT", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Color", option: "Blanco Puro" }] },
      { regular_price: "69000", sku: "EXTR-LCD-JAD", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Color", option: "Verde Jade" }] }
    ]
  },
  {
    idInterno: "025",
    name: "Cepillo Limpiador Facial de Drenaje Linfático y Puntos Negros",
    slug: "cepillo-facial-drenaje-linfatico",
    categorySlug: "beauty-tech",
    subcategory: "Cepillos y Limpiadores Sónicos",
    dropiId: "2212435",
    supplierId: "6006",
    costoDropi: 12890,
    pvpSugerido: 49000,
    stock: 562,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Cerdas de silicona antibacteriana de grado médico con microvibraciones y zona posterior para masaje de drenaje linfático de contorno facial.",
    description: "<h3>Higiene Sónica y Drenaje Facial</h3><p>Elimina el 99.5% de suciedad, grasa y residuos cosméticos mientras reactiva la circulación con pulsaciones sónicas suaves.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2212435/178504127171seX7XMTRL._AC_SL1275_.jpg",
    specs: { "Material": "Silicona médica no porosa", "Velocidades": "3 Niveles de vibración", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Rosa Rubor", "Verde Menta"] }],
    variations: [
      { regular_price: "49000", sku: "SIL-LINF-PNK", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Color", option: "Rosa Rubor" }] },
      { regular_price: "49000", sku: "SIL-LINF-MNT", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Color", option: "Verde Menta" }] }
    ]
  },

  // 26 a 30
  {
    idInterno: "026",
    name: "Dermapen Inalámbrico Metálico de Alta Precisión Micro-Needle",
    slug: "dermapen-inalambrico-metalico-alta-precision",
    categorySlug: "beauty-tech",
    subcategory: "Dermapen y Microneedling",
    dropiId: "1474508",
    supplierId: "325736",
    costoDropi: 112443,
    pvpSugerido: 229000,
    stock: 1000,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Cuerpo de aleación de aluminio aeronáutico con motor suizo de alta velocidad. Batería de litio inalámbrica para procedimientos clínicos sin cables.",
    description: "<h3>Instrumental Clínico de Alta Gama</h3><p>Estabilidad de punción sin oscilación lateral para tratamientos de marcas de acné, poros dilatados y renovación epidérmica profunda.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1474508/17424020101.jpg",
    specs: { "Cuerpo": "Aluminio Aeronáutico", "Batería": "Inalámbrica recargable dual", "Garantía": "12 meses", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Edición", position: 0, visible: true, variation: true, options: ["Edición Metal Silver", "Edición Metal Black"] }],
    variations: [
      { regular_price: "229000", sku: "DPEN-MET-SLV", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Edición", option: "Edición Metal Silver" }] },
      { regular_price: "229000", sku: "DPEN-MET-BLK", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Edición", option: "Edición Metal Black" }] }
    ]
  },
  {
    idInterno: "027",
    name: "Aparato de Electroporación y Mesoterapia Virtual Transdérmica",
    slug: "electroporacion-mesoterapia-virtual-transdermica",
    categorySlug: "beauty-tech",
    subcategory: "Radiofrecuencia y Electroporación",
    dropiId: "340169",
    supplierId: "13615",
    costoDropi: 45900,
    pvpSugerido: 129000,
    stock: 93,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Ondas electromagnéticas que abren temporalmente la bicapa lipídica celular para introducir principios activos sin inyecciones.",
    description: "<h3>Mesoterapia Virtual Sin Agujas</h3><p>Permite la penetración de cócteles estéticos y sueros de ácido hialurónico a través de microporos dérmicos temporales.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/340169/1701879652170187965289.PNG",
    specs: { "Tecnología": "Electroporación + Fototerapia LED", "Garantía": "6 meses", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Kit Estándar Electroporador", "Kit Pro (+ Ampolleta Conductora 10ml)"] }],
    variations: [
      { regular_price: "129000", sku: "ELECT-MESO-STD", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Kit Estándar Electroporador" }] },
      { regular_price: "159000", sku: "ELECT-MESO-PRO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Kit Pro (+ Ampolleta Conductora 10ml)" }] }
    ]
  },
  {
    idInterno: "028",
    name: "Vaporizador Facial Portátil Nano-Mister Hidratación y Fijación",
    slug: "vaporizador-portatil-nano-mister-recargable",
    categorySlug: "beauty-tech",
    subcategory: "Vaporizadores y Saunas Faciales",
    dropiId: "2281692",
    supplierId: "651557",
    costoDropi: 12000,
    pvpSugerido: 39000,
    stock: 351,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Pulverizador de bolsillo con microtecnología de atomización ultra fina. Refresca la piel al instante, fija el maquillaje y alivia la resequedad.",
    description: "<h3>Hidratación de Bolsillo Inmediata</h3><p>Produce una bruma ligera que hidrata sin arruinar el maquillaje ni mojar la ropa. Ideal para llevar en el bolso.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2281692/21d55988-17d8-4be4-9e75-949dafd12cf7.jpg",
    specs: { "Capacidad": "Tanque 30 ml", "Batería": "Recargable USB con cable", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Blanco Puro", "Rosa Pastel"] }],
    variations: [
      { regular_price: "39000", sku: "NANO-MST-WHT", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Color", option: "Blanco Puro" }] },
      { regular_price: "39000", sku: "NANO-MST-PNK", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Color", option: "Rosa Pastel" }] }
    ]
  },
  {
    idInterno: "029",
    name: "Dispositivo Rejuvenecedor Facial Bio-Microcorriente con Rodillos 3D",
    slug: "rejuvenecedor-bio-microcorriente-rodillos-3d",
    categorySlug: "beauty-tech",
    subcategory: "Alta Frecuencia y Microcorrientes",
    dropiId: "2198990",
    supplierId: "28386",
    costoDropi: 13000,
    pvpSugerido: 49000,
    stock: 299,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Rodillos facetados con panel solar de captación lumínica y microcorrientes. Reafirma la piel, alisa el contorno de ojos y desinflama.",
    description: "<h3>Drenaje y Firmeza Facial sin Baterías</h3><p>Capta la luz ambiental y genera microcorrientes bioeléctricas que activan el metabolismo cutáneo de forma 100% ecológica.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2198990/178370288751JRK0-vtkL._AC_SX679_.jpg",
    specs: { "Material": "Plating platino hipoalergénico", "Tecnología": "Microcorriente solar", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Rodillo Facial Estándar", "Kit Dúo Facial + Ojos"] }],
    variations: [
      { regular_price: "49000", sku: "ROD-3D-STD", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Rodillo Facial Estándar" }] },
      { regular_price: "79000", sku: "ROD-3D-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Kit Dúo Facial + Ojos" }] }
    ]
  },
  {
    idInterno: "030",
    name: "Ejercitador Mandibular y Perfilador de Mentón Grado Médico",
    slug: "ejercitador-mandibular-perfilador-menton",
    categorySlug: "beauty-tech",
    subcategory: "Masajeadores Faciales y Gua Sha LED",
    dropiId: "2194593",
    supplierId: "36082",
    costoDropi: 18000,
    pvpSugerido: 49000,
    stock: 499,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Herramienta de resistencia muscular facial en silicona biocompatible 100% libre de BPA. Fortalece más de 57 músculos faciales y esculpe la mandíbula.",
    description: "<h3>Fitness Facial y Definición Mandibular</h3><p>Entrenamiento de resistencia progresiva para combatir la flacidez de las mejillas y tensar el contorno inferior del rostro.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2194593/1783376814ejercitador%20de%20mandibula3.jpg",
    specs: { "Material": "Silicona de grado alimenticio", "Resistencia": "30 a 50 lbs", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Nivel de Resistencia", position: 0, visible: true, variation: true, options: ["Nivel 1 (Principiante 30 lbs)", "Nivel 2 (Avanzado 50 lbs)"] }],
    variations: [
      { regular_price: "49000", sku: "JAW-FIT-L1", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Nivel de Resistencia", option: "Nivel 1 (Principiante 30 lbs)" }] },
      { regular_price: "49000", sku: "JAW-FIT-L2", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Nivel de Resistencia", option: "Nivel 2 (Avanzado 50 lbs)" }] }
    ]
  }
];

// ── Lógica de Sincronización en WooCommerce ──────────────────────────────────
async function syncBatch() {
  console.log("=== SINCRONIZANDO 30 PRODUCTOS BEAUTY TECH EN WOOCOMMERCE ===");
  const cat = await wcRequest("/products/categories?slug=beauty-tech");
  if (!cat || cat.length === 0) throw new Error("Categoría Beauty Tech no existe en WC");
  const catId = cat[0].id;

  const results = [];

  for (const p of BEAUTY_TECH_30) {
    try {
      console.log(`\nProcesando [${p.idInterno}] "${p.name}"...`);
      const existing = await wcRequest(`/products?slug=${p.slug}`);
      let productId = existing.length > 0 ? existing[0].id : null;

      let imagesPayload = [];
      if (existing.length > 0 && existing[0].images?.length > 0) {
        imagesPayload = existing[0].images.map((img) => ({ id: img.id }));
      } else if (p.imageSrc) {
        imagesPayload = [{ src: p.imageSrc }];
      }

      const payload = {
        name: p.name,
        slug: p.slug,
        type: p.type,
        status: p.status,
        featured: p.featured,
        short_description: p.shortDescription,
        description: p.description,
        categories: [{ id: catId }],
        images: imagesPayload,
        attributes: p.attributes,
        meta_data: [
          { key: "_dropi_product_id", value: p.dropiId },
          { key: "_dropi_supplier_id", value: p.supplierId },
          { key: "_dropi_cost", value: String(p.costoDropi) },
          { key: "_cod_available", value: "yes" },
          { key: "_free_shipping", value: "yes" },
          { key: "_subcategory", value: p.subcategory },
          { key: "_specs_json", value: JSON.stringify(p.specs) },
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

      // Variaciones
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
        pvp: p.pvpSugerido,
        costo: p.costoDropi,
        stock: p.stock
      });
    } catch (err) {
      console.error(`Error procesando ${p.name}:`, err.message);
    }
  }

  console.log(`\n¡Sincronización completada! Total productos procesados: ${results.length}`);
}

syncBatch().catch(console.error);
