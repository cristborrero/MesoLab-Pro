/**
 * Script de Ingesta de 30 Productos de Línea Profesional hacia WooCommerce REST API
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

export const PROFESIONAL_PRODUCTS_30 = [
  {
    idInterno: "121",
    name: "Dermapen Profesional Terapia de Microagujas Inalámbrico",
    slug: "dermapen-profesional-terapia-microagujas-inalambrico",
    categorySlug: "profesional",
    subcategory: "Microneedling y Puncion Dérmica",
    dropiId: "1843610",
    supplierId: "17053",
    costoDropi: 68000,
    pvpSugerido: 159000,
    stock: 150,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Dispositivo clínico motorizado para terapia de inducción de colágeno (CIT). Ajuste de profundidad de punción milimétrica de 0.25mm a 2.5mm.",
    description: "<h3>Inducción de Colágeno y Bio-Remodelación Tisular</h3><p>Genera microcanales verticales controlados en la epidermis y dermis papilar que multiplican la absorción transepidérmica de activos biorevitalizantes y activan la cascada natural de cicatrización para atenuar cicatrices y arrugas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1843610/1749484339BGZ%20ONLINE%20%20(69).png",
    specs: { "Profundidad": "0.25 mm a 2.5 mm regulable", "Velocidad": "5 niveles de micro-vibración", "Alimentación": "Batería de Litio Recargable", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Kit Incluido", position: 0, visible: true, variation: true, options: ["Dermapen + 2 Cartuchos", "Kit Clínico (Dermapen + 10 Cartuchos)"] }],
    variations: [
      { regular_price: "159000", sku: "DERM-PRO-01", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Kit Incluido", option: "Dermapen + 2 Cartuchos" }] },
      { regular_price: "199000", sku: "DERM-PRO-KIT10", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Kit Incluido", option: "Kit Clínico (Dermapen + 10 Cartuchos)" }] }
    ]
  },
  {
    idInterno: "122",
    name: "Dermapen N2 Microneedling Profesional con Ajuste de Profundidad",
    slug: "dermapen-n2-microneedling-profesional",
    categorySlug: "profesional",
    subcategory: "Microneedling y Puncion Dérmica",
    dropiId: "2180480",
    supplierId: "668029",
    costoDropi: 78000,
    pvpSugerido: 179000,
    stock: 299,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Pluma de microagujas modelo N2 con motor magnético silencioso de alto torque para cabinas cosmiátricas y protocolos estéticos avanzados.",
    description: "<h3>Precisión Dérmica de Grado Clínico</h3><p>Diseño en aleación ergonómica antideslizante con selector rotatorio micrométrico. Asegura penetración vertical uniforme minimizando el daño epidérmico y acelerando el tiempo de recuperación del paciente.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2180480/1781824849WhatsApp%20Image%202026-06-18%20at%206.06.24%20PM.jpeg",
    specs: { "Modelo": "N2 Professional Edition", "Revoluciones": "Hasta 12.000 RPM", "Cuerpo": "Aleación Metálica", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Equipo Estándar N2", "Kit Cabina N2 + Cartuchos Extra"] }],
    variations: [
      { regular_price: "179000", sku: "DERM-N2-STD", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Equipo Estándar N2" }] },
      { regular_price: "219000", sku: "DERM-N2-CABINA", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Kit Cabina N2 + Cartuchos Extra" }] }
    ]
  },
  {
    idInterno: "123",
    name: "Dermapen MYM de Alta Velocidad para Tratamientos Cicatriciales",
    slug: "dermapen-mym-alta-velocidad-tratamientos-cicatriciales",
    categorySlug: "profesional",
    subcategory: "Microneedling y Puncion Dérmica",
    dropiId: "2055615",
    supplierId: "668029",
    costoDropi: 75000,
    pvpSugerido: 169000,
    stock: 148,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Dispositivo clásico de micro-perforación dérmica MYM. Diseñado para optimizar protocolos de rejuvenecimiento, estrías y secuelas de acné.",
    description: "<h3>Rejuvenecimiento Fraccionado Cutáneo</h3><p>El estándar clásico en micropunción estética. Permite trabajar zonas delicadas periorbitales y peribucales con máxima seguridad gracias a su sistema de bayoneta de bloqueo hermético de agujas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2055615/1769566564Gemini_Generated_Image_xodq1axodq1axodq.png",
    specs: { "Marca": "MYM Classic", "Conexión": "Doble Modo (Inalámbrico / Cable)", "Cartuchos Compatibles": "Bayoneta 9, 12, 36, 42 y Nano", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Equipo MYM Completo", "Pack MYM + 5 Cartuchos Mixtos"] }],
    variations: [
      { regular_price: "169000", sku: "DERM-MYM-01", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Equipo MYM Completo" }] },
      { regular_price: "199000", sku: "DERM-MYM-PACK5", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Pack MYM + 5 Cartuchos Mixtos" }] }
    ]
  },
  {
    idInterno: "124",
    name: "Dermapen Metálico Clínico de Precisión Quirúrgica",
    slug: "dermapen-metalico-clinico-precision-quirurgica",
    categorySlug: "profesional",
    subcategory: "Microneedling y Puncion Dérmica",
    dropiId: "833964",
    supplierId: "111667",
    costoDropi: 95000,
    pvpSugerido: 199000,
    stock: 497,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Chasis 100% metálico esterilizable con motor de rotor suizo ultra-preciso. Cero vibración lateral para un tratamiento sin dolor excesivo.",
    description: "<h3>Solidez Quirúrgica y Desempeño Continuo</h3><p>Construido para soportar largas jornadas en centros de estética y clínicas dermatológicas. Disipa eficientemente el calor del motor y brinda un balance de peso perfecto en la mano del terapeuta.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/833964/17150242311.jpg",
    specs: { "Material": "Aluminio de Grado Quirúrgico Anodizado", "Velocidades": "6 Niveles con Pantalla LED", "Profundidad": "0.25mm - 2.5mm", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Configuración", position: 0, visible: true, variation: true, options: ["Equipo Metálico Estuche Rígido", "Kit Clínico Completo + Cartuchos"] }],
    variations: [
      { regular_price: "199000", sku: "DERM-MET-01", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Configuración", option: "Equipo Metálico Estuche Rígido" }] },
      { regular_price: "249000", sku: "DERM-MET-KITPRO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Configuración", option: "Kit Clínico Completo + Cartuchos" }] }
    ]
  },
  {
    idInterno: "125",
    name: "Dr. Pen N2 Recargable para Inducción de Colágeno",
    slug: "dr-pen-n2-recargable-induccion-colageno",
    categorySlug: "profesional",
    subcategory: "Microneedling y Puncion Dérmica",
    dropiId: "1508785",
    supplierId: "174332",
    costoDropi: 100000,
    pvpSugerido: 219000,
    stock: 99,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Dispositivo original de la línea Dr. Pen para bio-estimulación dérmica en consultorio. Máxima estabilidad en punciones de alta densidad.",
    description: "<h3>Tecnología Certificada Dr. Pen</h3><p>Ofrece una frecuencia constante de percusión dérmica sin saltos de velocidad. Indicado para alopecia capilar, poros dilatados, líneas finas y penetración de cócteles estériles de mesoterapia.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1508785/1732130319DR%20PEN1.jpeg",
    specs: { "Gama": "Dr. Pen Original", "Batería": "Litio de Larga Duración (4 Horas Continuas)", "Regulación": "Anillo Selector Giratorio", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Dispositivo Dr. Pen N2", "Kit Profesional con Accesorios"] }],
    variations: [
      { regular_price: "219000", sku: "DRPEN-N2-01", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dispositivo Dr. Pen N2" }] },
      { regular_price: "269000", sku: "DRPEN-N2-KIT", manage_stock: true, stock_quantity: 15, attributes: [{ name: "Presentación", option: "Kit Profesional con Accesorios" }] }
    ]
  },
  {
    idInterno: "126",
    name: "Dermapen Derma Dr. Pen MYM Multi-Velocidad",
    slug: "dermapen-derma-dr-pen-mym-multi-velocidad",
    categorySlug: "profesional",
    subcategory: "Microneedling y Puncion Dérmica",
    dropiId: "2175309",
    supplierId: "35799",
    costoDropi: 62000,
    pvpSugerido: 149000,
    stock: 1000,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Equipo versátil para micropuntura estética con dial de control continuo y cartuchos desechables estériles con sellado de vacío.",
    description: "<h3>Micro-Agujeado de Rápida Recuperación</h3><p>Equipo ligero y potente diseñado para cosmiatras que inician en terapias de inducción percutánea. Permite regular tanto el recorrido de la aguja como la cadencia de punción con un solo toque.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2175309/178122444213.jpeg",
    specs: { "Alimentación": "Adaptador de Corriente Directa", "Cabezal": "Antibacteriano Desmontable", "Compatibilidad": "Agujas Nano y Micro", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Equipo Estándar", "Dúo Cabina (2 Equipos)"] }],
    variations: [
      { regular_price: "149000", sku: "DERM-MULTI-01", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Equipo Estándar" }] },
      { regular_price: "269000", sku: "DERM-MULTI-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Cabina (2 Equipos)" }] }
    ]
  },
  {
    idInterno: "127",
    name: "Monster Beauty Plasma Pen Fibroblast Profesional",
    slug: "monster-beauty-plasma-pen-fibroblast-profesional",
    categorySlug: "profesional",
    subcategory: "Electrocoagulación y Plasma Pen",
    dropiId: "2035547",
    supplierId: "197931",
    costoDropi: 95000,
    pvpSugerido: 229000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Dispositivo de arco de microplasma fraccionado para blefaroplastia no quirúrgica, retracción cutánea y eliminación de verrugas o queratosis.",
    description: "<h3>Sublimación Tisular y Blefaroplastia No Quirúrgica</h3><p>Genera un arco de plasma ionizado que sublima el exceso de tejido epidérmico sin transferir calor residual a capas profundas, promoviendo una intensa producción de nuevo colágeno tipo I y elastina.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2035547/1768320646Diseño%20sin%20título%20-%202026-01-10T122219.377.png",
    specs: { "Tecnología": "Plasma Frío Ionizado de Descarga Eléctrica", "Puntas": "Aguja Quirúrgica, Fraccional y Redonda", "Aplicación": "Párpados, Arrugas Profundas, Fibromas", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Contenido", position: 0, visible: true, variation: true, options: ["Equipo Monster Beauty + 4 Puntas", "Kit Clínico Monster + Puntas Extra"] }],
    variations: [
      { regular_price: "229000", sku: "PLAS-MONSTER-01", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Contenido", option: "Equipo Monster Beauty + 4 Puntas" }] },
      { regular_price: "279000", sku: "PLAS-MONSTER-KIT", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Contenido", option: "Kit Clínico Monster + Puntas Extra" }] }
    ]
  },
  {
    idInterno: "128",
    name: "Lápiz Cauterizador Plasma Pen Portátil con Puntas Finas",
    slug: "lapiz-cauterizador-plasma-pen-portatil",
    categorySlug: "profesional",
    subcategory: "Electrocoagulación y Plasma Pen",
    dropiId: "1982303",
    supplierId: "197931",
    costoDropi: 42000,
    pvpSugerido: 99000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Cauterizador dérmico con 9 niveles de intensidad y luz guía focal para electro-desecación segura de imperfecciones y lunares superficiales.",
    description: "<h3>Focalización Dérmica con Iluminación LED</h3><p>Compacto y preciso, ideal para cabinas cosmiátricas. Carboniza de forma limpia pequeñas lesiones epidérmicas benignas bajo anestesia tópica sin sangrado y con rápida epitelización.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1982303/1762016142Diseño%20sin%20título%20-%202025-11-01T115340.729.png",
    specs: { "Niveles": "9 Niveles de Potencia Regulable", "Pantalla": "LCD con Indicador de Batería", "Carga": "USB", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Lápiz Plasma + Puntas Básicas", "Kit Profesional + Agujas Repuesto"] }],
    variations: [
      { regular_price: "99000", sku: "PLAS-PEN-PORT-01", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Lápiz Plasma + Puntas Básicas" }] },
      { regular_price: "129000", sku: "PLAS-PEN-PORT-KIT", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Kit Profesional + Agujas Repuesto" }] }
    ]
  },
  {
    idInterno: "129",
    name: "Cauterizador de Verrugas y Puntos Rubí Plasma Pen Recargable",
    slug: "cauterizador-verrugas-puntos-rubi-plasma-pen",
    categorySlug: "profesional",
    subcategory: "Electrocoagulación y Plasma Pen",
    dropiId: "921396",
    supplierId: "45331",
    costoDropi: 40000,
    pvpSugerido: 95000,
    stock: 105,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Electro-cauterio estético para remoción precisa de queratosis seborreicas, puntos rubí y acrocordones en rostro, cuello y torso.",
    description: "<h3>Electrocoagulación Rápida y Precisa</h3><p>Permite una ablación puntual microscópica sobre lesiones pigmentarias superficiales y fibromas laxos, minimizando el traumatismo en el tejido sano circundante.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/921396/173982681006148297-d3c3-4137-a375-dc1df9a0b7d7.jpeg",
    specs: { "Uso": "Extirpación de Lesiones Benignas Superficiales", "Accesorios": "Aguja Gruesa + 5 Agujas Finas", "Batería": "Recargable", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Unidad Individual", "Dúo Cabina (2 Unidades)"] }],
    variations: [
      { regular_price: "95000", sku: "CAUT-RUBI-01", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Unidad Individual" }] },
      { regular_price: "169000", sku: "CAUT-RUBI-DUO", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Dúo Cabina (2 Unidades)" }] }
    ]
  },
  {
    idInterno: "130",
    name: "Vapor Ozono Facial Clínico Sencillo de Sobremesa",
    slug: "vapor-ozono-facial-clinico-sencillo-sobremesa",
    categorySlug: "profesional",
    subcategory: "Vaporizadores y Limpieza Térmica",
    dropiId: "1982355",
    supplierId: "197931",
    costoDropi: 180000,
    pvpSugerido: 349000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Generador térmico de vapor con lámpara UV para emisión de ozono activo. Abre ostium foliculares y esteriliza la piel antes de extracciones.",
    description: "<h3>Apertura Folicular y Acción Bactericida</h3><p>La combinación de vapor caliente y ozono reblandece tapones de queratina y sebo facilitando la extracción profunda no traumática, mientras destruye bacterias anaerobias en cutis acneico.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1982355/1762017560Diseño%20sin%20título%20-%202025-11-01T121730.424.png",
    specs: { "Potencia": "400W", "Generador": "Lámpara UV Interna de Ozono", "Capacidad Tanque": "450 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Vapor Ozono Sobremesa", "Vapor Ozono + Insumos de Cabina"] }],
    variations: [
      { regular_price: "349000", sku: "VAP-OZ-SOBRE-01", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Vapor Ozono Sobremesa" }] },
      { regular_price: "399000", sku: "VAP-OZ-SOBRE-KIT", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Vapor Ozono + Insumos de Cabina" }] }
    ]
  },
  {
    idInterno: "131",
    name: "Vapor Ozono 2 en 1 Portátil con Brazo Rociador Giratorio",
    slug: "vapor-ozono-2-en-1-portatil-brazo-rociador",
    categorySlug: "profesional",
    subcategory: "Vaporizadores y Limpieza Térmica",
    dropiId: "1805551",
    supplierId: "437663",
    costoDropi: 290500,
    pvpSugerido: 499000,
    stock: 1000,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Equipo versátil con boquilla extensible rotatoria de 360 grados. Diseñado para camillas de estética facial y corporal en consultorios.",
    description: "<h3>Flexibilidad Clínica en Cabina</h3><p>Permite orientar el chorro de vapor ionizado exactamente sobre el ángulo facial deseado sin mover al paciente. Incorpora compartimento para esencias aromaterapéuticas y aceites botánicos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1805551/1782440568ozono_portatilcapa.jpg",
    specs: { "Rotación": "Brazo 360 Grados", "Modos": "Vapor Térmico Solo / Vapor + Ozono Activo", "Sensor": "Apagado Automático por Bajo Nivel de Agua", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Configuración", position: 0, visible: true, variation: true, options: ["Equipo Portátil Completo", "Equipo + Kit Aromaterapia Cabina"] }],
    variations: [
      { regular_price: "499000", sku: "VAP-OZ-BRAZO-01", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Configuración", option: "Equipo Portátil Completo" }] },
      { regular_price: "549000", sku: "VAP-OZ-BRAZO-KIT", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Configuración", option: "Equipo + Kit Aromaterapia Cabina" }] }
    ]
  },
  {
    idInterno: "132",
    name: "Vapor Ozono Facial Portátil con Depósito Térmico",
    slug: "vapor-ozono-facial-portatil-deposito-termico",
    categorySlug: "profesional",
    subcategory: "Vaporizadores y Limpieza Térmica",
    dropiId: "2265833",
    supplierId: "629625",
    costoDropi: 180000,
    pvpSugerido: 349000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Diseño compacto ultraligero para esteticistas a domicilio o cabinas con espacio reducido. Calentamiento rápido en menos de 90 segundos.",
    description: "<h3>Calentamiento Instantáneo y Emisión Homogénea</h3><p>Estructura de polímero térmico anti-quemaduras con caldera interna de acero inoxidable que entrega niebla fina constante sin salpicaduras de agua hirviendo.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2265833/7cf10cea-4686-439d-8b02-0cf05ecf10a0.PNG",
    specs: { "Tiempo Inicio": "90 Segundos", "Seguridad": "Termostato Bimetálico de Corte", "Voltaje": "110V AC Colombia", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Unidad Individual", "Dúo Cabina (2 Unidades)"] }],
    variations: [
      { regular_price: "349000", sku: "VAP-OZ-PORT-01", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Unidad Individual" }] },
      { regular_price: "649000", sku: "VAP-OZ-PORT-DUO", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Dúo Cabina (2 Unidades)" }] }
    ]
  },
  {
    idInterno: "133",
    name: "Vapor Ozono Profesional con Filtro de Frío y Calor para Cabina",
    slug: "vapor-ozono-profesional-doble-filtro-frio-calor",
    categorySlug: "profesional",
    subcategory: "Vaporizadores y Limpieza Térmica",
    dropiId: "2051179",
    supplierId: "437663",
    costoDropi: 387000,
    pvpSugerido: 620000,
    stock: 1000,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Equipo de doble función térmica: vapor caliente con ozono para desincrustar y bruma fría ultrasónica para calmar y cerrar poros post-extracción.",
    description: "<h3>Terapia Térmica Integral: Dilatación y Cierre Dérmico</h3><p>La combinación del choque térmico controlado permite realizar protocolos completos en el mismo puesto de trabajo: dilatación inicial, desinfección y cierre astringente con descongestión inmediata de eritemas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2051179/1782777849fayerozono_blanco.jpg",
    specs: { "Funciones": "Vapor Caliente + Ozono / Bruma Fría Ultrasónica", "Tanques": "Independientes para Frío y Calor", "Estructura": "Grado Spa Profesional", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Equipo Doble Filtro Blanco", "Equipo Clínico + Kit Descongestivo"] }],
    variations: [
      { regular_price: "620000", sku: "VAP-DOBLE-01", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Equipo Doble Filtro Blanco" }] },
      { regular_price: "689000", sku: "VAP-DOBLE-KIT", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Equipo Clínico + Kit Descongestivo" }] }
    ]
  },
  {
    idInterno: "134",
    name: "Sistema Dermoabrasivo Metálico de Puntas de Diamante",
    slug: "sistema-dermoabrasivo-metalico-puntas-diamante",
    categorySlug: "profesional",
    subcategory: "Exfoliación Mecánica y Dermoabrasión",
    dropiId: "1476335",
    supplierId: "325736",
    costoDropi: 229587,
    pvpSugerido: 420000,
    stock: 1000,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Aparato de exfoliación mecánica con cabezales metálicos y diamante cortado con láser para renovación del estrato córneo sin químicos.",
    description: "<h3>Microdermoabrasión Fraccionada con Succión al Vacío</h3><p>Remueve capas córneas senescentes mediante abrasión física controlada mientras aspira los detritos celulares, estimulando la neocolagénesis y unificando el relieve epidérmico.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1476335/17424022661.jpg",
    specs: { "Puntas": "Kit 9 Puntas de Diamante de Distinto Grano", "Manípulos": "3 Mangos de Acero Inoxidable", "Succión": "Regulador de Vacío Manométrico", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Equipo Dermoabrasivo Completo", "Equipo + Kit Filtros de Repuesto"] }],
    variations: [
      { regular_price: "420000", sku: "DIAM-DERM-01", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Equipo Dermoabrasivo Completo" }] },
      { regular_price: "469000", sku: "DIAM-DERM-KIT", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Equipo + Kit Filtros de Repuesto" }] }
    ]
  },
  {
    idInterno: "135",
    name: "Alta Frecuencia Profesional Portátil 4 Electrodos de Argón y Neón",
    slug: "alta-frecuencia-profesional-portatil-4-electrodos",
    categorySlug: "profesional",
    subcategory: "Electroterapia y Alta Frecuencia",
    dropiId: "2250545",
    supplierId: "55394",
    costoDropi: 43000,
    pvpSugerido: 99000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Generador de corrientes de alta frecuencia con gas ionizado para desinfección dérmica, cauterización de pústulas y cierre de poros.",
    description: "<h3>Oxigenación Celular y Desinfección Inmediata</h3><p>Produce ozono tópico in situ que actúa como potente agente bactericida frente a Cutibacterium acnes, reduciendo la inflamación y mejorando la microcirculación tras extracciones profundas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2250545/f1dcef45-1800-4317-9a8e-aca50bb954a3.jpeg",
    specs: { "Electrodos": "Champiñón, Cuchara, Puntero y Peine Capilar", "Gas": "Neón (Luz Naranja) / Argón (Luz Violeta)", "Regulación": "Potenciómetro Gradual", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Configuración", position: 0, visible: true, variation: true, options: ["Equipo Estándar con 4 Electrodos", "Kit Clínico + Tubo Repuesto"] }],
    variations: [
      { regular_price: "99000", sku: "ALTA-FREQ-55-01", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Configuración", option: "Equipo Estándar con 4 Electrodos" }] },
      { regular_price: "129000", sku: "ALTA-FREQ-55-KIT", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Configuración", option: "Kit Clínico + Tubo Repuesto" }] }
    ]
  },
  {
    idInterno: "136",
    name: "Alta Frecuencia Facial y Capilar Clínico con Punteros de Vidrio",
    slug: "alta-frecuencia-facial-capilar-clinico-punteros",
    categorySlug: "profesional",
    subcategory: "Electroterapia y Alta Frecuencia",
    dropiId: "1653879",
    supplierId: "917",
    costoDropi: 85000,
    pvpSugerido: 179000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Dispositivo de grado terapéutico reforzado para uso continuado en cabinas cosméticas. Estimula el bulbo capilar y esteriliza el cutis.",
    description: "<h3>Revitalización Folicular y Dermo-Astringencia</h3><p>Su electrodo en peine reactiva la circulación capilar folicular favoreciendo la absorción de tónicos anticaída, mientras sus electrodos faciales calman la piel agredida por peelings químicos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1653879/1738705815alta-frecuencia-facial-4-electrodos-sapishop-727217461.jpg",
    specs: { "Potencia": "10W de Salida Regulada", "Vidrio": "Borosilicato Reforzado", "Uso": "Facial y Cuero Cabelludo", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Estuche Rígido con 4 Electrodos", "Dúo Profesional (2 Equipos)"] }],
    variations: [
      { regular_price: "179000", sku: "ALTA-FREQ-CLINIC-01", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Estuche Rígido con 4 Electrodos" }] },
      { regular_price: "329000", sku: "ALTA-FREQ-CLINIC-DUO", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Dúo Profesional (2 Equipos)" }] }
    ]
  },
  {
    idInterno: "137",
    name: "Máquina de Alta Frecuencia Dermo-Estética con Regulador de Potencia",
    slug: "maquina-alta-frecuencia-dermo-estetica-regulador",
    categorySlug: "profesional",
    subcategory: "Electroterapia y Alta Frecuencia",
    dropiId: "1907755",
    supplierId: "144205",
    costoDropi: 36000,
    pvpSugerido: 89000,
    stock: 254,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Equipo de chispoteo y efluvio indirecto para sellado antiséptico pos-limpieza facial. Mango con agarre texturizado y aislamiento de seguridad.",
    description: "<h3>Control de Potencia de Alta Precisión</h3><p>Permite alternar entre técnica de masaje indirecto para nutrición cutánea y técnica de chisporroteo directo para cauterizar lesiones inflamatorias activas de acné.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1907755/17562174171.png",
    specs: { "Frecuencia": "50-60 Hz", "Aislamiento": "Clase II Médica", "Electrodos": "4 Tubos de Vidrio Sellados", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Equipo Individual", "Pack Cabina (2 Equipos)"] }],
    variations: [
      { regular_price: "89000", sku: "ALTA-FREQ-REG-01", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Equipo Individual" }] },
      { regular_price: "159000", sku: "ALTA-FREQ-REG-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Pack Cabina (2 Equipos)" }] }
    ]
  },
  {
    idInterno: "138",
    name: "Alta Frecuencia Facial y Corporal Bipolar con Electrodos Especiales",
    slug: "alta-frecuencia-facial-corporal-bipolar-electrodos",
    categorySlug: "profesional",
    subcategory: "Electroterapia y Alta Frecuencia",
    dropiId: "1802220",
    supplierId: "286651",
    costoDropi: 35000,
    pvpSugerido: 89000,
    stock: 200,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Generador de corriente alterna de alta oscilación para desinfección facial y tratamientos reafirmantes en cuello, escote y espalda.",
    description: "<h3>Descongestión Tisular Corporal y Facial</h3><p>Favorece el drenaje venolinfático y alivia el espasmo muscular superficial, convirtiéndose en el paso indispensable antes de aplicar mascarillas hidroplásticas u oclusivas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1802220/1746222241Diseño%20sin%20título%20(98).png",
    specs: { "Alcance": "Facial, Espalda y Capilar", "Intensidad": "Dial Lineal Progresivo", "Seguridad": "Encendido Protegido", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Equipo Estándar", "Kit Clínico + Repuestos"] }],
    variations: [
      { regular_price: "89000", sku: "ALTA-FREQ-BIP-01", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Equipo Estándar" }] },
      { regular_price: "119000", sku: "ALTA-FREQ-BIP-KIT", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Kit Clínico + Repuestos" }] }
    ]
  },
  {
    idInterno: "139",
    name: "Masajeador Alta Frecuencia Facial 4 Electrodos con Mango Ergonómico",
    slug: "masajeador-alta-frecuencia-facial-4-electrodos-ergonomico",
    categorySlug: "profesional",
    subcategory: "Electroterapia y Alta Frecuencia",
    dropiId: "158340",
    supplierId: "10929",
    costoDropi: 33000,
    pvpSugerido: 85000,
    stock: 295,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Diseño ergonómico estilizado de fácil manipulación con sujeción antivibratoria. Ideal para tratamientos rápidos de higiene facial profunda.",
    description: "<h3>Confort Operativo y Resultados Inmediatos</h3><p>Permite una transmisión térmica y ozonizada continua sin fatiga muscular para la terapeuta. Acelera la cicatrización y reduce el edema posterior a limpiezas mecánicas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/158340/17023084971702308497Alta%20Frecuencia%20Portatil%20Facial%20Y%20Corporal%204%20Electrodos%20H.jpg",
    specs: { "Ergonomía": "Mango Ligero Antideslizante", "Electrodos": "4 Tubos Vidrio Neón", "Frecuencia": "220kHz", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Equipo Individual", "Dúo Cabina (2 Equipos)"] }],
    variations: [
      { regular_price: "85000", sku: "ALTA-FREQ-ERG-01", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Equipo Individual" }] },
      { regular_price: "149000", sku: "ALTA-FREQ-ERG-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Cabina (2 Equipos)" }] }
    ]
  },
  {
    idInterno: "140",
    name: "Radiofrecuencia y Electroporación para Mesoterapia Virtual",
    slug: "radiofrecuencia-electroporacion-mesoterapia-virtual",
    categorySlug: "profesional",
    subcategory: "Radiofrecuencia y Electroporación",
    dropiId: "1454845",
    supplierId: "13704",
    costoDropi: 49900,
    pvpSugerido: 119000,
    stock: 175,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Sistema de ondas electromagnéticas atérmicas y electroporación transdérmica que introduce principios activos sin necesidad de agujas.",
    description: "<h3>Mesoterapia Virtual No Invasiva</h3><p>Abre temporalmente canales acuosos en la bicapa lipídica celular mediante impulsos de electroporación, permitiendo que ampollas hidrófilas y ácido hialurónico penetren hasta la dermis media sin pinchazos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1454845/1731163869A.jpg",
    specs: { "Tecnología": "Electroporación + Radiofrecuencia Bipolar", "Modos": "5 Niveles de Intensidad", "Fototerapia": "Luces LED Integradas", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Dispositivo con Base de Carga", "Kit Completo + Gel Conductor"] }],
    variations: [
      { regular_price: "119000", sku: "RF-ELECTRO-01", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Dispositivo con Base de Carga" }] },
      { regular_price: "149000", sku: "RF-ELECTRO-KIT", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Kit Completo + Gel Conductor" }] }
    ]
  },
  {
    idInterno: "141",
    name: "Radiofrecuencia Facial con Pantalla Digital y Fototerapia LED",
    slug: "radiofrecuencia-facial-pantalla-digital-fototerapia-led",
    categorySlug: "profesional",
    subcategory: "Radiofrecuencia y Electroporación",
    dropiId: "2289135",
    supplierId: "192984",
    costoDropi: 81900,
    pvpSugerido: 189000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Dispositivo multifuncional de diatermia focalizada con pantalla LED retroiluminada. Estimula la síntesis de colágeno y tensa el óvalo facial.",
    description: "<h3>Diatermia Térmica Selectiva y Bioestimulación LED</h3><p>Eleva la temperatura tisular hasta los 40-42°C provocando la contracción inmediata de las fibras de colágeno existentes y la formación diferida de nuevas fibras elásticas en mejillas y cuello.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2289135/8dba70c1-d939-43a8-9da7-6e9b2db6892e.png",
    specs: { "Pantalla": "Digital con Temporizador y Nivel de Energía", "Fototerapia": "Luz Roja (630nm) y Azul (465nm)", "Cabezal": "Polo Cuádruple Cromado", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Equipo Estándar Pantalla LED", "Kit Clínico + Gel de Acople"] }],
    variations: [
      { regular_price: "189000", sku: "RF-DIGITAL-01", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Equipo Estándar Pantalla LED" }] },
      { regular_price: "219000", sku: "RF-DIGITAL-KIT", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Kit Clínico + Gel de Acople" }] }
    ]
  },
  {
    idInterno: "142",
    name: "Radiofrecuencia Skin Face RF Multifunción para Reafirmación Facial",
    slug: "radiofrecuencia-skin-face-rf-multifuncion",
    categorySlug: "profesional",
    subcategory: "Radiofrecuencia y Electroporación",
    dropiId: "1984006",
    supplierId: "197931",
    costoDropi: 180000,
    pvpSugerido: 349000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Aparato de cabina con manípulos bipolares dedicados para contorno de ojos, cuello y rostro completo. Lifting tensor sin tiempo de baja.",
    description: "<h3>Lifting No Invasivo con Radiofrecuencia Multipolar</h3><p>Diseñado para tratamientos continuados en centros de dermo-estética. Proporciona calentamiento dérmico volumétrico homogéneo que redefine el ángulo mandibular y atenúa el surco nasogeniano.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1984006/1762273542Diseño%20sin%20título%20-%202025-11-04T112447.381.png",
    specs: { "Frecuencia": "RF 2MHz Médica", "Manípulos": "Intercambiables Facial y Ocular", "Potencia": "50W Máxima", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Equipo Skin Face RF", "Equipo + Kit Geles Conductores"] }],
    variations: [
      { regular_price: "349000", sku: "RF-SKINFACE-01", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Equipo Skin Face RF" }] },
      { regular_price: "399000", sku: "RF-SKINFACE-KIT", manage_stock: true, stock_quantity: 15, attributes: [{ name: "Presentación", option: "Equipo + Kit Geles Conductores" }] }
    ]
  },
  {
    idInterno: "143",
    name: "Centrífuga Clínica de Laboratorio Modelo 800-1 para PRP",
    slug: "centrifuga-clinica-laboratorio-800-1-prp",
    categorySlug: "profesional",
    subcategory: "Aparatología Clínica y Centrífugas",
    dropiId: "1905700",
    supplierId: "13544",
    costoDropi: 299900,
    pvpSugerido: 549000,
    stock: 99,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Centrifugadora de rotor angular para 6 tubos de ensayo. Calibrada para separación plasmática y obtención de Plasma Rico en Plaquetas (PRP).",
    description: "<h3>Separación Celular para Terapias Biológicas Autólogas</h3><p>Equipo indispensable en clínicas estéticas y consultorios médicos para protocolos de bioestimulación plaquetaria facial y regeneración folicular capilar. Velocidad graduable y temporizador mecánico integrado.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1905700/1755924438YGHB%20(1).jpg",
    specs: { "Capacidad": "6 Tubos de 20 ml", "Velocidad Máxima": "4000 RPM", "Temporizador": "0 a 60 Minutos", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Configuración", position: 0, visible: true, variation: true, options: ["Centrífuga 800-1", "Centrífuga + Kit Tubos de Vacío"] }],
    variations: [
      { regular_price: "549000", sku: "CENT-8001-01", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Configuración", option: "Centrífuga 800-1" }] },
      { regular_price: "599000", sku: "CENT-8001-KIT", manage_stock: true, stock_quantity: 15, attributes: [{ name: "Configuración", option: "Centrífuga + Kit Tubos de Vacío" }] }
    ]
  },
  {
    idInterno: "144",
    name: "Máquina Centrifugadora Clínica 4000 RPM para Plasma Rico en Plaquetas",
    slug: "centrifugadora-clinica-4000-rpm-plasma-rico",
    categorySlug: "profesional",
    subcategory: "Aparatología Clínica y Centrífugas",
    dropiId: "2178185",
    supplierId: "179249",
    costoDropi: 320000,
    pvpSugerido: 589000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Centrífuga clínica de alta estabilidad con ventosas antivibratorias para separación rápida de sangre entera y preparación de factores de crecimiento.",
    description: "<h3>Aislamiento Homogéneo de Fracciones Plasmáticas</h3><p>Garantiza una fuerza centrífuga relativa adecuada para concentrar plaquetas viables sin lisar eritrocitos ni alterar las proteínas bioactivas de la matriz extracelular.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2178185/1785292093H4ddfd93fa9b24b509ec07f997c54b925J.png",
    specs: { "Rango RMP": "0 - 4000 RPM Continuo", "Capacidad": "6 Tubos Estándar", "Carcasa": "Polímero de Alta Resistencia", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Equipo Estándar", "Kit Clínico con Accesorios"] }],
    variations: [
      { regular_price: "589000", sku: "CENT-4000-01", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Equipo Estándar" }] },
      { regular_price: "649000", sku: "CENT-4000-KIT", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Kit Clínico con Accesorios" }] }
    ]
  },
  {
    idInterno: "145",
    name: "Centrifugadora Digital 4000 RPM con Temporizador y Tubos",
    slug: "centrifugadora-digital-4000-rpm-temporizador",
    categorySlug: "profesional",
    subcategory: "Aparatología Clínica y Centrífugas",
    dropiId: "2076710",
    supplierId: "553114",
    costoDropi: 370000,
    pvpSugerido: 649000,
    stock: 99,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Panel digital con lectura de RPM en tiempo real y microprocesador para control exacto de protocolos de centrifugado estético y odontológico.",
    description: "<h3>Control Digital de Precisión Laboratorial</h3><p>Ofrece ajuste digital milimétrico del tiempo y velocidad para cumplir con las normas técnicas de centrifugación en medicina estética, tricología e implantología.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2076710/1770666253Image_2026-02-09_14-38-27.png",
    specs: { "Control": "Display Digital LED", "Fuerza Centrífuga Máxima": "1790 xg", "Nivel Sonoro": "Menor a 65 dB", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Centrífuga Digital", "Centrífuga Digital + Kit Tubos"] }],
    variations: [
      { regular_price: "649000", sku: "CENT-DIG-01", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Centrífuga Digital" }] },
      { regular_price: "699000", sku: "CENT-DIG-KIT", manage_stock: true, stock_quantity: 15, attributes: [{ name: "Presentación", option: "Centrífuga Digital + Kit Tubos" }] }
    ]
  },
  {
    idInterno: "146",
    name: "Máscara LED Facial 7 Colores con Extensión de Cuello y Fototerapia",
    slug: "mascara-led-facial-7-colores-extension-cuello",
    categorySlug: "profesional",
    subcategory: "Fototerapia y Máscaras LED",
    dropiId: "832438",
    supplierId: "13544",
    costoDropi: 124900,
    pvpSugerido: 249000,
    stock: 95,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Tratamiento de fototerapia integral con 192 diodos LED de alta pureza. Incluye módulo anatómico para cuello y escote con 7 espectros de luz.",
    description: "<h3>Fotobiomodulación Dérmica Fraccionada de 7 Espectros</h3><p>La luz roja (630nm) activa la producción de colágeno, la luz azul (470nm) esteriliza el acné, la verde (520nm) equilibra la pigmentación y la amarilla reduce eritemas y mejora el drenaje linfático.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/832438/171497300961eDSvj-txL._AC_SX569_.jpg",
    specs: { "Diodos": "192 LEDs de Alta Densidad", "Espectros": "7 Colores Terapéuticos", "Cobertura": "Rostro Completo + Cuello", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Máscara Completa Rostro + Cuello", "Kit Cabina con Control Remoto y Adaptador"] }],
    variations: [
      { regular_price: "249000", sku: "MASK-LED-7C-01", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Máscara Completa Rostro + Cuello" }] },
      { regular_price: "289000", sku: "MASK-LED-7C-KIT", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Kit Cabina con Control Remoto y Adaptador" }] }
    ]
  },
  {
    idInterno: "147",
    name: "Peeling Químico AHA 30% + BHA 2% Solución Exfoliante Clínica 30ml",
    slug: "peeling-quimico-aha-30-bha-2-solucion-exfoliante",
    categorySlug: "profesional",
    subcategory: "Peelings Químicos y Dermo-Activos",
    dropiId: "2151889",
    supplierId: "81817",
    costoDropi: 17500,
    pvpSugerido: 49000,
    stock: 392,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Solución de peeling químico con ácidos glicólico, láctico, tartárico y salicílico para renovación profunda de la textura cutánea.",
    description: "<h3>Exfoliación Ácida Combinada Médica</h3><p>Los alfa-hidroxiácidos disuelven los desmosomas entre corneocitos superficiales aportando luminosidad inmediata, mientras el ácido salicílico lipófilo penetra en el interior del poro descongestionándolo.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2151889/1778863696WhatsApp%20Image%202026-05-15%20at%2011.45.31%20AM.jpeg",
    specs: { "Concentración": "AHA 30% (Glicólico, Láctico) + BHA 2% (Salicílico)", "Volumen": "30 ml", "Tiempo de Aplicación": "Máximo 10 Minutos", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco Gotero 30ml", "Dúo Peeling Renovador (2 Frascos)"] }],
    variations: [
      { regular_price: "49000", sku: "PEEL-AHA-30ML", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Frasco Gotero 30ml" }] },
      { regular_price: "89000", sku: "PEEL-AHA-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Peeling Renovador (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "148",
    name: "Tónico de Ácido Glicólico al 7% Solución Dermo-Clarificante 100ml",
    slug: "tonico-acido-glicolico-7-solucion-dermo-clarificante",
    categorySlug: "profesional",
    subcategory: "Peelings Químicos y Dermo-Activos",
    dropiId: "2151199",
    supplierId: "81817",
    costoDropi: 13500,
    pvpSugerido: 42000,
    stock: 4993,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Tónico exfoliante suave a base de ácido glicólico de peso molecular reducido. Aclara manchas solares y unifica el tono de piel.",
    description: "<h3>Micro-Peeling Progresivo Diario</h3><p>Elimina gradualmente las células muertas superficiales sin irritación gracias a su amortiguación con agua de rosas y extractos botánicos calmantes, revelando una piel tersa y luminosa.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2151199/1778785777img_686c50ca842646.32748619.png",
    specs: { "Concentración": "Ácido Glicólico 7%", "Volumen": "100 ml", "pH": "Aproximadamente 3.6", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 100ml", "Dúo Clarificante (2 Frascos)"] }],
    variations: [
      { regular_price: "42000", sku: "TON-GLICOL-100", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Frasco 100ml" }] },
      { regular_price: "75000", sku: "TON-GLICOL-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Clarificante (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "149",
    name: "Solución Peeling Dual Ácido Salicílico + Ácido Glicólico Profesional",
    slug: "solucion-peeling-dual-acido-salicilico-glicolico",
    categorySlug: "profesional",
    subcategory: "Peelings Químicos y Dermo-Activos",
    dropiId: "2098200",
    supplierId: "120432",
    costoDropi: 45000,
    pvpSugerido: 95000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Complejo de peeling sinérgico para cabina cosmiátrica. Acción combinada queratolítica y seborreguladora para cutis graso y comedogénico.",
    description: "<h3>Doble Acción Queratolítica y Desincrustante</h3><p>Formulado para tratamientos de control seborreico en cabina. Reduce drásticamente la formación de micro-comedones, limpia el infundíbulo folicular y atenúa cicatrices residuales de acné.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2098200/1772485543WhatsApp%20Image%202026-03-02%20at%204.01.10%20PM.jpeg",
    specs: { "Activos": "Ácido Salicílico + Ácido Glicólico Estabilizado", "Indicación": "Piel Grasa, Pústulas, Comedones", "Presentación": "Frasco Gotero Clínico", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco Individual Cabina", "Dúo Tratamiento Clínico"] }],
    variations: [
      { regular_price: "95000", sku: "PEEL-DUAL-01", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Frasco Individual Cabina" }] },
      { regular_price: "169000", sku: "PEEL-DUAL-DUO", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Dúo Tratamiento Clínico" }] }
    ]
  },
  {
    idInterno: "150",
    name: "Crema Anestésica Tópica TKTX 98% para Microblading y Microneedling",
    slug: "crema-anestesica-topica-tktx-98",
    categorySlug: "profesional",
    subcategory: "Insumos y Anestésicos Tópicos",
    dropiId: "2100070",
    supplierId: "690904",
    costoDropi: 23900,
    pvpSugerido: 59000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Crema anestésica de máxima potencia y efecto prolongado (hasta 3-4 horas) bajo oclusión. Indispensable para micropigmentación y microneedling.",
    description: "<h3>Desensibilización Dérmica Rápida y Profunda</h3><p>Fórmula de gran concentración que bloquea la conducción nerviosa sensorial periférica mediante oclusión con film plástico durante 30-40 minutos, garantizando confort total en procedimientos de micropunción o tatuaje estético.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2100070/1772675614imgi_54_ICX05769.jpg",
    specs: { "Concentración": "Fórmula TKTX Negra 98%", "Tiempo de Efecto": "3 a 4 Horas bajo Film", "Uso": "Microneedling, Tatuaje, Piercing, Láser", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tubo Individual 10g", "Pack Profesional (3 Tubos)"] }],
    variations: [
      { regular_price: "59000", sku: "TKTX-98-01", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Tubo Individual 10g" }] },
      { regular_price: "149000", sku: "TKTX-98-PACK3", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Pack Profesional (3 Tubos)" }] }
    ]
  }
];

async function syncProfesional() {
  console.log(`Iniciando sincronización de ${PROFESIONAL_PRODUCTS_30.length} productos de Línea Profesional hacia WooCommerce...`);

  const categoryId = 84; // Category ID for 'profesional'

  // 1. Obtener productos existentes en WC para saber si ya existen por slug
  const existingProducts = await wcRequest(`/products?category=${categoryId}&per_page=100`);
  const existingMap = new Map(existingProducts.map((p) => [p.slug, p.id]));

  const results = [];

  for (const p of PROFESIONAL_PRODUCTS_30) {
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

  console.log(`\n¡Sincronización Línea Profesional completada! Total: ${results.length}`);
}

syncProfesional().catch(console.error);
