/**
 * Script de Ingesta Automatizada de Catálogo hacia WooCommerce REST API
 * MesoLab Pro - Pipeline Dropshipping & Beauty Tech
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

// ── 1. Asegurar Categorías Base ─────────────────────────────────────────────
const CORE_CATEGORIES = [
  {
    name: "Beauty Tech",
    slug: "beauty-tech",
    description: "Aparatología estética portátil de última generación: depilación láser IPL definitiva, Gua Sha LED, espátulas ultrasónicas y alta frecuencia.",
  },
  {
    name: "Cuidado Facial",
    slug: "facial",
    description: "Sueros dermo-activos con ácido hialurónico, niacinamida, tónicos y mascarillas de bio-colágeno.",
  },
  {
    name: "Cuidado Corporal",
    slug: "corporal",
    description: "Tratamientos termoactivos reductores y geles moldeadores de silueta con cafeína y centella asiática.",
  },
  {
    name: "Cuidado Capilar",
    slug: "capilar",
    description: "Tónicos estimulantes de biotina y romero anticaída, cepillos secadores y voluminizadores multifunción.",
  },
  {
    name: "Línea Profesional",
    slug: "profesional",
    description: "Insumos y soluciones de mesoterapia certificados con registro INVIMA para cabina estética.",
  },
];

async function ensureCategories() {
  console.log("Verificando categorías en WooCommerce...");
  const existing = await wcRequest("/products/categories?per_page=100");
  const categoryMap = new Map();

  for (const cat of existing) {
    categoryMap.set(cat.slug, cat.id);
  }

  for (const target of CORE_CATEGORIES) {
    if (!categoryMap.has(target.slug)) {
      console.log(`+ Creando categoría: ${target.name} (${target.slug})...`);
      const created = await wcRequest("/products/categories", "POST", target);
      categoryMap.set(created.slug, created.id);
    } else {
      console.log(`✓ Categoría existente: ${target.name} (ID: ${categoryMap.get(target.slug)})`);
    }
  }

  return categoryMap;
}

// ── 2. Definición del Top 5 Productos Ganadores Beauty Tech ──────────────────
const WINNING_PRODUCTS = [
  {
    idInterno: "001",
    name: "Depiladora Láser IPL Portátil Pro",
    slug: "depiladora-laser-ipl-pro",
    categorySlug: "beauty-tech",
    subcategory: "Depilación Láser IPL",
    dropiId: "1101421",
    supplierId: "33580",
    costoDropi: "50000",
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription:
      "Tecnología de luz pulsada intensa (IPL) de 999.000 pulsos. Reduce hasta el 92% del vello en 8 semanas desde la comodidad de tu hogar. Envíos con Pago Contra Entrega.",
    description: `
      <h3>Piel Suave y Sin Vello Definitiva en Casa</h3>
      <p>La <strong>Depiladora Láser IPL Portátil Pro</strong> utiliza pulsos de luz clínicamente probados que actúan directamente sobre la raíz del folículo piloso, debilitando el crecimiento del vello progresivamente.</p>
      <ul>
        <li><strong>999.000 Pulsos reales:</strong> Durabilidad para más de 10 años de uso personal y retoques.</li>
        <li><strong>5 Niveles de potencia:</strong> Ajustable según el tono de piel y la sensibilidad de la zona (rostro, axilas, bikini, piernas).</li>
        <li><strong>Sensor inteligente de contacto:</strong> El disparo solo se activa al estar en contacto plano con la piel para proteger los ojos.</li>
        <li><strong>Modo Flash Continuo:</strong> Deslizamiento rápido para zonas amplias como piernas y espalda.</li>
      </ul>
      <h4>Protocolo Sugerido</h4>
      <p>Usar 2 veces por semana durante las primeras 4 semanas, luego 1 vez por semana hasta la semana 8. Para mantenimiento, 1 sesión cada 1 a 2 meses.</p>
    `,
    imageSrc: "https://api.mesolabpro.com.co/wp-content/uploads/2026/10/1717018299imagen_2024-05-29_163101962.png",
    specs: {
      "Capacidad de Pulsos": "999.000 destellos",
      "Niveles de Intensidad": "5 niveles regulables",
      "Zonas de Uso": "Rostro, axilas, piernas, bikini y brazos",
      "Alimentación": "Adaptador de corriente 110V/220V homologado",
      "Garantía": "12 meses directa por defectos de fábrica",
      "Modalidad": "Despacho con Pago Contra Entrega",
    },
    attributes: [
      {
        name: "Presentación",
        position: 0,
        visible: true,
        variation: true,
        options: [
          "Kit Estándar (999.000 Pulsos)",
          "Kit Pro (+ Gafas UV & Cabezal Precisión)",
        ],
      },
    ],
    variations: [
      {
        regular_price: "139000",
        sku: "IPL-STD-01",
        manage_stock: true,
        stock_quantity: 45,
        attributes: [{ name: "Presentación", option: "Kit Estándar (999.000 Pulsos)" }],
      },
      {
        regular_price: "169000",
        sku: "IPL-PRO-02",
        manage_stock: true,
        stock_quantity: 30,
        attributes: [{ name: "Presentación", option: "Kit Pro (+ Gafas UV & Cabezal Precisión)" }],
      },
    ],
  },
  {
    idInterno: "002",
    name: "Masajeador Facial Gua Sha con Radiofrecuencia y LED",
    slug: "masajeador-gua-sha-radiofrecuencia-led",
    categorySlug: "beauty-tech",
    subcategory: "Masajeadores Faciales y Gua Sha LED",
    dropiId: "2182490",
    supplierId: "2182490",
    costoDropi: "26500",
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription:
      "Diseño ergonómico ancestral combinado con microcorrientes EMS, radiofrecuencia bimodal y terapia LED roja/azul. Estimula colágeno, desinflama y esculpe el óvalo facial.",
    description: `
      <h3>Lifting Facial y Drenaje Linfático Inteligente</h3>
      <p>El <strong>Masajeador Facial Gua Sha Pro</strong> fusiona la medicina tradicional con electroterapia avanzada para descongestionar, tonificar y tensar el tejido facial.</p>
      <ul>
        <li><strong>Radiofrecuencia + Microcorrientes EMS:</strong> Estimula la contracción muscular superficial para un efecto tensor inmediato.</li>
        <li><strong>Fototerapia Bicolor:</strong> Luz roja (longitud de onda 630nm para síntesis de elastina) y luz azul (465nm purificante contra impurezas).</li>
        <li><strong>Diseño Anatómico Borde Curvo:</strong> Se adapta milimétricamente al pómulo, mandíbula, entrecejo y cuello.</li>
        <li><strong>Portátil y Recargable USB:</strong> Batería de larga duración para sesiones diarias de 5 a 10 minutos.</li>
      </ul>
      <h4>Modo de Uso</h4>
      <p>Aplicar suero dermoactivo o crema hidratante sobre la piel limpia. Deslizar con movimientos ascendentes desde el centro del rostro hacia las orejas y desde la clavícula hacia la mandíbula.</p>
    `,
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2182490/17820187971000796740.jpg",
    specs: {
      "Tecnología": "Microcorrientes EMS + Radiofrecuencia + Fototerapia",
      "Fototerapia": "LED Rojo (630nm) y Azul (465nm)",
      "Batería": "Batería Li-Ion recargable vía USB (hasta 12 días por carga)",
      "Material": "ABS de grado quirúrgico y aleación electrogalvánica",
      "Garantía": "6 meses directa por defectos de fábrica",
      "Modalidad": "Despacho con Pago Contra Entrega",
    },
    attributes: [
      {
        name: "Color",
        position: 0,
        visible: true,
        variation: true,
        options: ["Blanco Perla", "Oro Rosa"],
      },
    ],
    variations: [
      {
        regular_price: "89000",
        sku: "GS-RF-WHT",
        manage_stock: true,
        stock_quantity: 40,
        attributes: [{ name: "Color", option: "Blanco Perla" }],
      },
      {
        regular_price: "89000",
        sku: "GS-RF-RSG",
        manage_stock: true,
        stock_quantity: 35,
        attributes: [{ name: "Color", option: "Oro Rosa" }],
      },
    ],
  },
  {
    idInterno: "003",
    name: "Espátula Peeling Ultrasónico Limpieza Facial Profunda",
    slug: "espatula-peeling-ultrasonico",
    categorySlug: "beauty-tech",
    subcategory: "Electroporadores y Peeling Ultrasónico",
    dropiId: "1375642",
    supplierId: "55384",
    costoDropi: "19900",
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription:
      "Vibración ultrasónica de alta frecuencia (24.000 Hz) que desincrusta puntos negros, exceso de grasa y células muertas. Incluye modos de infusión y tonificación EMS.",
    description: `
      <h3>Higiene Facial Dermo-Clínica sin Dolor ni Marcas</h3>
      <p>La <strong>Espátula Ultrasónica Skin Scrubber</strong> convierte el agua micelar o tónico en microgotas oscilantes a 24.000 Hz que emulsionan el sebo de los poros abiertos sin lesionar la epidermis.</p>
      <ul>
        <li><strong>Modo Cleansing (Limpieza Ultrasónica):</strong> Extracción suave de comedones abiertos, puntos negros y estrato córneo residual.</li>
        <li><strong>Modo Ion- / Moisturizing (Infusión Transdérmica):</strong> Facilita la penetración de activos de sueros hasta capas profundas por sonoforesis.</li>
        <li><strong>Modo Lifting EMS:</strong> Pulsos continuos que revitalizan la firmeza cutánea y alisan líneas de expresión finas.</li>
        <li><strong>Cabezal de Acero Quirúrgico:</strong> 100% biocompatible, hipoalergénico y fácil de esterilizar con alcohol al 70%.</li>
      </ul>
      <h4>Recomendación de Uso</h4>
      <p>Utilizar siempre sobre la piel húmeda con solución salina, agua destilada o tónico termal. De 1 a 2 veces por semana.</p>
    `,
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/649293/1707834447peelingFacial.png",
    specs: {
      "Frecuencia Ultrasónica": "24.000 Hz (24 kHz)",
      "Cabezal": "Acero inoxidable quirúrgico hipoalergénico",
      "Modos Operativos": "Limpieza (Peeling), Iontoforesis (+/-) y Lifting EMS",
      "Alimentación": "Recargable USB con cable incluido",
      "Garantía": "6 meses directa por defectos de fábrica",
      "Modalidad": "Despacho con Pago Contra Entrega",
    },
    attributes: [
      {
        name: "Color",
        position: 0,
        visible: true,
        variation: true,
        options: ["Blanco Glaciar", "Negro Matte"],
      },
    ],
    variations: [
      {
        regular_price: "79000",
        sku: "PEEL-US-WHT",
        manage_stock: true,
        stock_quantity: 50,
        attributes: [{ name: "Color", option: "Blanco Glaciar" }],
      },
      {
        regular_price: "79000",
        sku: "PEEL-US-BLK",
        manage_stock: true,
        stock_quantity: 40,
        attributes: [{ name: "Color", option: "Negro Matte" }],
      },
    ],
  },
  {
    idInterno: "004",
    name: "Masajeador Lifting Cuello y Papada Triple Fototerapia LED",
    slug: "masajeador-cuello-papada-led",
    categorySlug: "beauty-tech",
    subcategory: "Masajeadores Faciales y Gua Sha LED",
    dropiId: "2116554",
    supplierId: "2116554",
    costoDropi: "21000",
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription:
      "Cabezal ergonómico delfín 160° para cuello, papada y escote con termoterapia constante a 45°C y triple fototerapia LED (Rojo, Azul, Verde). Tonifica la piel flácida.",
    description: `
      <h3>Esculpe Mandíbula, Cuello y Escote sin Cirugía</h3>
      <p>El <strong>Masajeador Térmico para Cuello y Papada</strong> aborda específicamente la pérdida de elasticidad en el platisma y la papada gracias a la termoterapia a 45°C combinada con vibración sónica.</p>
      <ul>
        <li><strong>Cabezal Biónico 160°:</strong> Diseñado anatómicamente para acoplarse con suavidad a la curvatura del cuello y la quijada.</li>
        <li><strong>Termoterapia a 45°C:</strong> Dilata microporos y acelera el metabolismo celular facilitando la penetración de cremas tensoras.</li>
        <li><strong>Triple Fototerapia LED:</strong>
          <ul>
            <li>Luz Roja: Regenera fibroblastos y alisa pliegues cervicales.</li>
            <li>Luz Azul: Calma la reactividad cutánea y reduce inflamación.</li>
            <li>Luz Verde: Oxigenación de microvasos y balance del tono.</li>
          </ul>
        </li>
      </ul>
      <h4>Protocolo Sugerido</h4>
      <p>Deslizar desde la base del cuello hacia el mentón durante 5 a 10 minutos al día, preferiblemente en la rutina nocturna.</p>
    `,
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/2116554/17745430001714503299WhatsApp%20Image%202024-04-30%20at%201.48.24%20PM%20(1).jpeg",
    specs: {
      "Forma del Cabezal": "Arco biónico de 160 grados",
      "Temperatura Térmica": "Calor constante a 45°C ± 2°C",
      "Fototerapia": "3 Modos (LED Rojo, LED Azul, LED Verde)",
      "Vibración Sónica": "Hasta 7.000 rpm",
      "Carga": "USB tipo C de carga rápida",
      "Garantía": "6 meses directa por defectos de fábrica",
      "Modalidad": "Despacho con Pago Contra Entrega",
    },
    attributes: [
      {
        name: "Color",
        position: 0,
        visible: true,
        variation: true,
        options: ["Blanco Esculpido", "Negro Satinado"],
      },
    ],
    variations: [
      {
        regular_price: "79000",
        sku: "LIFT-NCK-WHT",
        manage_stock: true,
        stock_quantity: 45,
        attributes: [{ name: "Color", option: "Blanco Esculpido" }],
      },
      {
        regular_price: "79000",
        sku: "LIFT-NCK-BLK",
        manage_stock: true,
        stock_quantity: 35,
        attributes: [{ name: "Color", option: "Negro Satinado" }],
      },
    ],
  },
  {
    idInterno: "005",
    name: "Equipo Facial Alta Frecuencia Portátil 4 Electrodos Neón",
    slug: "equipo-alta-frecuencia-neon",
    categorySlug: "beauty-tech",
    subcategory: "Alta Frecuencia y Microcorrientes",
    dropiId: "879697",
    supplierId: "879697",
    costoDropi: "33500",
    type: "variable",
    status: "publish",
    featured: true,
    shortDescription:
      "Aparato profesional de corriente de alta frecuencia con gas Neón (luz naranja). Potente acción bactericida frente al acné, oxigenación dérmica y estimulación capilar.",
    description: `
      <h3>El Estándar de Oro en Desinfección y Rejuvenecimiento Facial</h3>
      <p>El <strong>Equipo Portátil de Alta Frecuencia con Electrodos de Neón</strong> emite una corriente alterna de alta frecuencia que genera ozono en la superficie dérmica, eliminando bacterias causantes de brotes y acelerando la microcirculación.</p>
      <ul>
        <li><strong>Gas Neón Puro (Naranja/Rojo):</strong> Excelente para pieles con envejecimiento prematuro, flacidez y caída capilar por su efecto tonificante y vasodilatador.</li>
        <li><strong>4 Electrodos de Vidrio Templado:</strong>
          <ul>
            <li>Tubo Hongo: Para mejillas, frente, cuello y zonas amplias.</li>
            <li>Tubo Cuchara: Para contorno orbicular, surcos nasogenianos y zonas medias.</li>
            <li>Tubo Gota/Punta: Tratamiento focalizado para comedones activos y pústulas.</li>
            <li>Tubo Peine: Para el cuero cabelludo, estimulando la papila dérmica folicular.</li>
          </ul>
        </li>
        <li><strong>Regulador Gradual de Potencia:</strong> Control analógico preciso de intensidad.</li>
      </ul>
      <h4>Recomendación de Protocolo</h4>
      <p>Usar sobre piel completamente seca con o sin gasa interpuesta durante 5 a 10 minutos, 2 a 3 veces por semana.</p>
    `,
    imageSrc: "https://d39ru7awumhhs2.cloudfront.net/colombia/products/879697/1718293382Alta%20Frecuencia%20Portatil%20Facial%20Y%20Corporal%204%20Electrodos%20B.jpg",
    specs: {
      "Tipo de Corriente": "Alta frecuencia de baja tensión",
      "Gas Conductor": "Neón puro (luminiscencia naranja)",
      "Electrodos": "4 piezas (Hongo, Cuchara, Gota puntual, Peine capilar)",
      "Voltaje Operativo": "110V estándar Colombia con fusible de protección",
      "Garantía": "12 meses directa por defectos de fábrica",
      "Modalidad": "Despacho con Pago Contra Entrega",
    },
    attributes: [
      {
        name: "Presentación",
        position: 0,
        visible: true,
        variation: true,
        options: [
          "Kit Estándar (4 Tubos Neón)",
          "Kit Pro (+ Suero Conductor Ácido Hialurónico)",
        ],
      },
    ],
    variations: [
      {
        regular_price: "99000",
        sku: "AF-PORT-STD",
        manage_stock: true,
        stock_quantity: 35,
        attributes: [{ name: "Presentación", option: "Kit Estándar (4 Tubos Neón)" }],
      },
      {
        regular_price: "129000",
        sku: "AF-PORT-PRO",
        manage_stock: true,
        stock_quantity: 25,
        attributes: [{ name: "Presentación", option: "Kit Pro (+ Suero Conductor Ácido Hialurónico)" }],
      },
    ],
  },
];

// ── 3. Función Principal de Inyección ───────────────────────────────────────
async function uploadProduct(productData, categoryMap) {
  const catId = categoryMap.get(productData.categorySlug);
  if (!catId) {
    throw new Error(`Categoría no encontrada para slug: ${productData.categorySlug}`);
  }

  console.log(`\n------------------------------------------------------------`);
  console.log(`Procesando [${productData.idInterno}] "${productData.name}"...`);
  const searchResults = await wcRequest(`/products?slug=${productData.slug}`);

  let existingProduct = searchResults.length > 0 ? searchResults[0] : null;
  let productId = existingProduct ? existingProduct.id : null;

  // Manejo de imágenes: si ya tiene imagen asignada en WC, preservarla; si no, pasar imageSrc
  let imagesPayload = [];
  if (existingProduct && existingProduct.images && existingProduct.images.length > 0) {
    imagesPayload = existingProduct.images.map((img) => ({ id: img.id }));
  } else if (productData.imageSrc) {
    imagesPayload = [{ src: productData.imageSrc }];
  }

  // Preparar payload para producto base
  const wcPayload = {
    name: productData.name,
    slug: productData.slug,
    type: productData.type,
    status: productData.status,
    featured: productData.featured,
    short_description: productData.shortDescription,
    description: productData.description,
    categories: [{ id: catId }],
    images: imagesPayload,
    attributes: productData.attributes,
    meta_data: [
      { key: "_dropi_product_id", value: productData.dropiId },
      { key: "_dropi_supplier_id", value: productData.supplierId },
      { key: "_dropi_cost", value: productData.costoDropi },
      { key: "_cod_available", value: "yes" },
      { key: "_free_shipping", value: "yes" },
      { key: "_subcategory", value: productData.subcategory },
      { key: "_specs_json", value: JSON.stringify(productData.specs) },
    ],
  };

  let savedProduct;
  if (productId) {
    console.log(`! El producto ya existe en WooCommerce con ID: ${productId}. Actualizando...`);
    savedProduct = await wcRequest(`/products/${productId}`, "PUT", wcPayload);
    console.log(`✓ Producto base actualizado exitosamente (ID: ${savedProduct.id})`);
  } else {
    console.log(`+ Creando nuevo producto en WooCommerce...`);
    savedProduct = await wcRequest("/products", "POST", wcPayload);
    productId = savedProduct.id;
    console.log(`✓ Producto base creado exitosamente en WooCommerce (ID: ${productId})`);
  }

  // Crear o actualizar variaciones si es producto variable
  if (productData.type === "variable" && productData.variations) {
    console.log(`  Sincronizando ${productData.variations.length} variaciones comerciales...`);
    const existingVars = await wcRequest(`/products/${productId}/variations?per_page=50`);
    const varMapBySku = new Map(existingVars.map((v) => [v.sku, v.id]));

    for (const v of productData.variations) {
      if (varMapBySku.has(v.sku)) {
        const varId = varMapBySku.get(v.sku);
        await wcRequest(`/products/${productId}/variations/${varId}`, "PUT", v);
        console.log(`    ✓ Variación actualizada (${v.sku}): $${Number(v.regular_price).toLocaleString("es-CO")} COP`);
      } else {
        await wcRequest(`/products/${productId}/variations`, "POST", v);
        console.log(`    + Variación creada (${v.sku}): $${Number(v.regular_price).toLocaleString("es-CO")} COP`);
      }
    }
  }

  return savedProduct;
}

async function main() {
  console.log("=== INICIANDO SINCRONIZADOR WOOCOMMERCE -> MESOLAB PRO ===");
  const categoryMap = await ensureCategories();
  const results = [];

  for (const prod of WINNING_PRODUCTS) {
    try {
      const saved = await uploadProduct(prod, categoryMap);
      results.push({
        idInterno: prod.idInterno,
        name: saved.name,
        slug: saved.slug,
        wcId: saved.id,
        permalink: saved.permalink,
      });
    } catch (err) {
      console.error(`Error procesando producto ${prod.name}:`, err.message);
    }
  }

  console.log("\n========================================================");
  console.log("RESUMEN DE SINCRONIZACIÓN DE PRODUCTOS EN WOOCOMMERCE:");
  results.forEach((r) => {
    console.log(`- [${r.idInterno}] ID WC: ${r.wcId} | Slug: ${r.slug}`);
    console.log(`  Frontend: https://mesolabpro.com.co/producto/${r.slug}`);
  });
  console.log("========================================================");
}

main().catch((err) => {
  console.error("Error fatal en la ejecución:", err);
  process.exit(1);
});
