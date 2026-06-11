import type { Product, CategoryInfo } from "./types";

/* ─── Categories ─── */

export const categories: CategoryInfo[] = [
  {
    slug: "lipoliticos",
    name: "Lipolíticos",
    description:
      "Soluciones inyectables para procedimientos de reducción localizada y lipólisis. Formulaciones con concentraciones estandarizadas para uso profesional.",
    productCount: 5,
    icon: "🧪",
  },
  {
    slug: "vitaminicos",
    name: "Vitamínicos",
    description:
      "Complejos vitamínicos y antioxidantes para protocolos de biorevitalización y complemento en procedimientos estéticos.",
    productCount: 2,
    icon: "💊",
  },
  {
    slug: "anestesicos",
    name: "Anestésicos",
    description:
      "Anestésicos locales de uso profesional para procedimientos de mesoterapia y estética avanzada.",
    productCount: 1,
    icon: "💉",
  },
  {
    slug: "insumos",
    name: "Insumos",
    description:
      "Material complementario y consumibles para la práctica profesional de mesoterapia.",
    productCount: 0,
    icon: "🏥",
  },
];

/* ─── Products ─── */

export const products: Product[] = [
  {
    id: "prod-001",
    slug: "l-carnitina",
    name: "L-Carnitina",
    category: "lipoliticos",
    categoryLabel: "Lipolítico / Reductor",
    shortDescription:
      "Aminoácido esencial para la oxidación de ácidos grasos. Uso en protocolos de reducción localizada.",
    description:
      "La L-Carnitina es un aminoácido que facilita el transporte de ácidos grasos de cadena larga hacia las mitocondrias, donde son metabolizados para producir energía. En mesoterapia, se utiliza como lipolítico para protocolos de reducción localizada de tejido adiposo. Su mecanismo de acción promueve la beta-oxidación a nivel celular, complementando los procedimientos estéticos corporales.",
    indications:
      "Indicada para procedimientos de mesoterapia corporal enfocados en reducción de adiposidad localizada. Se aplica mediante técnica intradérmica o subcutánea según el protocolo del profesional tratante. No aplicar en pacientes con hipersensibilidad al principio activo.",
    certifications:
      "Producto con registro sanitario vigente. Lote con trazabilidad completa desde fabricación hasta distribución. Almacenamiento controlado según normativa INVIMA.",
    specs: {
      Concentración: "500mg/5ml",
      Volumen: "5ml por ampolleta",
      Vía: "Intradérmica / Subcutánea",
      Almacenamiento: "15–25°C, proteger de la luz",
    },
    presentations: [
      { id: "pres-001a", label: "Ampolleta 5ml", price: 15000, sku: "LC-AMP-5", inStock: true },
      { id: "pres-001b", label: "Frasco 10ml", price: 25000, sku: "LC-FRA-10", inStock: true },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/L-Carnitina-5ml-mesolabpro.webp",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-002",
    slug: "triac",
    name: "Triac",
    category: "lipoliticos",
    categoryLabel: "Lipolítico / Tiroideo",
    shortDescription:
      "Análogo tiroideo de acción lipolítica. Estimula la termogénesis y el metabolismo de grasas.",
    description:
      "El Triac (ácido triyodotiroacético) es un metabolito de las hormonas tiroideas con actividad lipolítica selectiva. En protocolos de mesoterapia, estimula la lipólisis local y la termogénesis del tejido adiposo sin los efectos sistémicos de las hormonas tiroideas convencionales. Se utiliza comúnmente en cócteles lipolíticos combinados.",
    indications:
      "Para uso profesional en procedimientos de mesoterapia corporal. Aplicación intradérmica según protocolo clínico. Contraindicado en pacientes con patología tiroidea activa o hipersensibilidad al principio activo.",
    certifications:
      "Producto con registro sanitario vigente. Lote con trazabilidad completa. Condiciones de almacenamiento controladas.",
    specs: {
      Concentración: "Según formulación",
      Volumen: "5ml por ampolleta",
      Vía: "Intradérmica / Subcutánea",
      Almacenamiento: "15–25°C, proteger de la luz",
    },
    presentations: [
      { id: "pres-002a", label: "Ampolleta 5ml", price: 18000, sku: "TR-AMP-5", inStock: true },
      { id: "pres-002b", label: "Frasco 10ml", price: 30000, sku: "TR-FRA-10", inStock: true },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/lipoliticos-mesolabpro.webp",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-003",
    slug: "alcachofa",
    name: "Alcachofa",
    category: "lipoliticos",
    categoryLabel: "Drenaje / Detox",
    shortDescription:
      "Extracto con propiedades drenantes y depurativas. Complemento en protocolos de reducción.",
    description:
      "El extracto de Alcachofa (Cynara scolymus) posee propiedades hepatoprotectoras, coleréticas y diuréticas. En mesoterapia, se utiliza como coadyuvante en tratamientos de drenaje linfático y reducción de retención de líquidos. Su acción depurativa complementa los protocolos lipolíticos, mejorando la eliminación de toxinas y el metabolismo lipídico.",
    indications:
      "Indicada como complemento en protocolos de mesoterapia corporal para drenaje y detoxificación. Aplicación intradérmica. No utilizar en pacientes con obstrucción de vías biliares o alergia a plantas de la familia Asteraceae.",
    certifications:
      "Producto con registro sanitario vigente. Trazabilidad de lote garantizada. Almacenamiento según normativa vigente.",
    specs: {
      Principio: "Extracto de Cynara scolymus",
      Volumen: "5ml por ampolleta",
      Vía: "Intradérmica / Subcutánea",
      Almacenamiento: "15–25°C",
    },
    presentations: [
      { id: "pres-003a", label: "Ampolleta 5ml", price: 12000, sku: "ALC-AMP-5", inStock: true },
      { id: "pres-003b", label: "Frasco 10ml", price: 20000, sku: "ALC-FRA-10", inStock: true },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/lipoliticos-mesolabpro.webp",
    featured: false,
    inStock: true,
  },
  {
    id: "prod-004",
    slug: "silicio-organico",
    name: "Silicio Orgánico",
    category: "lipoliticos",
    categoryLabel: "Anticelulítico / Firmeza",
    shortDescription:
      "Oligoelemento esencial para la síntesis de colágeno y elastina. Efecto reafirmante y anticelulítico.",
    description:
      "El Silicio Orgánico es un oligoelemento que participa en la biosíntesis de colágeno, elastina y glucosaminoglicanos. En mesoterapia, mejora la estructura del tejido conectivo, aportando firmeza y elasticidad a la piel. Su acción anticelulítica se basa en la reestructuración de la matriz extracelular y la mejora del trofismo tisular.",
    indications:
      "Para procedimientos de mesoterapia facial y corporal orientados a la firmeza y el tratamiento de celulitis. Aplicación intradérmica. Evitar en caso de hipersensibilidad conocida.",
    certifications:
      "Registro sanitario vigente. Trazabilidad completa del lote de fabricación.",
    specs: {
      Principio: "Silicio Orgánico estabilizado",
      Volumen: "5ml por ampolleta",
      Vía: "Intradérmica",
      Almacenamiento: "15–25°C",
    },
    presentations: [
      { id: "pres-004a", label: "Ampolleta 5ml", price: 14000, sku: "SIO-AMP-5", inStock: true },
      { id: "pres-004b", label: "Frasco 10ml", price: 24000, sku: "SIO-FRA-10", inStock: true },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/Insumos-mesolabpro.webp",
    featured: false,
    inStock: true,
  },
  {
    id: "prod-005",
    slug: "tr7-coctel",
    name: "TR7 (Cóctel)",
    category: "lipoliticos",
    categoryLabel: "Lipolítico Combinado",
    shortDescription:
      "Formulación combinada de agentes lipolíticos. Protocolo completo en una sola ampolleta.",
    description:
      "TR7 es una formulación magistral que combina múltiples agentes lipolíticos en una sola presentación. Su composición sinérgica permite abordar la adiposidad localizada desde varios mecanismos de acción simultáneamente: lipólisis directa, mejora del drenaje linfático y estimulación del metabolismo local. Es un producto de elección para profesionales que buscan eficiencia en sus protocolos corporales.",
    indications:
      "Para uso exclusivo de profesionales en procedimientos de mesoterapia corporal. Aplicación intradérmica o subcutánea según criterio del profesional. Evaluar posibles interacciones con otros principios activos del protocolo.",
    certifications:
      "Producto con trazabilidad de lote. Almacenamiento controlado. Documentación de composición disponible para el profesional.",
    specs: {
      Composición: "Cóctel lipolítico combinado",
      Volumen: "5ml por ampolleta",
      Vía: "Intradérmica / Subcutánea",
      Almacenamiento: "2–8°C (refrigerado)",
    },
    presentations: [
      { id: "pres-005a", label: "Ampolleta 5ml", price: 22000, sku: "TR7-AMP-5", inStock: true },
      { id: "pres-005b", label: "Frasco 10ml", price: 38000, sku: "TR7-FRA-10", inStock: true },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/lipoliticos-mesolabpro.webp",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-006",
    slug: "complejo-b",
    name: "Complejo B",
    category: "vitaminicos",
    categoryLabel: "Vitamínico / Complemento",
    shortDescription:
      "Complejo de vitaminas del grupo B. Complemento esencial en protocolos de biorevitalización.",
    description:
      "El Complejo B reúne las principales vitaminas del grupo B (B1, B2, B3, B5, B6, B12) en una formulación inyectable para mesoterapia. Estas vitaminas participan en el metabolismo energético celular, la reparación tisular y la función neurotrófica. En estética, complementan los tratamientos de biorevitalización y mejoran el estado general de la piel.",
    indications:
      "Indicado como complemento vitamínico en protocolos de mesoterapia facial y corporal. Aplicación intradérmica. Precaución en pacientes con hipersensibilidad a vitaminas del complejo B.",
    certifications:
      "Registro sanitario INVIMA vigente. Control de lote y cadena de frío documentados.",
    specs: {
      Composición: "B1, B2, B3, B5, B6, B12",
      Volumen: "5ml por ampolleta",
      Vía: "Intradérmica / Intramuscular",
      Almacenamiento: "15–25°C, proteger de la luz",
    },
    presentations: [
      { id: "pres-006a", label: "Ampolleta 5ml", price: 8000, sku: "CB-AMP-5", inStock: true },
      { id: "pres-006b", label: "Caja x10", price: 70000, sku: "CB-CJA-10", inStock: true },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/Vitaminicos-mesolabpro.webp",
    featured: false,
    inStock: true,
  },
  {
    id: "prod-007",
    slug: "vitamina-c",
    name: "Vitamina C",
    category: "vitaminicos",
    categoryLabel: "Vitamínico / Antioxidante",
    shortDescription:
      "Ácido ascórbico concentrado. Potente antioxidante para protocolos de luminosidad y antienvejecimiento.",
    description:
      "La Vitamina C (ácido ascórbico) es un antioxidante potente que neutraliza radicales libres, estimula la síntesis de colágeno y regula la melanogénesis. En mesoterapia facial, aporta luminosidad, uniformidad del tono y efecto antienvejecimiento. Su concentración profesional permite resultados superiores a los tratamientos tópicos convencionales.",
    indications:
      "Para procedimientos de mesoterapia facial enfocados en luminosidad, antienvejecimiento y manchas. Aplicación intradérmica. Conservar en refrigeración una vez abierto. No aplicar en piel irritada o lesionada.",
    certifications:
      "Registro sanitario vigente. Producto con control de cadena de frío y trazabilidad de lote.",
    specs: {
      Concentración: "20% (200mg/ml)",
      Volumen: "20ml por frasco",
      Vía: "Intradérmica",
      Almacenamiento: "2–8°C (refrigerado)",
    },
    presentations: [
      { id: "pres-007a", label: "Frasco 20ml", price: 28000, sku: "VC-FRA-20", inStock: true },
      {
        id: "pres-007b",
        label: "Caja cerrada",
        price: 250000,
        sku: "VC-CJA",
        inStock: true,
      },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/Vitaminicos-mesolabpro.webp",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-008",
    slug: "procaina",
    name: "Procaína",
    category: "anestesicos",
    categoryLabel: "Anestésico / Base",
    shortDescription:
      "Anestésico local de acción corta. Base para protocolos de mesoterapia y terapia neural.",
    description:
      "La Procaína es un anestésico local del grupo éster, de acción corta y baja toxicidad sistémica. En mesoterapia, se utiliza como anestésico de base para reducir el dolor durante la aplicación de otros principios activos. También se emplea en terapia neural (Huneke) por su efecto regulador sobre el sistema neurovegetativo. Su perfil de seguridad la convierte en una elección habitual para procedimientos estéticos ambulatorios.",
    indications:
      "Anestesia local en procedimientos de mesoterapia. Dilución y mezcla según criterio del profesional tratante. Contraindicada en pacientes con alergia conocida a anestésicos del grupo éster o a PABA.",
    certifications:
      "Producto con registro INVIMA. Lote con trazabilidad completa. Cadena de frío documentada.",
    specs: {
      Concentración: "2% (20mg/ml)",
      Volumen: "20ml por frasco",
      Vía: "Intradérmica / Subcutánea",
      Almacenamiento: "15–25°C",
    },
    presentations: [
      { id: "pres-008a", label: "Frasco 20ml", price: 18000, sku: "PRO-FRA-20", inStock: true },
      {
        id: "pres-008b",
        label: "Caja cerrada",
        price: 160000,
        sku: "PRO-CJA",
        inStock: true,
      },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/Anestesicos-mesolabpro.webp",
    featured: false,
    inStock: true,
  },
];

/* ─── Helpers ─── */

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
