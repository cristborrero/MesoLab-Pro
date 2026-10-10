/**
 * Script de Ingesta de 30 Productos de Cuidado Corporal hacia WooCommerce REST API
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

export const CORPORAL_PRODUCTS_30 = [
  {
    idInterno: "061",
    name: "Gel Reductor Abdominal Termoactivo con Cafeína Sculpt 100ml",
    slug: "gel-reductor-abdominal-termoactivo-sculpt-100ml",
    categorySlug: "corporal",
    subcategory: "Reductores y Termoactivos",
    dropiId: "2094233",
    supplierId: "29636",
    costoDropi: 10000,
    pvpSugerido: 39000,
    stock: 5070,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Gel termogénico focalizado para abdomen y cintura. Activa la microcirculación cutánea mediante calor localizado, favoreciendo la combustión lipídica y el drenaje adiposo.",
    description: "<h3>Termogénesis Focalizada Cutánea</h3><p>Formulado con cafeína anhidra y extracto de centella asiática, eleva la temperatura en la zona de aplicación estimulando el metabolismo celular y optimizando la firmeza del tejido dérmico.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2094233/33c44dca-a9f0-478f-a582-64aced53d6e2.png",
    specs: { "Volumen": "100 ml", "Efecto": "Calor Termoactivo", "Zona": "Abdomen, Cintura, Espalda", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tubo Individual 100ml", "Dúo Intensivo (2 Tubos)"] }],
    variations: [
      { regular_price: "39000", sku: "GEL-SCULPT-100", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Tubo Individual 100ml" }] },
      { regular_price: "69000", sku: "GEL-SCULPT-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Intensivo (2 Tubos)" }] }
    ]
  },
  {
    idInterno: "062",
    name: "Gel Reductor y Moldeador Corporal Profesional 500ml",
    slug: "gel-reductor-moldeador-corporal-profesional-500ml",
    categorySlug: "corporal",
    subcategory: "Reductores y Termoactivos",
    dropiId: "1637130",
    supplierId: "345873",
    costoDropi: 29000,
    pvpSugerido: 69000,
    stock: 492,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Gel de masaje reductor y moldeador de gran formato para tratamientos estéticos intensivos. Facilita el deslizamiento manual y la movilización de panículos grasos.",
    description: "<h3>Moldeamiento Dérmico de Gran Cobertura</h3><p>Especialmente desarrollado para sesiones de masaje reductor, drenaje y uso continuo en cabina o en casa. Textura de rápida penetración sin residuo pegajoso.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1637130/1737643276GEL%20REDUCTOR.png",
    specs: { "Volumen": "500 ml", "Uso": "Corporal Diario y Masajes", "Textura": "Gel Hidrófilo", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 500ml", "Dúo Clínico (2 Frascos 500ml)"] }],
    variations: [
      { regular_price: "69000", sku: "GEL-RED-500ML", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Frasco 500ml" }] },
      { regular_price: "119000", sku: "GEL-RED-DUO-500", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Clínico (2 Frascos 500ml)" }] }
    ]
  },
  {
    idInterno: "063",
    name: "Gel Caliente Termogénico Lipolítico MW 250ml",
    slug: "gel-caliente-termogenico-lipolitico-mw-250ml",
    categorySlug: "corporal",
    subcategory: "Reductores y Termoactivos",
    dropiId: "71361",
    supplierId: "10135",
    costoDropi: 29000,
    pvpSugerido: 65000,
    stock: 332,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Fórmula termogénica potente con efecto rubefaciente. Produce un calentamiento dérmico que activa el gasto energético subcutáneo durante la actividad física.",
    description: "<h3>Efecto Rubefaciente y Activación Lipídica</h3><p>Produce un enrojecimiento térmico transitorio inocuo que evidencia la rápida dilatación capilar y la oxigenación del tejido adiposo en glúteos, abdomen y brazos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/71361/1783027185ChatGPT%20Image%202%20jul%202026,%2016_08_13.png",
    specs: { "Volumen": "250 ml", "Efecto": "Térmico Intenso", "Uso": "Pre-Entrenamiento y Masajes", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote 250ml", "Pack 2 Potes MW"] }],
    variations: [
      { regular_price: "65000", sku: "GEL-MW-250", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Pote 250ml" }] },
      { regular_price: "115000", sku: "GEL-MW-DUO", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Pack 2 Potes MW" }] }
    ]
  },
  {
    idInterno: "064",
    name: "Gel Caliente Reductor Moldeador Plus con Centella",
    slug: "gel-caliente-reductor-moldeador-plus-centella",
    categorySlug: "corporal",
    subcategory: "Reductores y Termoactivos",
    dropiId: "1617898",
    supplierId: "19662",
    costoDropi: 9800,
    pvpSugerido: 38000,
    stock: 1716,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Gel térmico de absorción progresiva que combina extractos lipolíticos y centella asiática para tonificar la piel flácida mientras remodela la silueta.",
    description: "<h3>Firmeza y Reducción Sin Irritación</h3><p>La centella asiática contrarresta el estrés térmico, aportando precursores de colágeno que compactan la piel tras la reducción de medidas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1617898/1745335284reducto-plusr-mockup-1.png",
    specs: { "Volumen": "200 ml", "Activos": "Centella Asiática + Cafeína", "Tipo de Piel": "Todo tipo de piel", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 200ml", "Dúo Modelador"] }],
    variations: [
      { regular_price: "38000", sku: "GEL-CAL-PLUS", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Frasco 200ml" }] },
      { regular_price: "68000", sku: "GEL-CAL-PLUS-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Modelador" }] }
    ]
  },
  {
    idInterno: "065",
    name: "Crema Reafirmante Tensora con Manteca de Karité Palmer's",
    slug: "crema-reafirmante-tensora-manteca-karite-palmers",
    categorySlug: "corporal",
    subcategory: "Reafirmantes y Cuello/Escote",
    dropiId: "2174419",
    supplierId: "156110",
    costoDropi: 13000,
    pvpSugerido: 45000,
    stock: 200,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Tratamiento dermatológico reafirmante enriquecido con manteca de karité, colágeno soluble, elastina y coenzima Q10 para combatir la atonía cutánea.",
    description: "<h3>Elasticidad Estructural y Densidad Dérmica</h3><p>Fórmula clínicamente testeada para restaurar la resistencia y tensión tisular tras el embarazo o pérdidas rápidas de peso corporal.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2174419/1781152460ChatGPT%20Image%2010%20jun%202026,%2011_33_26%20p.m..png",
    specs: { "Volumen": "250 ml", "Activos": "Karité, Colágeno, Elastina, Q10", "Uso": "Diario Mañana y Noche", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 250ml", "Dúo Reafirmante Palmer's"] }],
    variations: [
      { regular_price: "45000", sku: "PALM-REAF-250", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Frasco 250ml" }] },
      { regular_price: "79000", sku: "PALM-REAF-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Reafirmante Palmer's" }] }
    ]
  },
  {
    idInterno: "066",
    name: "Crema Tensora Efecto Lifting para Cuello y Escote 100g",
    slug: "crema-tensora-efecto-lifting-cuello-escote-100g",
    categorySlug: "corporal",
    subcategory: "Reafirmantes y Cuello/Escote",
    dropiId: "1647396",
    supplierId: "205895",
    costoDropi: 9000,
    pvpSugerido: 39000,
    stock: 22820,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Crema tensora especializada para la fina dermis de cuello, mandíbula y escote. Difumina arrugas horizontales ('anillos de Venus') y previene el descolgamiento.",
    description: "<h3>Reestructuración Peri-Cervical</h3><p>Concentrado tensor con péptidos y ácido hialurónico que refuerza el entramado elástico del cuello, devolviendo firmeza al óvalo mandibular.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1647396/1738201167Captura%20de%20pantalla%202025-01-29%20193400.png",
    specs: { "Peso": "100 g", "Zona": "Cuello, Papada, Escote", "Beneficio": "Lifting Tensor No Quirúrgico", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote 100g", "Dúo Reafirmante Cuello"] }],
    variations: [
      { regular_price: "39000", sku: "CUELLO-LIFT-100", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Pote 100g" }] },
      { regular_price: "69000", sku: "CUELLO-LIFT-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Reafirmante Cuello" }] }
    ]
  },
  {
    idInterno: "067",
    name: "Crema Reafirmante Corporal y Glúteos Firmsta 200g",
    slug: "crema-reafirmante-corporal-gluteos-firmsta-200g",
    categorySlug: "corporal",
    subcategory: "Reafirmantes y Cuello/Escote",
    dropiId: "1210719",
    supplierId: "54262",
    costoDropi: 18900,
    pvpSugerido: 55000,
    stock: 7670,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Tratamiento voluminizador y reafirmante para glúteos, busto y muslos. Mejora la tonicidad dérmica mediante extractos tensores de origen biológico.",
    description: "<h3>Tono y Efecto Push-Up Epidérmico</h3><p>Su emulsión sedosa estimula la microarquitectura dérmica, mejorando la resistencia mecánica de la piel en áreas con tendencia a la ptosis gravitacional.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1210719/17748949871e4eec2a-749e-4854-bb91-556238a6e721-Photoroom.png",
    specs: { "Peso": "200 g", "Zona": "Glúteos, Busto, Piernas", "Acción": "Firmeza y Elasticidad", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote 200g", "Dúo Firmeza Total"] }],
    variations: [
      { regular_price: "55000", sku: "FIRMSTA-200G", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Pote 200g" }] },
      { regular_price: "95000", sku: "FIRMSTA-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Firmeza Total" }] }
    ]
  },
  {
    idInterno: "068",
    name: "Crema Corporal Reafirmante Hidratación Profunda 500ml",
    slug: "crema-corporal-reafirmante-hidratacion-profunda-500ml",
    categorySlug: "corporal",
    subcategory: "Reafirmantes y Cuello/Escote",
    dropiId: "2287234",
    supplierId: "197958",
    costoDropi: 11000,
    pvpSugerido: 42000,
    stock: 526598,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Emulsión corporal hidratante y reafirmante de gran volumen. Restaura el manto lipídico natural de la piel dejándola elástica, luminosa y visiblemente tersa.",
    description: "<h3>Nutrición y Resistencia Hidrolipídica</h3><p>Ideal para el cuidado diario de todo el cuerpo tras la ducha. Se absorbe al instante sin sensación oleosa, manteniendo la hidratación por 24 horas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2287234/bafdc2bc-2c44-4f24-90fa-4a5e66565616.jpg",
    specs: { "Volumen": "500 ml", "Tipo de Piel": "Piel Seca y Normal", "Uso": "Diario", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco Dosificador 500ml", "Dúo Familiar (2 Frascos)"] }],
    variations: [
      { regular_price: "42000", sku: "CREM-REAF-500", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco Dosificador 500ml" }] },
      { regular_price: "75000", sku: "CREM-REAF-500-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Familiar (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "069",
    name: "Crema Anticelulítica Adeus con Extracto de Café y Ginkgo",
    slug: "crema-anticelulitica-adeus-cafe-ginkgo",
    categorySlug: "corporal",
    subcategory: "Anticelulitis y Drenaje",
    dropiId: "280684",
    supplierId: "5381",
    costoDropi: 11900,
    pvpSugerido: 45000,
    stock: 562,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Tratamiento intensivo contra la celulitis edematosa y fibrosa. Actúa alisando nódulos adiposos y mejorando la circulación periférica en muslos y glúteos.",
    description: "<h3>Drenaje Celular y Alisado de Piel de Naranja</h3><p>La combinación de café verde y ginkgo biloba estimula el retorno venolinfático, disminuyendo la acumulación de toxinas y líquidos retenidos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/280684/17692665081766415330ChatGPT%20Image%2019%20dic%202025,%2001_07_48%20p.m..png",
    specs: { "Volumen": "250 ml", "Activos": "Extracto de Café + Ginkgo Biloba", "Acción": "Anticelulítico y Reafirmante", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote 250ml", "Tratamiento 2 Meses (2 Potes)"] }],
    variations: [
      { regular_price: "45000", sku: "ADEUS-CEL-250", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Pote 250ml" }] },
      { regular_price: "79000", sku: "ADEUS-CEL-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Tratamiento 2 Meses (2 Potes)" }] }
    ]
  },
  {
    idInterno: "070",
    name: "Aceite Reafirmante Corporal Anticelulítico con Vitamina E 100ml",
    slug: "aceite-reafirmante-corporal-anticelulitico-vitamina-e-100ml",
    categorySlug: "corporal",
    subcategory: "Anticelulitis y Drenaje",
    dropiId: "2118012",
    supplierId: "29636",
    costoDropi: 14000,
    pvpSugerido: 49000,
    stock: 1104,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Aceite seco regenerador para masaje reductor y drenaje linfático. Mejora la tonicidad cutánea y proporciona una textura satinada sin efecto graso residual.",
    description: "<h3>Deslizamiento Terapéutico y Nutrición Celular</h3><p>Rico en tocoferoles (vitamina E) y aceites botánicos prensados en frío, nutre las fibras de sostén cutáneas previniendo la degradación del colágeno.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2118012/ae8f113c-ee82-4de2-a97e-35aafab59930.jpg",
    specs: { "Volumen": "100 ml", "Textura": "Aceite Seco de Rápida Absorción", "Uso": "Masaje y Post-Ducha", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 100ml", "Dúo Masaje Drenante"] }],
    variations: [
      { regular_price: "49000", sku: "OIL-REAF-100", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco 100ml" }] },
      { regular_price: "85000", sku: "OIL-REAF-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Masaje Drenante" }] }
    ]
  },
  {
    idInterno: "071",
    name: "Rodillo Masajeador 360 Drenante y Anticelulítico con 9 Ruedas",
    slug: "rodillo-masajeador-360-drenante-anticelulitico",
    categorySlug: "corporal",
    subcategory: "Anticelulitis y Drenaje",
    dropiId: "2124344",
    supplierId: "6006",
    costoDropi: 18900,
    pvpSugerido: 49000,
    stock: 112,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Dispositivo ergonómico envolvente para maderoterapia moderna y automasaje. Rompe acúmulos grasos localizados y estimula el flujo linfático en piernas y brazos.",
    description: "<h3>Presión Envolvente Circulatoria</h3><p>Sus 9 ruedas dentadas independientes se amoldan a la curvatura de muslos, pantorrillas y brazos, liberando adherencias fasciales y desinflamando el tejido.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2124344/1775580456masajeadir%20360%209%20rodillos.jpg",
    specs: { "Material": "Polímero ABS Quirúrgico de Alta Resistencia", "Ruedas": "9 Ruedas 360°", "Uso": "Automasaje y Recuperación", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Rodillo 360 Individual", "Kit Rodillo + Gel Reductor"] }],
    variations: [
      { regular_price: "49000", sku: "ROD-360-IND", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Rodillo 360 Individual" }] },
      { regular_price: "79000", sku: "ROD-360-KIT", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Kit Rodillo + Gel Reductor" }] }
    ]
  },
  {
    idInterno: "072",
    name: "Masajeador Corporal Anticelulítico Eléctrico 2.0 con Infrarrojos",
    slug: "masajeador-corporal-anticelulitico-electrico-infrarrojo-2",
    categorySlug: "corporal",
    subcategory: "Anticelulitis y Drenaje",
    dropiId: "337126",
    supplierId: "64834",
    costoDropi: 46900,
    pvpSugerido: 99000,
    stock: 156,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Dispositivo electromecánico con cabezales intercambiables de percusión y calor infrarrojo. Moviliza adipocitos profundos y alisa la textura de la piel.",
    description: "<h3>Tecnología Vibratoria Subcutánea</h3><p>Ofrece micromasajes de alta frecuencia con termoterapia infrarroja que reactivan la síntesis de colágeno y relajan la tensión muscular profunda.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/337126/17018798541701879854D_NQ_NP_2X_718787-MCO69027306620_042023-F.png",
    specs: { "Potencia": "25 W", "Cabezales": "4 Cabezales Clínicos Intercambiables", "Función": "Infrarrojo + Oscilación Continua", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Color", position: 0, visible: true, variation: true, options: ["Blanco / Purpura", "Blanco / Azul"] }],
    variations: [
      { regular_price: "99000", sku: "MASAJ-CEL-PUR", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Color", option: "Blanco / Purpura" }] },
      { regular_price: "99000", sku: "MASAJ-CEL-AZU", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Color", option: "Blanco / Azul" }] }
    ]
  },
  {
    idInterno: "073",
    name: "Loción de Masaje para Estrías con Manteca de Cacao Palmer's 250ml",
    slug: "locion-masaje-estrias-manteca-cacao-palmers-250ml",
    categorySlug: "corporal",
    subcategory: "Antiestrías y Cicatrices",
    dropiId: "2173089",
    supplierId: "796149",
    costoDropi: 37900,
    pvpSugerido: 79000,
    stock: 980,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Fórmula líder mundial con manteca de cacao pura, manteca de karité, colágeno y elastina. Diseñada para prevenir y reparar estrías durante y post-embarazo.",
    description: "<h3>Resistencia de Fibras Dérmicas Elastizantes</h3><p>Clínicamente comprobado que mejora la elasticidad en el 98% de las usuarias. Hidrata por 48 horas sin fragancias irritantes ni aceites minerales.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2173089/1781050231palmers%20crema%20anti%20estrias%20250%2001.jpg",
    specs: { "Volumen": "250 ml", "Hipoalergénico": "Sí, Libre de Parabenos", "Indicación": "Embarazo, Pubertad y Cambios de Peso", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 250ml", "Tratamiento Completo (2 Frascos)"] }],
    variations: [
      { regular_price: "79000", sku: "PALM-STR-250", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco 250ml" }] },
      { regular_price: "139000", sku: "PALM-STR-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Tratamiento Completo (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "074",
    name: "Crema Antiestrías y Cicatrices SkinRepair Regenerativa",
    slug: "crema-antiestrias-cicatrices-skinrepair-regenerativa",
    categorySlug: "corporal",
    subcategory: "Antiestrías y Cicatrices",
    dropiId: "2120358",
    supplierId: "197958",
    costoDropi: 8000,
    pvpSugerido: 35000,
    stock: 587395,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Tratamiento cicatrizante y humectante que acelera la renovación tisular en zonas de rotura dérmica, suavizando el relieve de estrías blancas y rojas.",
    description: "<h3>Reepitelización y Atenuación de Relieves</h3><p>Enriquecida con factores hidratantes naturales que restauran la cohesión dérmica, aportando flexibilidad y suavidad inmediata.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2120358/431bed2f-458f-44a7-be9c-f41eb2bc3a5d.png",
    specs: { "Contenido": "100 g", "Uso": "2 veces al día", "Tipo de Piel": "Todo tipo de piel", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote 100g", "Dúo Regenerador"] }],
    variations: [
      { regular_price: "35000", sku: "SKIN-REP-100", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Pote 100g" }] },
      { regular_price: "59000", sku: "SKIN-REP-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Regenerador" }] }
    ]
  },
  {
    idInterno: "075",
    name: "Rutina Corporal Antiestrías y Firmeza Dúo Reparador",
    slug: "rutina-corporal-antiestrias-firmeza-duo-reparador",
    categorySlug: "corporal",
    subcategory: "Antiestrías y Cicatrices",
    dropiId: "2190247",
    supplierId: "434826",
    costoDropi: 23000,
    pvpSugerido: 69000,
    stock: 1000,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Tratamiento dual para prevención y corrección de estrías. Combina activos tensores de matriz extracelular con lípidos biomiméticos reparadores.",
    description: "<h3>Acción Sinérgica de Firmeza y Elasticidad</h3><p>Nutre las capas profundas de la epidermis mediante una infusión continuada de antioxidantes y péptidos regeneradores.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2190247/1782936824f66a018c-a876-4507-a00f-198d9d2b57b5.png",
    specs: { "Set": "2 Productos Complementarios", "Zona": "Abdomen, Senos, Caderas", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Kit Dúo Firmeza", "Doble Kit Rutina Completa"] }],
    variations: [
      { regular_price: "69000", sku: "RUT-STR-KIT", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Kit Dúo Firmeza" }] },
      { regular_price: "119000", sku: "RUT-STR-2KIT", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Doble Kit Rutina Completa" }] }
    ]
  },
  {
    idInterno: "076",
    name: "Exfoliante Corporal Dermo-Pulidor con Microgránulos 200ml",
    slug: "exfoliante-corporal-dermopulidor-microgranulos-200ml",
    categorySlug: "corporal",
    subcategory: "Exfoliantes y Pulidores",
    dropiId: "1637128",
    supplierId: "345873",
    costoDropi: 28000,
    pvpSugerido: 69000,
    stock: 500,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Scrub dermo-exfoliante que desprende células queratinizadas e impurezas profundas, afinando el poro y preparando la piel para absorber activos reductores.",
    description: "<h3>Pulido Epidérmico Suave y Renovador</h3><p>Sus partículas esféricas calibradas desincrustan folículos pilosos sin causar microlesiones dérmicas, dejando un tacto de seda instantáneo.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1637128/1737643128EXFOLIANTE%20CORPORAL.png",
    specs: { "Volumen": "200 ml", "Gránulos": "Microesferas Biodegradables", "Frecuencia": "1 a 2 veces por semana", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tubo 200ml", "Dúo Renovador (2 Tubos)"] }],
    variations: [
      { regular_price: "69000", sku: "EXF-CORP-200", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Tubo 200ml" }] },
      { regular_price: "119000", sku: "EXF-CORP-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Renovador (2 Tubos)" }] }
    ]
  },
  {
    idInterno: "077",
    name: "Body Scrub Exfoliante Corporal Botánico Dermanat",
    slug: "body-scrub-exfoliante-corporal-botanico-dermanat",
    categorySlug: "corporal",
    subcategory: "Exfoliantes y Pulidores",
    dropiId: "1386131",
    supplierId: "323312",
    costoDropi: 22647,
    pvpSugerido: 59000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Exfoliante artesanal con aceites esenciales botánicos y cristales minerales. Desintoxica la piel áspera en codos, rodillas y piernas.",
    description: "<h3>Mineralización y Desintoxicación Cutánea</h3><p>Elimina impurezas acumuladas y estimula la circulación de retorno, dejando una sutil capa protectora de aceites vegetales emolientes.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1386131/1729716089Body-Scrub-dermanat-1-180x180.jpg",
    specs: { "Peso": "200 g", "Origen": "Extractos Botánicos Puros", "Textura": "Gránulo de Cristal con Aceite", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote 200g", "Dúo Botánico Dermanat"] }],
    variations: [
      { regular_price: "59000", sku: "SCRUB-DERM-200", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Pote 200g" }] },
      { regular_price: "99000", sku: "SCRUB-DERM-DUO", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Dúo Botánico Dermanat" }] }
    ]
  },
  {
    idInterno: "078",
    name: "Exfoliante Corporal Sedoso Truly Rainbow Glow 200ml",
    slug: "exfoliante-corporal-sedoso-truly-rainbow-glow-200ml",
    categorySlug: "corporal",
    subcategory: "Exfoliantes y Pulidores",
    dropiId: "1898089",
    supplierId: "525739",
    costoDropi: 18000,
    pvpSugerido: 55000,
    stock: 1904,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Scrub batido ultra cremoso enriquecido con colágeno vegetal y azúcar refinado. Proporciona una exfoliación sensorial suave apta para pieles sensibles.",
    description: "<h3>Textura Mousse con Pulido Suave</h3><p>Sus finos cristales de azúcar se funden en contacto con el agua, transformándose en una leche hidratante que nutre profundamente la piel.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1898089/1767133147WhatsApp%20Image%202025-12-30%20at%204.51.29%20PM%20(2).jpeg",
    specs: { "Volumen": "200 ml", "Aroma": "Frutas Tropicales y Vainilla", "Tipo de Piel": "Normal a Sensible", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 200ml", "Dúo Sensorial Truly"] }],
    variations: [
      { regular_price: "55000", sku: "TRULY-SCRUB-200", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco 200ml" }] },
      { regular_price: "95000", sku: "TRULY-SCRUB-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Sensorial Truly" }] }
    ]
  },
  {
    idInterno: "079",
    name: "Jabón Dermo-Exfoliante Masajeador con Micropartículas 120g",
    slug: "jabon-dermoexfoliante-masajeador-microparticulas-120g",
    categorySlug: "corporal",
    subcategory: "Exfoliantes y Pulidores",
    dropiId: "1812615",
    supplierId: "43339",
    costoDropi: 9970,
    pvpSugerido: 29000,
    stock: 2094,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Barra de jabón exfoliante con nódulos de masaje ergonómicos integrados. Limpia, exfolia suavemente y activa la circulación cutánea en la ducha diaria.",
    description: "<h3>Masaje Estimulante en la Ducha</h3><p>Diseño multifunción con relieves esféricos que ejercen presión tonificante en muslos y espalda mientras retiran impurezas superficiales.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1812615/a2bbce09-c3ad-4a28-bf37-5cbd6905bc39.png",
    specs: { "Peso": "120 g", "Formato": "Barra Masajeadora", "Uso": "Diario en Ducha", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Barra Individual 120g", "Pack x3 Barras Ahorro"] }],
    variations: [
      { regular_price: "29000", sku: "JAB-EXF-120", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Barra Individual 120g" }] },
      { regular_price: "59000", sku: "JAB-EXF-PACK3", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Pack x3 Barras Ahorro" }] }
    ]
  },
  {
    idInterno: "080",
    name: "Serum Aclarante y Despigmentante Corporal Bioaqua 30ml",
    slug: "serum-aclarante-despigmentante-corporal-bioaqua-30ml",
    categorySlug: "corporal",
    subcategory: "Aclarantes y Zonas Íntimas",
    dropiId: "781840",
    supplierId: "157185",
    costoDropi: 15500,
    pvpSugerido: 45000,
    stock: 261,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Fórmula despigmentante intensiva para axilas, entrepierna, codos y cuello. Bloquea la síntesis de melanina producida por roce o irritación.",
    description: "<h3>Corrección Cromática en Zonas de Fricción</h3><p>Extracto de cereza, niacinamida y arbutina actúan unificando el tono dérmico en áreas hiper-pigmentadas por afeitado continuo o fricción mecánica.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/781840/171337249117018948881701894888Copia%20de%20Screenshot_64.png",
    specs: { "Volumen": "30 ml", "Activos": "Arbutina + Niacinamida", "Zonas": "Axilas, Entrepierna, Codos, Rodillas", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 30ml", "Dúo Aclarante Intensivo"] }],
    variations: [
      { regular_price: "45000", sku: "BIO-ACLAR-30", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Frasco 30ml" }] },
      { regular_price: "79000", sku: "BIO-ACLAR-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Aclarante Intensivo" }] }
    ]
  },
  {
    idInterno: "081",
    name: "Gel Despigmentante Íntimo de Alta Tolerancia Piel de Oro 60ml",
    slug: "gel-despigmentante-intimo-alta-tolerancia-piel-de-oro-60ml",
    categorySlug: "corporal",
    subcategory: "Aclarantes y Zonas Íntimas",
    dropiId: "1750479",
    supplierId: "507182",
    costoDropi: 30900,
    pvpSugerido: 69000,
    stock: 247,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Gel aclarante dermo-respetuoso formulado a pH fisiológico para zonas íntimas sensibles y entrepierna. Aclara progresivamente sin ardor ni descamación agresiva.",
    description: "<h3>Seguridad y Tolerancia en Mucosas Externas</h3><p>Fórmula botánica libre de hidroquinona que reduce las sombras causadas por foliculitis y roce constante de prendas ajustadas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1750479/1744236814WhatsApp%20Image%202025-03-26%20at%208.05.08%20AM%20(7).jpeg",
    specs: { "Volumen": "60 ml", "pH": "Fisiológico Equilibrado", "Libre de": "Parabenos e Hidroquinona", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 60ml", "Dúo Íntimo Piel de Oro"] }],
    variations: [
      { regular_price: "69000", sku: "INT-ORO-60", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Frasco 60ml" }] },
      { regular_price: "119000", sku: "INT-ORO-DUO", manage_stock: true, stock_quantity: 20, attributes: [{ name: "Presentación", option: "Dúo Íntimo Piel de Oro" }] }
    ]
  },
  {
    idInterno: "082",
    name: "Serum Despigmentante Corporal Smooth Legend 90ml",
    slug: "serum-despigmentante-corporal-smooth-legend-90ml",
    categorySlug: "corporal",
    subcategory: "Aclarantes y Zonas Íntimas",
    dropiId: "1942028",
    supplierId: "525739",
    costoDropi: 24500,
    pvpSugerido: 59000,
    stock: 402,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Serum post-depilación que aclara folículos oscuros, previene vellos encarnados y unifica el tono en zona del bikini, piernas y axilas.",
    description: "<h3>Alivio Post-Depilatorio y Tono Parejo</h3><p>Con ácido láctico suave y extractos calmantes que suavizan la queratina folicular, previniendo los puntos oscuros y la hiperpigmentación post-inflamatoria.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1942028/1764697325WhatsApp%20Image%202025-11-28%20at%201.10.46%20PM.jpeg",
    specs: { "Volumen": "90 ml", "Beneficio": "Anti-Vellos Encarnados y Aclarante", "Zona": "Bikini, Axilas, Piernas", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 90ml", "Dúo Post-Depilación"] }],
    variations: [
      { regular_price: "59000", sku: "SMOOTH-LEG-90", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Frasco 90ml" }] },
      { regular_price: "99000", sku: "SMOOTH-LEG-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Post-Depilación" }] }
    ]
  },
  {
    idInterno: "083",
    name: "Crema Reparadora Intensiva con Urea al 40% para Talones y Codos",
    slug: "crema-reparadora-intensiva-urea-40-talones-codos",
    categorySlug: "corporal",
    subcategory: "Piernas, Pies y Manos",
    dropiId: "1681615",
    supplierId: "477266",
    costoDropi: 16000,
    pvpSugerido: 49000,
    stock: 1162,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Queratolítico clínico de alta concentración (Urea 40%). Disuelve callosidades duras, repara grietas profundas en talones y elimina asperezas en codos.",
    description: "<h3>Exfoliación Queratolítica Profunda</h3><p>La urea al 40% rompe los enlaces de queratina en zonas engrosadas, permitiendo que la piel recupere su elasticidad original sin necesidad de limas agresivas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1681615/17538976203.png",
    specs: { "Concentración": "Urea al 40%", "Zonas": "Talones Agrietados, Callosidades, Codos", "Acción": "Queratolítica y Regeneradora", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote Clínico 100g", "Dúo Reparación Talones"] }],
    variations: [
      { regular_price: "49000", sku: "UREA-40-100", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Pote Clínico 100g" }] },
      { regular_price: "85000", sku: "UREA-40-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Reparación Talones" }] }
    ]
  },
  {
    idInterno: "084",
    name: "Crema Alivio y Descanso para Piernas Cansadas Vital 100ml",
    slug: "crema-alivio-descanso-piernas-cansadas-vital-100ml",
    categorySlug: "corporal",
    subcategory: "Piernas, Pies y Manos",
    dropiId: "2094216",
    supplierId: "29636",
    costoDropi: 10000,
    pvpSugerido: 39000,
    stock: 5104,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Emulsión criogénica descongestionante con castaño de indias y mentol. Alivia pesadez, ardor y sensación de cansancio producida por largas horas de pie.",
    description: "<h3>Efecto Frío Venotónico Reactivador</h3><p>Favorece el retorno circulatorio periférico y reduce la sensación de hinchazón vespertina en tobillos y pantorrillas con un frescor reconfortante.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2094216/d7ff79cb-a144-4866-a92f-97080360ff93.png",
    specs: { "Volumen": "100 ml", "Activos": "Castaño de Indias + Mentol", "Efecto": "Frío Descongestionante", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tubo 100ml", "Dúo Descanso Vital"] }],
    variations: [
      { regular_price: "39000", sku: "PIERNAS-VIT-100", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Tubo 100ml" }] },
      { regular_price: "69000", sku: "PIERNAS-VIT-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Descanso Vital" }] }
    ]
  },
  {
    idInterno: "085",
    name: "Mousse Efervescente para Piernas Cansadas con Efecto Hielo 150ml",
    slug: "mousse-efervescente-piernas-cansadas-efecto-hielo-150ml",
    categorySlug: "corporal",
    subcategory: "Piernas, Pies y Manos",
    dropiId: "959395",
    supplierId: "263298",
    costoDropi: 30000,
    pvpSugerido: 69000,
    stock: 500,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Espuma crepitante criogénica de rápida absorción. Al aplicarse sobre la piel emite microburbujas frías que producen un micromasaje tonificante instantáneo.",
    description: "<h3>Micro-Crepitación Criogénica</h3><p>La tecnología de efervescencia fría intensifica el descenso térmico cutáneo, produciendo vasoconstricción refleja y alivio inmediato del dolor por varices.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/959395/1720570554COMBO%20ESPUMA%202.jpg",
    specs: { "Volumen": "150 ml", "Tecnología": "Espuma Crepitante Fría", "Acción": "Descongestión Rápida", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Lata Spray 150ml", "Dúo Efervescente Hielo"] }],
    variations: [
      { regular_price: "69000", sku: "MOUSSE-PIER-150", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Lata Spray 150ml" }] },
      { regular_price: "119000", sku: "MOUSSE-PIER-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo Efervescente Hielo" }] }
    ]
  },
  {
    idInterno: "086",
    name: "Aceite Regenerador Puro de Rosa Mosqueta Chilena 30ml",
    slug: "aceite-regenerador-puro-rosa-mosqueta-chilena-30ml",
    categorySlug: "corporal",
    subcategory: "Piernas, Pies y Manos",
    dropiId: "1420003",
    supplierId: "336981",
    costoDropi: 27350,
    pvpSugerido: 62000,
    stock: 499,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Aceite 100% puro prensado en frío. Riquísimo en ácidos grasos insaturados linoleico y linolénico, clave para regenerar cicatrices quirúrgicas y estrías recientes.",
    description: "<h3>Regeneración Cicatrizante Tisular</h3><p>Acelera la síntesis de colágeno en la dermis reticular, mejorando la coloración y flexibilidad de cicatrices queloides o hipertróficas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1420003/1730390437ARM.jpg",
    specs: { "Volumen": "30 ml", "Pureza": "100% Virgen Prensado en Frío", "Uso": "Cicatrices, Estrías y Zonas Secas", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco Gotero 30ml", "Dúo Cicatrizante 2x30ml"] }],
    variations: [
      { regular_price: "62000", sku: "ROSA-MOSQ-30", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco Gotero 30ml" }] },
      { regular_price: "109000", sku: "ROSA-MOSQ-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Cicatrizante 2x30ml" }] }
    ]
  },
  {
    idInterno: "087",
    name: "Mantequilla Corporal Nutritiva Batida Truly con Karité 135ml",
    slug: "mantequilla-corporal-nutritiva-batida-truly-karite-135ml",
    categorySlug: "corporal",
    subcategory: "Nutrición, Bronceado y Cera",
    dropiId: "1851172",
    supplierId: "525739",
    costoDropi: 16000,
    pvpSugerido: 49000,
    stock: 3648,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Body butter artesanal batida con manteca de karité, manteca de cacao y aceite de almendras. Crea una barrera oclusiva hidratante ideal para piel extremadamente seca.",
    description: "<h3>Nutrición Oclusiva de Larga Duración</h3><p>Textura cremosa esponjosa que se funde con la temperatura corporal, devolviendo elasticidad y eliminando la aspereza en piernas y brazos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1851172/17501026702%20X%20$89.900%203%20X%20$119.900%20(34).jpg",
    specs: { "Volumen": "135 ml", "Base": "Manteca de Karité y Cacao Batida", "Acabado": "Satinado No Graso", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote 135ml", "Dúo Nutrición Extrema"] }],
    variations: [
      { regular_price: "49000", sku: "BUTTER-TRULY-135", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Pote 135ml" }] },
      { regular_price: "85000", sku: "BUTTER-TRULY-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Nutrición Extrema" }] }
    ]
  },
  {
    idInterno: "088",
    name: "Gotas Autobronceadoras Graduales Sun Drops Truly 90ml",
    slug: "gotas-autobronceadoras-graduales-sun-drops-truly-90ml",
    categorySlug: "corporal",
    subcategory: "Nutrición, Bronceado y Cera",
    dropiId: "2073347",
    supplierId: "525739",
    costoDropi: 24000,
    pvpSugerido: 65000,
    stock: 2936,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Autobronceador concentrado con DHA vegetal y ácido hialurónico. Se mezcla con tu crema hidratante corporal para un bronceado dorado uniforme sin exposición a radiación UV.",
    description: "<h3>Tono Dorado Personalizado Sin Sol</h3><p>Reacciona de manera controlada con las proteínas superficiales del estrato córneo produciendo un tono bronceado natural sin manchas ni rayas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2073347/177006912371BwT7D5efL.jpg",
    specs: { "Volumen": "90 ml", "Activo": "DHA Vegetal Gradual", "Modo de Uso": "3 a 5 gotas mezcladas con crema", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Gotero 90ml", "Dúo Bronceado Dorado"] }],
    variations: [
      { regular_price: "65000", sku: "SUN-DROPS-90", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Gotero 90ml" }] },
      { regular_price: "115000", sku: "SUN-DROPS-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Bronceado Dorado" }] }
    ]
  },
  {
    idInterno: "089",
    name: "Olla Calentadora Profesional de Cera Depilatoria Pro-Wax 100",
    slug: "olla-calentadora-cera-depilatoria-prowax-100",
    categorySlug: "corporal",
    subcategory: "Nutrición, Bronceado y Cera",
    dropiId: "263558",
    supplierId: "48587",
    costoDropi: 30900,
    pvpSugerido: 75000,
    stock: 250,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Calentador eléctrico de cera con termostato regulable y recipiente de aluminio extraíble. Compatible con perlas de cera, cera elástica y cera tradicional.",
    description: "<h3>Fundición Homogénea para Depilación Higiénica</h3><p>Mantiene la cera a temperatura constante durante toda la sesión depilatoria, garantizando un arranque seguro del folículo sin quemaduras dérmicas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/263558/17018987111701898711OLLA%20CERA%20PRO%20WAX%20100%20BLANCO.JPG.jpg",
    specs: { "Capacidad": "500 ml", "Voltaje": "110V Estándar Colombia", "Termostato": "3 Niveles Ajustables", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Olla Pro-Wax Sola", "Kit Olla + Cera Perlada 100g"] }],
    variations: [
      { regular_price: "75000", sku: "PROWAX-SOLA", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Olla Pro-Wax Sola" }] },
      { regular_price: "92000", sku: "PROWAX-KIT-CERA", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Kit Olla + Cera Perlada 100g" }] }
    ]
  },
  {
    idInterno: "090",
    name: "Gel Conductor Neutro Electrotópico para Cavitación y RF 500ml",
    slug: "gel-conductor-neutro-electrotopico-cavitacion-rf-500ml",
    categorySlug: "corporal",
    subcategory: "Nutrición, Bronceado y Cera",
    dropiId: "1736707",
    supplierId: "365543",
    costoDropi: 10000,
    pvpSugerido: 35000,
    stock: 1975,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Gel conductor de grado médico e impedancia neutra. Indispensable para acople acústico en cavitación ultrasónica, radiofrecuencia corporal y electroestimulación.",
    description: "<h3>Acople Acústico y Protección Térmica Dérmica</h3><p>Facilita la transmisión homogénea de ondas ultrasónicas y corrientes RF hacia el tejido adiposo subcutáneo, evitando puntos calientes o irritación cutánea.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1736707/17495845471747176680as.jpg",
    specs: { "Volumen": "250 ml", "Conductividad": "Alta Impedancia Acústica Neutra", "Fórmula": "Base Agua No Grasa", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 250ml", "Dúo Conductor (2 Frascos)"] }],
    variations: [
      { regular_price: "35000", sku: "GEL-COND-250", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Frasco 250ml" }] },
      { regular_price: "59000", sku: "GEL-COND-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Conductor (2 Frascos)" }] }
    ]
  }
];

async function syncCorporal() {
  console.log(`Iniciando sincronización de ${CORPORAL_PRODUCTS_30.length} productos de Cuidado Corporal hacia WooCommerce...`);

  const categoryId = 82; // Category ID for 'corporal'

  // 1. Obtener productos existentes en WC para saber si ya existen por slug
  const existingProducts = await wcRequest(`/products?category=${categoryId}&per_page=100`);
  const existingMap = new Map(existingProducts.map((p) => [p.slug, p.id]));

  const results = [];

  for (const p of CORPORAL_PRODUCTS_30) {
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

  console.log(`\n¡Sincronización Cuidado Corporal completada! Total: ${results.length}`);
}

syncCorporal().catch(console.error);
