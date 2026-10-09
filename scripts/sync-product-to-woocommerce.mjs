/**
 * Script de Ingesta Automatizada de Productos hacia WooCommerce REST API
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
    description: "Aparatología estética portátil de última generación: depilación láser IPL definitiva, Gua Sha LED y limpieza sónica.",
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

// ── 2. Definición del Producto Ganador #1 (Depiladora Láser IPL Pro) ─────────
const WINNING_PRODUCT_IPL = {
  name: "Depiladora Láser IPL Portátil Pro",
  slug: "depiladora-laser-ipl-pro",
  categorySlug: "beauty-tech",
  subcategory: "Depilación Láser IPL",
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
  images: [
    {
      id: 288,
    },
  ],
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
      attributes: [
        {
          name: "Presentación",
          option: "Kit Estándar (999.000 Pulsos)",
        },
      ],
    },
    {
      regular_price: "169000",
      sku: "IPL-PRO-02",
      manage_stock: true,
      stock_quantity: 30,
      attributes: [
        {
          name: "Presentación",
          option: "Kit Pro (+ Gafas UV & Cabezal Precisión)",
        },
      ],
    },
  ],
};

// ── 3. Función Principal de Inyección ───────────────────────────────────────
async function uploadProduct(productData, categoryMap) {
  const catId = categoryMap.get(productData.categorySlug);
  if (!catId) {
    throw new Error(`Categoría no encontrada para slug: ${productData.categorySlug}`);
  }

  console.log(`\nComprobando si "${productData.name}" ya existe en WooCommerce...`);
  const searchResults = await wcRequest(`/products?slug=${productData.slug}`);

  let productId = null;
  if (searchResults.length > 0) {
    productId = searchResults[0].id;
    console.log(`! El producto ya existe en WooCommerce con ID: ${productId}. Procediendo a actualizarlo...`);
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
    images: productData.images,
    attributes: productData.attributes,
    meta_data: [
      { key: "_cod_available", value: "yes" },
      { key: "_free_shipping", value: "yes" },
      { key: "_subcategory", value: productData.subcategory },
      { key: "_specs_json", value: JSON.stringify(productData.specs) },
    ],
  };

  let createdProduct;
  if (productId) {
    createdProduct = await wcRequest(`/products/${productId}`, "PUT", wcPayload);
    console.log(`✓ Producto base actualizado exitosamente (ID: ${createdProduct.id})`);
  } else {
    createdProduct = await wcRequest("/products", "POST", wcPayload);
    productId = createdProduct.id;
    console.log(`✓ Producto base creado exitosamente en WooCommerce (ID: ${productId})`);
  }

  // Crear o actualizar variaciones si es producto variable
  if (productData.type === "variable" && productData.variations) {
    console.log(`Inyectando ${productData.variations.length} variaciones comerciales...`);
    const existingVars = await wcRequest(`/products/${productId}/variations?per_page=50`);
    const varMapBySku = new Map(existingVars.map((v) => [v.sku, v.id]));

    for (const v of productData.variations) {
      if (varMapBySku.has(v.sku)) {
        const varId = varMapBySku.get(v.sku);
        await wcRequest(`/products/${productId}/variations/${varId}`, "PUT", v);
        console.log(`  ✓ Variación actualizada (${v.sku}): $${Number(v.regular_price).toLocaleString("es-CO")} COP`);
      } else {
        await wcRequest(`/products/${productId}/variations`, "POST", v);
        console.log(`  + Variación creada (${v.sku}): $${Number(v.regular_price).toLocaleString("es-CO")} COP`);
      }
    }
  }

  return createdProduct;
}

async function main() {
  console.log("=== INICIANDO SINCRONIZADOR WOOCOMMERCE -> MESOLAB PRO ===");
  const categoryMap = await ensureCategories();
  const product = await uploadProduct(WINNING_PRODUCT_IPL, categoryMap);

  console.log("\n========================================================");
  console.log("¡PRODUCTO PUBLICADO EN WOOCOMMERCE CON ÉXITO!");
  console.log(`ID: ${product.id}`);
  console.log(`Nombre: ${product.name}`);
  console.log(`Enlace WC: ${product.permalink}`);
  console.log(`Frontend URL: http://localhost:3000/producto/${product.slug}`);
  console.log("========================================================");
}

main().catch((err) => {
  console.error("Error fatal en la ejecución:", err);
  process.exit(1);
});
