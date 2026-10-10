/**
 * Script de Ingesta de 30 Productos de Cuidado Facial hacia WooCommerce REST API
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

export const FACIAL_PRODUCTS_30 = [
  {
    idInterno: "031",
    name: "Suero Hidratante Concentrado Ácido Hialurónico Puro 30ml",
    slug: "suero-acido-hialuronico-puro-30ml",
    categorySlug: "facial",
    subcategory: "Sueros Dermo-Activos",
    dropiId: "1607896",
    supplierId: "345873",
    costoDropi: 26000,
    pvpSugerido: 69000,
    stock: 592,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Formulación de alta densidad de ácido hialurónico multimolecular. Rellena líneas de expresión, restaura la elasticidad dérmica y retiene hasta 1000 veces su peso en agua.",
    description: "<h3>Hidratación Tridimensional Epidérmica</h3><p>Penetra en diferentes estratos cutáneos para hidratar desde la superficie hasta las capas profundas, dejando un efecto aterciopelado inmediato.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1607896/1737474018SERUM%20ACIDO%20HIALURO.png",
    specs: { "Volumen": "30 ml", "Textura": "Gel acuoso no graso", "Tipo de Piel": "Todo tipo de piel", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco Individual 30ml", "Dúo Tratamiento Intensivo (2 Frascos)"] }],
    variations: [
      { regular_price: "69000", sku: "SRM-HA-30ML", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco Individual 30ml" }] },
      { regular_price: "119000", sku: "SRM-HA-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Tratamiento Intensivo (2 Frascos)" }] }
    ]
  },
  {
    idInterno: "032",
    name: "Suero Iluminador Antioxidante Vitamina C + Vitamina E",
    slug: "suero-iluminador-vitamina-c-vitamina-e",
    categorySlug: "facial",
    subcategory: "Sueros Dermo-Activos",
    dropiId: "2239906",
    supplierId: "7910",
    costoDropi: 18000,
    pvpSugerido: 59000,
    stock: 400,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Complejo antioxidante de alta estabilidad con ácido ascórbico y tocoferol. Neutraliza radicales libres, unifica el tono y devuelve la luminosidad natural.",
    description: "<h3>Escudo Fotoprotector y Tono Radiante</h3><p>Estimula la síntesis endógena de colágeno mientras disminuye manchas solares y signos de fatiga facial.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2239906/577b7395-ecda-4357-b1af-f5f59290681c.jpg",
    specs: { "Activos": "Vitamina C + Vitamina E", "Volumen": "30 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco Gotero 30ml", "Dúo Glow (Lleva 2 con Descuento)"] }],
    variations: [
      { regular_price: "59000", sku: "SRM-VITC-30", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco Gotero 30ml" }] },
      { regular_price: "99000", sku: "SRM-VITC-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Glow (Lleva 2 con Descuento)" }] }
    ]
  },
  {
    idInterno: "033",
    name: "Suero Reparador Nocturno Retinol Puro Antienvejecimiento",
    slug: "suero-reparador-retinol-antienvejecimiento",
    categorySlug: "facial",
    subcategory: "Tratamientos Antiedad y Regeneradores",
    dropiId: "2117094",
    supplierId: "43728",
    costoDropi: 13000,
    pvpSugerido: 49000,
    stock: 114,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Retinol bioactivo encapsulado con extracto calmante de centella asiática. Acelera el recambio celular nocturno, suaviza arrugas y mejora la textura.",
    description: "<h3>Renovación Celular Nocturna Intensiva</h3><p>Fórmula de alta tolerancia que reduce la apariencia de líneas finas sin causar la típica irritación de los retinoides clásicos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2117094/17745604251773957297descarga%20(85).jpg",
    specs: { "Activo": "Retinol encapsulado + Centella", "Volumen": "40 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 40ml", "Kit Dúo Renovación Nocturna"] }],
    variations: [
      { regular_price: "49000", sku: "SRM-RET-40ML", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Frasco 40ml" }] },
      { regular_price: "85000", sku: "SRM-RET-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Kit Dúo Renovación Nocturna" }] }
    ]
  },
  {
    idInterno: "034",
    name: "Suero Niacinamida 10% + Zinc Regulador de Sebo y Poros",
    slug: "suero-niacinamida-10-zinc-seborregulador",
    categorySlug: "facial",
    subcategory: "Sueros Dermo-Activos",
    dropiId: "2230851",
    supplierId: "839",
    costoDropi: 15000,
    pvpSugerido: 52000,
    stock: 996,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Concentración dermoactiva de Niacinamida (Vitamina B3) al 10% y Zinc PCA al 1%. Disminuye el brillo facial, descongestiona poros y calma brotes activos.",
    description: "<h3>Equilibrio Cutáneo y Minimización de Poros</h3><p>Regula la secreción sebácea y fortalece la barrera de ceramidas de la piel para un cutis mate y uniforme.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2230851/1fd82e4e-a296-4983-858a-9ca4fe2eea06.jpg",
    specs: { "Activos": "Niacinamida 10% + Zinc 1%", "Volumen": "30 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco Gotero 30ml", "Pack x2 Control Grasa"] }],
    variations: [
      { regular_price: "52000", sku: "SRM-NIAC-30", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Frasco Gotero 30ml" }] },
      { regular_price: "89000", sku: "SRM-NIAC-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Pack x2 Control Grasa" }] }
    ]
  },
  {
    idInterno: "035",
    name: "Tónico Exfoliante con Ácido Glicólico AHA al 7%",
    slug: "tonico-exfoliante-acido-glicolico-7",
    categorySlug: "facial",
    subcategory: "Tónicos y Brumas Faciales",
    dropiId: "2151199",
    supplierId: "81817",
    costoDropi: 13500,
    pvpSugerido: 49000,
    stock: 4993,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Tónico exfoliante suave a base de alfa-hidroxiácidos (AHA). Elimina células muertas acumuladas, ilumina la piel opaca y desvanece manchas superficiales.",
    description: "<h3>Exfoliación Química Superficial Diaria</h3><p>Promueve la claridad dérmica y una textura sedosa sin gránulos abrasivos mecánicos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2151199/1778785777img_686c50ca842646.32748619.png",
    specs: { "Concentración": "Ácido Glicólico 7%", "Volumen": "100 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Botella 100ml", "Dúo Tratamiento Renovador"] }],
    variations: [
      { regular_price: "49000", sku: "TON-GLIC-100", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Botella 100ml" }] },
      { regular_price: "85000", sku: "TON-GLIC-DUO", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Dúo Tratamiento Renovador" }] }
    ]
  },
  {
    idInterno: "036",
    name: "Suero Purificante Ácido Salicílico BHA 2% Antiacné",
    slug: "suero-acido-salicilico-bha-2-antiacne",
    categorySlug: "facial",
    subcategory: "Tratamientos Antiacné y Control Grasa",
    dropiId: "1749325",
    supplierId: "120432",
    costoDropi: 19200,
    pvpSugerido: 59000,
    stock: 259,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Solución dermo-activa lipofílica con Ácido Salicílico al 2%. Penetra dentro del poro disolviendo tapones de queratina, grasa y puntos negros.",
    description: "<h3>Desincrustación y Alivio Antiinflamatorio</h3><p>Excelente para tratar acné comedónico y pápulas inflamatorias reduciendo el enrojecimiento local.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1749325/1744155802434729364_795930369247688_3042056561947113922_n.jpg",
    specs: { "Activo": "BHA Ácido Salicílico 2%", "Volumen": "30 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 30ml", "Dúo SOS Antiacné"] }],
    variations: [
      { regular_price: "59000", sku: "SRM-SALI-30", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Frasco 30ml" }] },
      { regular_price: "99000", sku: "SRM-SALI-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Presentación", option: "Dúo SOS Antiacné" }] }
    ]
  },
  {
    idInterno: "037",
    name: "Protector Solar Toque Seco Colágeno FPS 60 UVA/UVB",
    slug: "protector-solar-toque-seco-colageno-fps60",
    categorySlug: "facial",
    subcategory: "Protección Solar y Filtros UV",
    dropiId: "1849339",
    supplierId: "144205",
    costoDropi: 10000,
    pvpSugerido: 45000,
    stock: 145,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Fórmula ligera no comedogénica con colágeno hidrolizado y filtros de amplio espectro FPS 60. Rápida absorción con acabado mate sin efecto blanco.",
    description: "<h3>Alta Protección Diaria y Firmeza</h3><p>Previene el fotoenvejecimiento prematuro, quemaduras solares y manchas causadas por la radiación UVA/UVB.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1849339/1779479927descarga%20-%202026-05-22T145207.444.jpg",
    specs: { "Protección": "FPS 60 Amplio Espectro", "Acabado": "Toque seco mate", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tubo 60g", "Pack x2 Protección Diaria"] }],
    variations: [
      { regular_price: "45000", sku: "SUN-COL-60G", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Tubo 60g" }] },
      { regular_price: "79000", sku: "SUN-COL-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Pack x2 Protección Diaria" }] }
    ]
  },
  {
    idInterno: "038",
    name: "Mascarilla Facial Bio-Colágeno Hidrogel Profundo (Pack x5)",
    slug: "mascarilla-facial-biocolageno-hidrogel-pack5",
    categorySlug: "facial",
    subcategory: "Mascarillas y Velo de Colágeno",
    dropiId: "2259141",
    supplierId: "76117",
    costoDropi: 10500,
    pvpSugerido: 45000,
    stock: 112,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Láminas de hidrogel bioactivo de colágeno profundo que se vuelven transparentes a medida que la piel absorbe los nutrientes. Efecto tensor y repulpante.",
    description: "<h3>Terapia Oclusiva de Hidratación Máxima</h3><p>Tratamiento intensivo para eventos o uso semanal que restaura la barrera dérmica y alisa arrugas de deshidratación.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2259141/59eed7fb-2493-4eb0-82b2-bc5c3ec9c4da.jpg",
    specs: { "Contenido": "5 Láminas individuales", "Formato": "Hidrogel térmico transdérmico", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Pack", position: 0, visible: true, variation: true, options: ["Caja x5 Mascarillas", "Tratamiento Mensual (Caja x10)"] }],
    variations: [
      { regular_price: "45000", sku: "MSK-BIOCOL-5", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Pack", option: "Caja x5 Mascarillas" }] },
      { regular_price: "79000", sku: "MSK-BIOCOL-10", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Pack", option: "Tratamiento Mensual (Caja x10)" }] }
    ]
  },
  {
    idInterno: "039",
    name: "Contorno de Ojos Roll-On Drenante con Ácido Hialurónico",
    slug: "contorno-ojos-roll-on-acido-hialuronico",
    categorySlug: "facial",
    subcategory: "Cuidado de Ojos y Ojeras",
    dropiId: "2207878",
    supplierId: "899060",
    costoDropi: 8000,
    pvpSugerido: 39000,
    stock: 1700,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Aplicador con triple esfera metálica que proporciona un masaje frío descongestivo. Reduce bolsas matutinas, atenúa ojeras oscuras e hidrata la zona periocular.",
    description: "<h3>Descongestión y Mirada Descansada</h3><p>La combinación del masaje frío con el suero descongestionante de hialurónico drena el líquido acumulado bajo los párpados.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2207878/1784644533Gemini_Generated_Image_ifb15bifb15bifb1.png",
    specs: { "Cabezal": "Roll-on metálico refrescante", "Volumen": "15 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Roll-On Individual", "Dúo Mirada Radiante (2 Roll-On)"] }],
    variations: [
      { regular_price: "39000", sku: "EYE-ROLL-15", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Roll-On Individual" }] },
      { regular_price: "69000", sku: "EYE-ROLL-DUO", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Dúo Mirada Radiante (2 Roll-On)" }] }
    ]
  },
  {
    idInterno: "040",
    name: "Espuma Limpiadora Facial con Aminoácidos y Cepillo 200ml",
    slug: "espuma-limpiadora-aminoacidos-cepillo-200ml",
    categorySlug: "facial",
    subcategory: "Limpieza y Desmaquillantes",
    dropiId: "1637125",
    supplierId: "345873",
    costoDropi: 16000,
    pvpSugerido: 49000,
    stock: 496,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Espuma dermocosmética con surfactantes suaves de aminoácidos y cabezal de silicona integrado. Limpia impurezas profundas sin agredir el manto hidrolipídico.",
    description: "<h3>Higiene Facial Respetuosa y pH Equilibrado</h3><p>Las microburbujas densas remueven maquillaje y contaminantes ambientales dejando la piel suave y sin sensación de tirantez.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1637125/1737642858ESPUMA%20FACIAL.png",
    specs: { "Volumen": "200 ml", "Cabezal": "Cepillo de silicona incluido", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 200ml con Cepillo", "Dúo Limpieza Diaria"] }],
    variations: [
      { regular_price: "49000", sku: "FOAM-CLN-200", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco 200ml con Cepillo" }] },
      { regular_price: "85000", sku: "FOAM-CLN-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Limpieza Diaria" }] }
    ]
  },
  {
    idInterno: "041",
    name: "Suero Facial Regenerador de Centella Asiática (Cica) 40ml",
    slug: "suero-facial-centella-asiatica-cica-40ml",
    categorySlug: "facial",
    subcategory: "Sueros Dermo-Activos",
    dropiId: "2183092",
    supplierId: "43339",
    costoDropi: 19970,
    pvpSugerido: 59000,
    stock: 4000,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Extracto puro de Centella Asiática y Madecassoside. Calma irritaciones, alivia rojeces, repara la barrera cutánea dañada y estimula la cicatrización dérmica.",
    description: "<h3>Alivio Calmante para Pieles Sensibles o Reactivas</h3><p>Ideal para pieles sometidas a peelings químicos, exposición solar intensa o tratamientos dermatológicos activos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2183092/e7c80ce5-cf6b-4b92-b07a-09d0f7a0df5f.png",
    specs: { "Activo": "Extracto de Centella Asiática", "Volumen": "40 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 40ml", "Dúo Reparación Dérmica"] }],
    variations: [
      { regular_price: "59000", sku: "SRM-CICA-40", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Frasco 40ml" }] },
      { regular_price: "99000", sku: "SRM-CICA-DUO", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Dúo Reparación Dérmica" }] }
    ]
  },
  {
    idInterno: "042",
    name: "Crema Reafirmante Antiarrugas con Caviar y Péptidos Tensores",
    slug: "crema-antiarrugas-caviar-peptidos-tensores",
    categorySlug: "facial",
    subcategory: "Tratamientos Antiedad y Regeneradores",
    dropiId: "2037092",
    supplierId: "45331",
    costoDropi: 17500,
    pvpSugerido: 59000,
    stock: 142,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Nutrición celular enriquecida con extracto de caviar negro y hexapéptidos tensores. Combate la pérdida de densidad dérmica y mejora la firmeza facial.",
    description: "<h3>Reestructuración y Nutrición Profunda</h3><p>Aporta oligoelementos esenciales, fósforo y ácidos grasos que reparan la matriz extracelular madura.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2037092/1773341604H18dc61af4a1a4e3eb5933bf7dc7d15c6u.jpg",
    specs: { "Activos": "Extracto Caviar + Péptidos", "Gramaje": "50 g", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tarro 50g", "Dúo Reafirmante Antiedad"] }],
    variations: [
      { regular_price: "59000", sku: "CRM-CAV-50G", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Tarro 50g" }] },
      { regular_price: "99000", sku: "CRM-CAV-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Reafirmante Antiedad" }] }
    ]
  },
  {
    idInterno: "043",
    name: "Gel Limpiador Facial Purificante con Extracto de Baba de Caracol",
    slug: "limpiador-facial-baba-caracol-purificante",
    categorySlug: "facial",
    subcategory: "Limpieza y Desmaquillantes",
    dropiId: "2187531",
    supplierId: "43339",
    costoDropi: 8970,
    pvpSugerido: 39000,
    stock: 444,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Limpieza dermo-regeneradora formulada con mucina de caracol filtrada. Disuelve toxinas mientras estimula la alantoína natural para reparar cicatrices.",
    description: "<h3>Limpieza Suave y Regeneración Cutánea</h3><p>Ideal para pieles que necesitan recuperar uniformidad sin resecar el cutis tras el lavado.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2187531/1782501294limpiador%20snail%201.jpg",
    specs: { "Activo": "Mucina de caracol filtrada", "Volumen": "100 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tubo 100ml", "Dúo Limpieza Regeneradora"] }],
    variations: [
      { regular_price: "39000", sku: "CLN-SNAIL-100", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Tubo 100ml" }] },
      { regular_price: "69000", sku: "CLN-SNAIL-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Limpieza Regeneradora" }] }
    ]
  },
  {
    idInterno: "044",
    name: "Tónico Astringente Facial de Caléndula y Manzanilla",
    slug: "tonico-facial-calendula-manzanilla-astringente",
    categorySlug: "facial",
    subcategory: "Tónicos y Brumas Faciales",
    dropiId: "1726680",
    supplierId: "440677",
    costoDropi: 34000,
    pvpSugerido: 79000,
    stock: 162,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Tónico herbal equilibrante con pétalos de caléndula infusionados. Calma rojeces, equilibra el pH dérmico tras la limpieza y cierra poros suavemente.",
    description: "<h3>Armonización Dérmica Post-Limpieza</h3><p>Propiedades antiinflamatorias naturales que refrescan y reconfortan pieles sensibles y mixtas.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1726680/1742493096WhatsApp%20Image%202025-03-17%20at%206.22.26%20PM-4.jpeg",
    specs: { "Ingredientes": "Infusión de Caléndula + Manzanilla", "Volumen": "150 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Botella 150ml", "Pack x2 Tónico Herbal"] }],
    variations: [
      { regular_price: "79000", sku: "TON-CALEN-150", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Botella 150ml" }] },
      { regular_price: "129000", sku: "TON-CALEN-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Pack x2 Tónico Herbal" }] }
    ]
  },
  {
    idInterno: "045",
    name: "Desmaquillante Micelar Bifásico Purificante 150ml",
    slug: "desmaquillante-micelar-bifasico-purificante-150ml",
    categorySlug: "facial",
    subcategory: "Limpieza y Desmaquillantes",
    dropiId: "915481",
    supplierId: "184977",
    costoDropi: 11888,
    pvpSugerido: 39000,
    stock: 1998,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Fórmula bifásica de dos fases (oleosa y acuosa micelar) que retira maquillaje a prueba de agua (waterproof) en ojos y labios sin frotar ni dejar película grasa.",
    description: "<h3>Desmaquillado Rápido sin Residuos Grasos</h3><p>Las micelas magnéticas atrapan pigmentos y filtros solares insolubles respetando la piel sensible.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/915481/1780331693AGUA%20MICELAR.png",
    specs: { "Fórmula": "Bifásica agua/aceite micelar", "Volumen": "150 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Botella 150ml", "Pack Dúo Desmaquillante"] }],
    variations: [
      { regular_price: "39000", sku: "BIF-DESM-150", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Botella 150ml" }] },
      { regular_price: "69000", sku: "BIF-DESM-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Pack Dúo Desmaquillante" }] }
    ]
  },
  {
    idInterno: "046",
    name: "Agua de Rosas Orgánica Tonificante y Equilibrante 250ml",
    slug: "agua-de-rosas-organica-tonificante-250ml",
    categorySlug: "facial",
    subcategory: "Tónicos y Brumas Faciales",
    dropiId: "915469",
    supplierId: "184977",
    costoDropi: 6240,
    pvpSugerido: 29000,
    stock: 5624,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Hidrolato puro de pétalos de rosa destilados al vapor. Hidrata, tonifica y fija el maquillaje con una bruma ultra fresca 100% natural libre de alcohol.",
    description: "<h3>Frescura Botánica Diaria</h3><p>Reconforta el rostro tras el afeitado, el sol o la limpieza profunda, reequilibrando el manto hidrolipídico.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/915469/1780343952AGUA%20DE%20ROSAS.png",
    specs: { "Volumen": "250 ml", "Ingredientes": "Destilado de Rosas 100% puro", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Envase 250ml con Spray", "Dúo Familiar (2 Envases 250ml)"] }],
    variations: [
      { regular_price: "29000", sku: "ROSE-WTR-250", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Envase 250ml con Spray" }] },
      { regular_price: "49000", sku: "ROSE-WTR-DUO", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Dúo Familiar (2 Envases 250ml)" }] }
    ]
  },
  {
    idInterno: "047",
    name: "Gel Exfoliante Dermo-Activo con Microesferas y Ácido Hialurónico",
    slug: "gel-exfoliante-dermoactivo-acido-hialuronico",
    categorySlug: "facial",
    subcategory: "Exfoliantes y Peeling Químico",
    dropiId: "915482",
    supplierId: "184977",
    costoDropi: 15600,
    pvpSugerido: 49000,
    stock: 2155,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Gommage exfoliante en gel que disuelve células muertas mediante fricción suave sin dañar la barrera cutánea. Deja la piel lisa y lista para el suero.",
    description: "<h3>Descamación Controlada y Piel Nueva</h3><p>Elimina impurezas acumuladas en los poros mejorando instantáneamente la textura y absorción de activos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/915482/1780331833GEL%20EXFOLIANTE.png",
    specs: { "Textura": "Gel exfoliante enzimático", "Volumen": "100 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tubo 100ml", "Dúo Renovador Exfoliante"] }],
    variations: [
      { regular_price: "49000", sku: "EXF-GEL-100", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Tubo 100ml" }] },
      { regular_price: "85000", sku: "EXF-GEL-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Renovador Exfoliante" }] }
    ]
  },
  {
    idInterno: "048",
    name: "Crema Hidratante Reafirmante con Retinol y Colágeno 120g",
    slug: "crema-hidratante-retinol-colageno-120g",
    categorySlug: "facial",
    subcategory: "Tratamientos Antiedad y Regeneradores",
    dropiId: "2207193",
    supplierId: "596479",
    costoDropi: 10000,
    pvpSugerido: 45000,
    stock: 9909,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Crema de alta riqueza nutritiva con retinol antiedad, colágeno hidrolizado y ácido hialurónico. Ideal para rostro, cuello y escote en la rutina nocturna.",
    description: "<h3>Nutrición y Efecto Plump Nocturno</h3><p>Restaura la hidratación profunda y favorece la flexibilidad muscular combatiendo la flacidez del óvalo facial.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2207193/1784387223Captura%20de%20pantalla%202026-07-18%20100124.png",
    specs: { "Gramaje": "120 g", "Uso": "Noche (Rostro, Cuello y Escote)", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tarro 120g", "Pack Dúo Antiedad (2 Tarros)"] }],
    variations: [
      { regular_price: "45000", sku: "RET-COL-120G", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Tarro 120g" }] },
      { regular_price: "79000", sku: "RET-COL-DUO", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Pack Dúo Antiedad (2 Tarros)" }] }
    ]
  },
  {
    idInterno: "049",
    name: "Crema Aclarante Antimanchas con Vitamina C y Niacinamida",
    slug: "crema-aclarante-vitamina-c-niacinamida",
    categorySlug: "facial",
    subcategory: "Tratamientos Aclarantes y Despigmentantes",
    dropiId: "1224273",
    supplierId: "29151",
    costoDropi: 16100,
    pvpSugerido: 49000,
    stock: 498,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Complejo despigmentante sinérgico que atenúa manchas causadas por el sol, acné y melasma. Unifica el tono y aporta luminosidad.",
    description: "<h3>Corrección Cromática Dérmica</h3><p>Inhibe la transferencia de melanina hacia los queratinocitos para un tono claro y libre de sombras.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1224273/1726845770WhatsApp%20Image%202024-08-27%20at%205.18.44%20PM%20(2).jpeg",
    specs: { "Gramaje": "50 g", "Activos": "Vitamina C + Niacinamida", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tarro 50g", "Dúo Antimanchas"] }],
    variations: [
      { regular_price: "49000", sku: "CRM-ACL-50G", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Tarro 50g" }] },
      { regular_price: "85000", sku: "CRM-ACL-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Antimanchas" }] }
    ]
  },
  {
    idInterno: "050",
    name: "Gel Hidratante Ultrafresco con Ácido Hialurónico Bioaqua",
    slug: "gel-hidratante-acido-hialuronico-bioaqua",
    categorySlug: "facial",
    subcategory: "Hidratantes y Nutrición Celular",
    dropiId: "2150711",
    supplierId: "899060",
    costoDropi: 7000,
    pvpSugerido: 35000,
    stock: 190,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Gel acuoso de absorción ultra rápida sin sensación pesada ni grasa. Ideal para hidratar pieles mixtas a grasas en climas cálidos.",
    description: "<h3>Hidratación Oil-Free Inmediata</h3><p>Calma la piel deshidratada manteniendo los poros libres de congestión durante todo el día.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2150711/1778716551gel%20acido%20h%203.PNG",
    specs: { "Volumen": "50 g", "Textura": "Gel acuoso Oil-Free", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Pote 50g", "Pack Dúo Hidratación Fresca"] }],
    variations: [
      { regular_price: "35000", sku: "GEL-HA-50G", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Pote 50g" }] },
      { regular_price: "59000", sku: "GEL-HA-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Pack Dúo Hidratación Fresca" }] }
    ]
  },
  {
    idInterno: "051",
    name: "Crema Contorno de Ojos Despigmentante Antimanchas con Péptidos",
    slug: "crema-contorno-ojos-despigmentante-peptidos",
    categorySlug: "facial",
    subcategory: "Cuidado de Ojos y Ojeras",
    dropiId: "2150696",
    supplierId: "899060",
    costoDropi: 9000,
    pvpSugerido: 39000,
    stock: 495,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Crema nutritiva para el contorno periocular con cafeína y péptidos. Disminuye la pigmentación marrón de las ojeras y fortalece los capilares finos.",
    description: "<h3>Aclarado Periocular Focalizado</h3><p>Corrige la hiperpigmentación periorbital restaurando una mirada descansada y luminosa.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2150696/1778715306contorno%20antimanchas.PNG",
    specs: { "Volumen": "20 g", "Zona": "Contorno de ojos", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tubo 20g", "Dúo Contorno Periocular"] }],
    variations: [
      { regular_price: "39000", sku: "EYE-ANTIM-20", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Tubo 20g" }] },
      { regular_price: "69000", sku: "EYE-ANTIM-DUO", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Dúo Contorno Periocular" }] }
    ]
  },
  {
    idInterno: "052",
    name: "Contorno de Ojos Reafirmante con Centella Asiática Bioaqua",
    slug: "contorno-ojos-centella-asiatica-bioaqua",
    categorySlug: "facial",
    subcategory: "Cuidado de Ojos y Ojeras",
    dropiId: "1183762",
    supplierId: "23739",
    costoDropi: 9000,
    pvpSugerido: 39000,
    stock: 988,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Tratamiento calmante y desinflamatorio para el contorno de ojos con extracto de Centella Asiática. Alivia párpados hinchados y patas de gallo.",
    description: "<h3>Calmante Periocular y Drenaje Linfático</h3><p>Textura ultra fluida que repara la fina piel del contorno sin provocar miliums ni saturar los poros.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1183762/1726065484WhatsApp%20Image%202024-09-11%20at%209.19.22%20AM%20(1).jpeg",
    specs: { "Activo": "Centella Asiática", "Volumen": "20 g", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tubo 20g", "Dúo Cuidado Ojos Cica"] }],
    variations: [
      { regular_price: "39000", sku: "EYE-CICA-20", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Tubo 20g" }] },
      { regular_price: "69000", sku: "EYE-CICA-DUO", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Dúo Cuidado Ojos Cica" }] }
    ]
  },
  {
    idInterno: "053",
    name: "Gel Concentrado Anti-Imperfecciones Ácido Salicílico Bioaqua",
    slug: "gel-anti-imperfecciones-acido-salicilico-bioaqua",
    categorySlug: "facial",
    subcategory: "Tratamientos Antiacné y Control Grasa",
    dropiId: "217021",
    supplierId: "39425",
    costoDropi: 15000,
    pvpSugerido: 45000,
    stock: 1874,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Gel secante focalizado para brotes activos y espinillas. Desinflama la lesión en 24 horas y previene la proliferación bacteriana sin descamar la piel sana.",
    description: "<h3>Acción Secante y Descongestiva Rápida</h3><p>Fórmula no comedogénica que se aplica directamente sobre el grano para acelerar su reabsorción.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/217021/17023008701702300870mascarilla-de-acido-salicilico-cosmeticos-y-skin-care-1058984419%20(1).jpg",
    specs: { "Gramaje": "30 g", "Aplicación": "Focalizada sobre el grano", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tubo Gel 30g", "Pack x2 Gel Secante"] }],
    variations: [
      { regular_price: "45000", sku: "GEL-ACNE-30G", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Tubo Gel 30g" }] },
      { regular_price: "79000", sku: "GEL-ACNE-DUO", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Pack x2 Gel Secante" }] }
    ]
  },
  {
    idInterno: "054",
    name: "Suero Facial Glow Nutritivo con Própolis y Niacinamida 30ml",
    slug: "suero-facial-glow-propolis-niacinamida",
    categorySlug: "facial",
    subcategory: "Sueros Dermo-Activos",
    dropiId: "2176538",
    supplierId: "19662",
    costoDropi: 15000,
    pvpSugerido: 52000,
    stock: 500,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Tratamiento glow inspirado en el K-Beauty con extracto de propóleo al 60% y niacinamida al 2%. Efecto piel de cristal (glass skin) antibacteriano.",
    description: "<h3>Luminosidad Glass Skin y Defensa Antibacteriana</h3><p>Nutre profundamente sin tapar poros mientras combate brotes recurrentes y rojeces.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2176538/1781370509serun-japo-2.png",
    specs: { "Activos": "Extracto Própolis 60% + Niacinamida 2%", "Volumen": "30 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 30ml Gotero", "Dúo Glass Skin"] }],
    variations: [
      { regular_price: "52000", sku: "SRM-PROP-30", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco 30ml Gotero" }] },
      { regular_price: "89000", sku: "SRM-PROP-DUO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Presentación", option: "Dúo Glass Skin" }] }
    ]
  },
  {
    idInterno: "055",
    name: "Bloqueador Solar Facial Mineral con Filtros Físicos SPF 50+",
    slug: "bloqueador-solar-facial-mineral-spf50",
    categorySlug: "facial",
    subcategory: "Protección Solar y Filtros UV",
    dropiId: "2176643",
    supplierId: "383592",
    costoDropi: 17550,
    pvpSugerido: 55000,
    stock: 3638,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Protector solar natural ayurvédico con óxido de zinc y dióxido de titanio. Refleja la radiación UV sin químicos fotosensibilizantes, seguro para pieles atópicas.",
    description: "<h3>Filtro Físico Mineral de Máxima Tolerancia</h3><p>Barrera reflectante segura contra los rayos solares y la luz azul de pantallas de dispositivos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2176643/1781377927WhatsApp%20Image%202026-06-13%20at%202.08.06%20PM.jpeg",
    specs: { "Filtro": "Mineral Físico", "Protección": "SPF 50+", "Volumen": "60 ml", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Tubo 60ml", "Dúo Protección Mineral"] }],
    variations: [
      { regular_price: "55000", sku: "SUN-MIN-60ML", manage_stock: true, stock_quantity: 50, attributes: [{ name: "Presentación", option: "Tubo 60ml" }] },
      { regular_price: "95000", sku: "SUN-MIN-DUO", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Presentación", option: "Dúo Protección Mineral" }] }
    ]
  },
  {
    idInterno: "056",
    name: "Kit Completo Dermo-Regenerador Vitamina C Bioaqua (5 Pasos)",
    slug: "kit-facial-vitamina-c-bioaqua-5pasos",
    categorySlug: "facial",
    subcategory: "Kits y Rutinas Completas",
    dropiId: "2227720",
    supplierId: "959749",
    costoDropi: 33000,
    pvpSugerido: 89000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription: "Rutina completa antimanchas y antioxidante: Limpiador, Tónico, Suero Iluminador, Crema de Ojos y Emulsión Hidratante en un solo paquete clínico.",
    description: "<h3>Rutina Integral Iluminadora en 5 Pasos</h3><p>Sinergia antioxidante que aclara manchas, estimula colágeno y previene el estrés oxidativo diario.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2227720/2e1b1e04-c463-4f09-b70b-4a68d492307c.jpeg",
    specs: { "Piezas": "5 Productos de rutina", "Tratamiento": "Antioxidante Antimanchas", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Kit", position: 0, visible: true, variation: true, options: ["Kit Estándar 5 Productos", "Kit Pro (+ Mascarilla de Colágeno Gratis)"] }],
    variations: [
      { regular_price: "89000", sku: "KIT-VITC-5P", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Kit", option: "Kit Estándar 5 Productos" }] },
      { regular_price: "109000", sku: "KIT-VITC-PRO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Kit", option: "Kit Pro (+ Mascarilla de Colágeno Gratis)" }] }
    ]
  },
  {
    idInterno: "057",
    name: "Kit Facial Purificante y Antiacné con Ácido Salicílico (5 Pasos)",
    slug: "kit-facial-antiacne-acido-salicilico-5pasos",
    categorySlug: "facial",
    subcategory: "Kits y Rutinas Completas",
    dropiId: "1174240",
    supplierId: "23739",
    costoDropi: 26000,
    pvpSugerido: 79000,
    stock: 169,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Tratamiento intensivo para pieles con tendencia acneica: Limpiador profundo, Suero BHA, Tónico desincrustante, Gel localizado y Crema calmante.",
    description: "<h3>Control Total del Acné y Puntos Negros</h3><p>Protocolo balanceado para erradicar imperfecciones y exceso de sebo sin resecar el rostro.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1174240/1758034497WhatsApp%20Image%202025-09-15%20at%204.14.40%20PM.jpeg",
    specs: { "Piezas": "5 Productos en caja de regalo", "Enfoque": "Antiacné y Poros", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Kit", position: 0, visible: true, variation: true, options: ["Kit Antiacné 5 Pasos", "Kit Antiacné Pro (+ Parches Hidrocoloides)"] }],
    variations: [
      { regular_price: "79000", sku: "KIT-SALI-5P", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Kit", option: "Kit Antiacné 5 Pasos" }] },
      { regular_price: "99000", sku: "KIT-SALI-PRO", manage_stock: true, stock_quantity: 35, attributes: [{ name: "Kit", option: "Kit Antiacné Pro (+ Parches Hidrocoloides)" }] }
    ]
  },
  {
    idInterno: "058",
    name: "Kit Regenerador Antienvejecimiento Retinol Bioaqua (4 Pasos)",
    slug: "kit-facial-retinol-antienvejecimiento-4pasos",
    categorySlug: "facial",
    subcategory: "Kits y Rutinas Completas",
    dropiId: "2230819",
    supplierId: "98",
    costoDropi: 38000,
    pvpSugerido: 99000,
    stock: 195,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Caja de tratamiento nocturno intensivo: Limpiador regenerador, Tónico suavizante, Suero concentrado de Retinol y Crema selladora antiedad.",
    description: "<h3>Arquitectura de Renovación Antiedad</h3><p>Alisa arrugas estáticas y dinámicas reactivando los fibroblastos durante el descanso nocturno.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2230819/cd58a10e-c243-428d-a931-5f95353a062b.png",
    specs: { "Piezas": "4 Productos", "Uso": "Nocturno Antiedad", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Kit", position: 0, visible: true, variation: true, options: ["Kit Retinol 4 Pasos", "Kit Retinol Dúo (2 Cajas con 25% OFF)"] }],
    variations: [
      { regular_price: "99000", sku: "KIT-RET-4P", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Kit", option: "Kit Retinol 4 Pasos" }] },
      { regular_price: "169000", sku: "KIT-RET-DUO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Kit", option: "Kit Retinol Dúo (2 Cajas con 25% OFF)" }] }
    ]
  },
  {
    idInterno: "059",
    name: "Kit Restaurador de Barrera Cutánea Centella Asiática (4 Pasos)",
    slug: "kit-restaurador-centella-asiatica-4pasos",
    categorySlug: "facial",
    subcategory: "Kits y Rutinas Completas",
    dropiId: "2232979",
    supplierId: "98",
    costoDropi: 38000,
    pvpSugerido: 99000,
    stock: 187,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Terapia reparadora hipoalergénica con Cica: Limpiador suave, Tónico calmante, Suero regenerador y Emulsión reparadora de barrera cutánea.",
    description: "<h3>Reconstrucción del Manto Cutáneo Sensible</h3><p>Reduce la reactividad dérmica, frena la descamación y alivia la tirantez de pieles frágiles.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2232979/1cdab36b-e96d-4625-bc1f-e7e9a6a6ce35.png",
    specs: { "Piezas": "4 Productos Cica", "Piel": "Sensible, rosácea y reactiva", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Kit", position: 0, visible: true, variation: true, options: ["Kit Cica 4 Pasos", "Kit Cica Premium (+ Espátula Limpiadora)"] }],
    variations: [
      { regular_price: "99000", sku: "KIT-CICA-4P", manage_stock: true, stock_quantity: 40, attributes: [{ name: "Kit", option: "Kit Cica 4 Pasos" }] },
      { regular_price: "139000", sku: "KIT-CICA-PRO", manage_stock: true, stock_quantity: 25, attributes: [{ name: "Kit", option: "Kit Cica Premium (+ Espátula Limpiadora)" }] }
    ]
  },
  {
    idInterno: "060",
    name: "Exfoliante Dermo-Pulidor Facial con Extracto Botánico 190ml",
    slug: "exfoliante-dermo-pulidor-facial-botanico-190ml",
    categorySlug: "facial",
    subcategory: "Exfoliantes y Peeling Químico",
    dropiId: "970396",
    supplierId: "231816",
    costoDropi: 35000,
    pvpSugerido: 79000,
    stock: 100,
    type: "variable",
    status: "publish",
    featured: false,
    shortDescription: "Exfoliante suave con microcristales minerales biocompatibles y extractos botánicos. Desincrusta impurezas profundas y pule la textura sin rayar la epidermis.",
    description: "<h3>Microdermoabrasión Botánica en Casa</h3><p>Elimina el estrato córneo engrosado y prepara la piel para la absorción de principios activos médicos.</p>",
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/970396/1720805911exffoliante.png",
    specs: { "Volumen": "190 ml", "Tipo": "Microdermoabrasión botánica", "Modalidad": "Contra Entrega" },
    attributes: [{ name: "Presentación", position: 0, visible: true, variation: true, options: ["Frasco 190ml", "Dúo Spa Exfoliante"] }],
    variations: [
      { regular_price: "79000", sku: "EXF-BOT-190", manage_stock: true, stock_quantity: 45, attributes: [{ name: "Presentación", option: "Frasco 190ml" }] },
      { regular_price: "135000", sku: "EXF-BOT-DUO", manage_stock: true, stock_quantity: 30, attributes: [{ name: "Presentación", option: "Dúo Spa Exfoliante" }] }
    ]
  }
];

async function syncFacial() {
  console.log("=== SINCRONIZANDO 30 PRODUCTOS DE CUIDADO FACIAL EN WOOCOMMERCE ===");
  const cat = await wcRequest("/products/categories?slug=facial");
  if (!cat || cat.length === 0) throw new Error("Categoría facial no existe en WC");
  const catId = cat[0].id;

  const results = [];

  for (const p of FACIAL_PRODUCTS_30) {
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

  console.log(`\n¡Sincronización Cuidado Facial completada! Total: ${results.length}`);
}

syncFacial().catch(console.error);
