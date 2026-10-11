/**
 * Script de Ingesta de Insumos Médicos & Desechables hacia WooCommerce REST API
 * MesoLab Pro - Categoría 65
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

export const INSUMOS_PRODUCTS = [
  {
    idInterno: "151",
    name: "Mascarillas KN95 de Alta Protección x 30 Uds",
    slug: "mascarillas-kn95-alta-proteccion-30-uds",
    categorySlug: "insumos",
    categoryId: 65,
    subcategory: "Bioseguridad & Guantes",
    dropiId: "2119187",
    supplierId: "Compra Facil Colombia",
    sku: "KN95-30UNI",
    costoDropi: 52500,
    regularPrice: "119900",
    salePrice: "99900",
    stock: 1200,
    type: "simple",
    status: "publish",
    featured: true,
    shortDescription: "Mascarillas KN95 con filtración multicapa >95%. Paquete de 30 unidades empacadas individualmente para máxima bioseguridad clínica. Pago Contra Entrega.",
    description: "<h3>Mascarillas KN95 de Alta Protección Profesional</h3><p>Diseñadas para brindar un ajuste anatómico seguro y cómodo en el rostro. Este paquete incluye <strong>30 unidades empacadas individualmente</strong>, ideales para protocolos de bioseguridad en cabina estética, consultorio médico y uso cotidiano.</p><h4>Características Destacadas:</h4><ul><li><strong>Sistema de filtración multicapa:</strong> Bloquea eficazmente partículas, polvo, microgotas y aerosoles en suspensión.</li><li><strong>Empaque individual higiénico:</strong> Conserva la esterilidad de cada mascarilla hasta el momento de uso.</li><li><strong>Ajuste anatómico hermético:</strong> Clip nasal adaptable y elásticos suaves que evitan marcas en la piel y filtraciones de aire.</li><li><strong>Transpirabilidad óptima:</strong> Estructura cóncava que permite respirar con comodidad durante jornadas prolongadas.</li></ul>",
    images: [
      { src: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2119187/1774824084chica%20tapabocas.jpeg", alt: "Mascarillas KN95 uso clínico" },
      { src: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2119187/177482408400004.png", alt: "Empaque individual Mascarillas KN95" },
      { src: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2119187/1774824084ChatGPT%20Image%2029%20mar%202026,%2017_24_27.png", alt: "Detalle filtración KN95" }
    ],
    specs: {
      "Presentación": "Caja / Paquete x 30 Uds",
      "Empaque": "Individual sellado",
      "Filtración": "KN95 (BFE ≥ 95%)",
      "Capas": "5 capas de filtración protectora",
      "Garantía": "Calidad certificada Dropi",
      "Despacho": "Bodega Bogotá / La Ceja (2-3 días hábiles)"
    }
  },
  {
    idInterno: "152",
    name: "Tapabocas Quirúrgico Termosellado Empaque Individual x 50 Uds",
    slug: "tapabocas-quirurgico-empaque-individual-50-uds",
    categorySlug: "insumos",
    categoryId: 65,
    subcategory: "Bioseguridad & Guantes",
    dropiId: "1696239",
    supplierId: "465911",
    sku: "TAP101-A",
    costoDropi: 8500,
    regularPrice: "49900",
    salePrice: "39900",
    stock: 2000,
    type: "simple",
    status: "publish",
    featured: true,
    shortDescription: "Caja x 50 tapabocas quirúrgicos de triple capa termosellada, cada uno en empaque individual sellado. Bioseguridad total en cabina. Pago Contra Entrega.",
    description: "<h3>Bioseguridad y Comodidad en Cabina: Tapabocas x 50 Uds</h3><p>Protección respiratoria de triple capa para procedimientos estéticos y médicos. Cada tapabocas cuenta con <strong>empaque individual sellado</strong> que garantiza higiene absoluta desde la fábrica hasta la piel del paciente.</p><h4>Beneficios:</h4><ul><li><strong>Triple capa protectora:</strong> Capa externa hidrófoba, filtro soplado en fusión (meltblown) y capa interna suave no irritante.</li><li><strong>Termosellado ultrasónico:</strong> Bordes suaves sin costuras que no lastiman las orejas ni el contorno facial.</li><li><strong>Empaque individual hermético:</strong> Facilita entregar una unidad a cada paciente o transportarlos de manera higiénica.</li></ul>",
    images: [
      { src: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/1696239/1741211708tapabocas-removebg-preview.png", alt: "Tapabocas quirúrgico empaque individual x 50 unidades" }
    ],
    specs: {
      "Presentación": "Caja x 50 Uds",
      "Empaque": "Individual sellado",
      "Estructura": "Triple capa termosellada",
      "Fijación": "Elásticos suaves de alta resistencia",
      "Color": "Azul quirúrgico estándar",
      "Despacho": "Inmediato (Contra Entrega)"
    }
  },
  {
    idInterno: "153",
    name: "Tapabocas KF94 Coreano de Alta Filtración Estructural",
    slug: "tapabocas-kf94-coreano-alta-filtracion",
    categorySlug: "insumos",
    categoryId: 65,
    subcategory: "Bioseguridad & Guantes",
    dropiId: "286545",
    supplierId: "55334",
    sku: "8809745950005",
    costoDropi: 1000,
    regularPrice: "34900",
    salePrice: "24900",
    stock: 15000,
    type: "simple",
    status: "publish",
    featured: false,
    shortDescription: "Diseño ergonómico KF94 tipo pez de 4 capas. Mayor espacio interior para hablar cómodamente sin rozar los labios. Pago Contra Entrega.",
    description: "<h3>Diseño KF94 Ergonómico para Máximo Confort Clínico</h3><p>El estándar coreano KF94 ofrece una estructura tridimensional patentada en 3 paneles plegables que crea una cámara de aire cómoda frente a la boca. No se pega a los labios, no mancha el maquillaje ni altera la dicción durante consultas y tratamientos prolongados.</p><ul><li>4 capas de filtración de micropartículas.</li><li>Soporte nasal ajustable y elásticos de contención ultra-suaves.</li><li>Ajuste facial 3D que previene empañamiento de gafas o lupas estéticas.</li></ul>",
    images: [
      { src: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/286545/1701892696170189269671n8BM3OU6L._AC_SX522_.jpg", alt: "Tapabocas KF94 Coreano diseño 3D" }
    ],
    specs: {
      "Tipo": "KF94 Ergonómico 3D",
      "Capas": "4 capas de filtrado avanzado",
      "Diseño": "Estructural tipo pez antiempañamiento",
      "Uso": "Clínico, estético y diario",
      "Despacho": "Contra Entrega a nivel nacional"
    }
  },
  {
    idInterno: "154",
    name: "Tapabocas 3D Anatómico Antiempañamiento para Profesionales",
    slug: "tapabocas-3d-anatomico-antiempanamiento",
    categorySlug: "insumos",
    categoryId: 65,
    subcategory: "Bioseguridad & Guantes",
    dropiId: "286537",
    supplierId: "55334",
    sku: "8809629860048",
    costoDropi: 3000,
    regularPrice: "39900",
    salePrice: "29900",
    stock: 28000,
    type: "simple",
    status: "publish",
    featured: false,
    shortDescription: "Mascarilla 3D de alta densidad con sellado perimetral. Ideal para cosmetólogas y médicas estéticas que usan gafas o lupas. Pago Contra Entrega.",
    description: "<h3>Protección Facial 3D de Alta Densidad</h3><p>Tapabocas anatómico 3D especialmente diseñado para evitar el escape vertical del aire exhalado, evitando por completo el empañamiento de gafas protectoras, lentes o visores durante procedimientos de micropigmentación o aparatología.</p>",
    images: [
      { src: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/286537/17018926971701892697D_NQ_NP_886989-MCO49699751390_042022-O.jpeg", alt: "Tapabocas 3D Anatómico" }
    ],
    specs: {
      "Diseño": "3D Anatómico sin costuras centrales",
      "Beneficio": "Antiempañamiento garantizado para lentes",
      "Material": "Tela no tejida de grado médico",
      "Stock": "Disponible en alta rotación"
    }
  },
  {
    idInterno: "155",
    name: "Tapabocas R5-95 Pediátrico Kids x 10 Unidades",
    slug: "tapabocas-r5-95-kids-10-unidades",
    categorySlug: "insumos",
    categoryId: 65,
    subcategory: "Bioseguridad & Guantes",
    dropiId: "286434",
    supplierId: "55334",
    sku: "7707300935140",
    costoDropi: 10000,
    regularPrice: "34900",
    salePrice: "24900",
    stock: 500,
    type: "simple",
    status: "publish",
    featured: false,
    shortDescription: "Paquete x 10 tapabocas R5-95 con dimensiones adaptadas para niños y rostros delgados. Suavidad extrema sin irritaciones. Pago Contra Entrega.",
    description: "<h3>Protección Especializada R5-95 Infantil y Rostros Pequeños</h3><p>Tapabocas de alta protección diseñados ergonómicamente con medidas reducidas para brindar un cierre hermético en niños o personas con rostro pequeño, asegurando que no queden holguras en la barbilla ni en las mejillas.</p>",
    images: [
      { src: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/286434/170189270317018927031648243288_556.jpeg", alt: "Tapabocas R5-95 Kids x 10" }
    ],
    specs: {
      "Presentación": "Paquete x 10 Uds",
      "Tamaño": "Pediátrico / Rostros delgados",
      "Estándar": "R5-95 alta filtración",
      "Despacho": "Contra Entrega Colombia"
    }
  },
  {
    idInterno: "156",
    name: "Termómetro Infrarrojo Digital Clínico sin Contacto",
    slug: "termometro-infrarrojo-digital-clinico",
    categorySlug: "insumos",
    categoryId: 65,
    subcategory: "Desechables de Cabina",
    dropiId: "286393",
    supplierId: "55334",
    sku: "0000000",
    costoDropi: 12000,
    regularPrice: "59900",
    salePrice: "44900",
    stock: 1899,
    type: "simple",
    status: "publish",
    featured: true,
    shortDescription: "Termómetro infrarrojo de medición instantánea (1 segundo) con pantalla LCD retroiluminada. Protocolo de cabina sin contacto. Pago Contra Entrega.",
    description: "<h3>Monitoreo Rápido y Preciso sin Contacto para Cabina Estética</h3><p>Equipo indispensable en el protocolo de triaje y bioseguridad en cabinas de estética, spa y centros médicos. Mide la temperatura corporal en solo 1 segundo a una distancia de 3-5 cm, garantizando cero contaminación cruzada entre pacientes.</p><ul><li>Lectura de alta precisión con sensor infrarrojo de grado médico.</li><li>Pantalla LCD iluminada con alerta de color para fácil interpretación.</li><li>Memoria integrada para registro de mediciones previas.</li></ul>",
    images: [
      { src: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/286393/17018927061701892706WhatsApp%20Image%202023-06-14%20at%2012.47.13%20PM.jpeg", alt: "Termómetro infrarrojo digital clínico" }
    ],
    specs: {
      "Tipo": "Infrarrojo sin contacto (3-5 cm)",
      "Tiempo de respuesta": "1 segundo",
      "Pantalla": "LCD retroiluminada de alta visibilidad",
      "Alimentación": "2 pilas AAA (bajo consumo con auto-apagado)",
      "Aplicación": "Clínicas, consultorios, cabinas estéticas y hogar"
    }
  }
];

async function syncInsumos() {
  console.log(`\n======================================================`);
  console.log(`Iniciando sincronización de ${INSUMOS_PRODUCTS.length} productos a WC...`);
  console.log(`======================================================\n`);

  // Obtener productos existentes en WC para evitar duplicados
  const existing = await wcRequest("/products?category=65&per_page=50");
  const existingMap = new Map(existing.map((p) => [p.slug, p.id]));

  for (const p of INSUMOS_PRODUCTS) {
    console.log(`\nProcesando [${p.idInterno}] ${p.name}...`);
    let productId = existingMap.get(p.slug);

    const payload = {
      name: p.name,
      slug: p.slug,
      type: p.type,
      status: p.status,
      featured: p.featured,
      catalog_visibility: "visible",
      description: p.description,
      short_description: p.shortDescription,
      sku: p.sku || `INS-${p.idInterno}`,
      regular_price: p.regularPrice,
      sale_price: p.salePrice || "",
      manage_stock: true,
      stock_quantity: p.stock,
      stock_status: p.stock > 0 ? "instock" : "outofstock",
      categories: [{ id: p.categoryId }],
      images: p.images,
      meta_data: [
        { key: "_dropi_product_id", value: p.dropiId },
        { key: "_dropi_supplier_id", value: String(p.supplierId) },
        { key: "_dropi_cost", value: String(p.costoDropi) },
        { key: "_cod_available", value: "yes" },
        { key: "_free_shipping", value: "yes" },
        { key: "_subcategory", value: p.subcategory },
        { key: "_specs_json", value: JSON.stringify(p.specs) },
      ],
    };

    try {
      let saved;
      if (productId) {
        saved = await wcRequest(`/products/${productId}`, "PUT", payload);
        console.log(`  ✓ Actualizado existente (WC ID: ${saved.id})`);
      } else {
        saved = await wcRequest("/products", "POST", payload);
        console.log(`  + Creado nuevo en WC (WC ID: ${saved.id})`);
      }
    } catch (err) {
      console.error(`  ✕ Error en ${p.name}:`, err.message);
    }
  }

  console.log(`\n¡Sincronización a WooCommerce finalizada!`);
}

syncInsumos().catch(console.error);
