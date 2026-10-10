import type { Product, CategoryInfo } from "./types";

/* ─── Categories ─── */

export const categories: CategoryInfo[] = [
  {
    slug: "facial",
    name: "Cuidado Facial",
    description:
      "Sueros dermo-activos con ácido hialurónico, niacinamida, tónicos y mascarillas de bio-colágeno para una piel luminosa, hidratada y uniforme.",
    productCount: 2,
    icon: "droplet",
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/vitaminicos-mesolabpro.webp",
  },
  {
    slug: "beauty-tech",
    name: "Beauty Tech",
    description:
      "Aparatología estética portátil de última generación: depilación láser IPL definitiva en casa, masajeadores Gua Sha LED y limpieza sónica.",
    productCount: 3,
    icon: "device",
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/insumos-mesolabpro.webp",
  },
  {
    slug: "corporal",
    name: "Cuidado Corporal",
    description:
      "Tratamientos termoactivos reductores, geles moldeadores de silueta con cafeína y centella asiática, y complementos para firmeza.",
    productCount: 1,
    icon: "silhouette",
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/lipoliticos-mesolabpro.webp",
  },
  {
    slug: "capilar",
    name: "Cuidado Capilar",
    description:
      "Tónicos estimulantes de biotina y romero anticaída, cepillos secadores y voluminizadores multifunción para un cabello radiante.",
    productCount: 2,
    icon: "leaf",
  },
  {
    slug: "profesional",
    name: "Línea Profesional",
    description:
      "Insumos y soluciones de mesoterapia certificados con registro INVIMA para uso en centros de estética, reducción localizada y revitalización.",
    productCount: 8,
    icon: "flask",
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/L-Carnitina-5ml-mesolabpro.webp",
  },
  // Categorías de compatibilidad / legado
  {
    slug: "lipoliticos",
    name: "Lipolíticos",
    description: "Soluciones inyectables para procedimientos de reducción localizada y lipólisis.",
    productCount: 5,
    icon: "flask",
  },
  {
    slug: "vitaminicos",
    name: "Vitamínicos",
    description: "Complejos vitamínicos y antioxidantes para protocolos de biorevitalización.",
    productCount: 2,
    icon: "capsule",
  },
  {
    slug: "anestesicos",
    name: "Anestésicos",
    description: "Anestésicos locales de uso profesional para procedimientos en centros de estética.",
    productCount: 1,
    icon: "syringe",
  },
  {
    slug: "insumos",
    name: "Insumos",
    description: "Material complementario y consumibles para procedimientos estéticos y centros de cosmetología.",
    productCount: 0,
    icon: "box",
  },
];

/* ─── Products ─── */

export const products: Product[] = [
  // ── 1. BEAUTY TECH (Ganadores Dropshipping) ──
  {
    id: "prod-bt-001",
    slug: "depiladora-laser-ipl-pro",
    name: "Depiladora Láser IPL Portátil Pro",
    category: "beauty-tech",
    categoryLabel: "Beauty Tech / Depilación Definitiva",
    subcategory: "Depilación Láser IPL",
    tags: ["ipl", "depilacion", "laser", "en casa"],
    freeShipping: true,
    codAvailable: true,
    shortDescription:
      "Tecnología de luz pulsada intensa (IPL) de 999.000 pulsos. Reduce hasta el 92% del vello en 8 semanas desde la comodidad de tu hogar.",
    description:
      "La Depiladora Láser IPL Portátil Pro utiliza pulsos de luz clínicamente probados que actúan directamente sobre la raíz del folículo piloso, debilitando el crecimiento del vello progresivamente. Diseñada para rostro, axilas, área del bikini y cuerpo completo con 5 niveles de intensidad ajustables y sensor de contacto seguro. Incluye modo automático para deslizamiento continuo.",
    indications:
      "Apta para uso corporal y facial en casa. Rasurar la zona antes de cada sesión para optimizar la penetración de la luz. Utilizar gafas de protección UV incluidas. No usar sobre piel tatuada o con bronceado reciente intenso.",
    certifications:
      "Certificación CE, RoHS y control de calidad verificado. Garantía directa de satisfacción.",
    specs: {
      "Capacidad de Pulsos": "999.000 destellos",
      "Niveles de Intensidad": "5 niveles ajustables",
      "Zonas de Uso": "Rostro, axilas, piernas, bikini, brazos",
      "Alimentación": "Adaptador de corriente 110V/220V incluido",
    },
    presentations: [
      {
        id: "pres-ipl-01",
        label: "Kit Estándar (999.000 Pulsos)",
        price: 139000,
        sku: "IPL-STD-01",
        inStock: true,
      },
      {
        id: "pres-ipl-02",
        label: "Kit Pro + Gafas UV & Cabezal Precisión",
        price: 169000,
        sku: "IPL-PRO-02",
        inStock: true,
      },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/insumos-mesolabpro.webp",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-bt-002",
    slug: "masajeador-facial-gua-sha-led",
    name: "Masajeador Facial Gua Sha LED & Microcorrientes",
    category: "beauty-tech",
    categoryLabel: "Beauty Tech / Lifting Facial",
    subcategory: "Lifting & Fototerapia LED",
    tags: ["gua sha", "led", "lifting", "antiage", "microcorrientes"],
    freeShipping: true,
    codAvailable: true,
    shortDescription:
      "Dispositivo de esculpido facial con 3 modos de fototerapia LED, calor térmico suave y vibración de alta frecuencia para cuello y rostro.",
    description:
      "Inspirado en la técnica milenaria del Gua Sha y potenciado con tecnología moderna. Sus microcorrientes estimulan la síntesis de colágeno mientras la luz roja atenúa líneas de expresión, la luz azul calma imperfecciones y la luz verde unifica el tono. Su cabezal curvado se adapta ergonómicamente a mandíbula, pómulos y cuello.",
    indications:
      "Usar 5 a 10 minutos al día tras aplicar serum o crema hidratante para facilitar el deslizamiento y multiplicar la absorción de los principios activos.",
    certifications:
      "Certificación de seguridad electrónica y batería recargable USB de larga duración.",
    specs: {
      "Fototerapia": "LED Rojo (630nm), Azul (470nm), Verde (520nm)",
      "Vibración": "11.000 rpm",
      "Temperatura Térmica": "42°C constante",
      "Batería": "Recargable USB Tipo-C",
    },
    presentations: [
      {
        id: "pres-gs-01",
        label: "1 Masajeador Gua Sha LED",
        price: 89000,
        sku: "GS-LED-01",
        inStock: true,
      },
      {
        id: "pres-gs-02",
        label: "Dúo Especial (Lleva 2 con 25% OFF)",
        price: 139000,
        sku: "GS-LED-02",
        inStock: true,
      },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/vitaminicos-mesolabpro.webp",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-bt-003",
    slug: "cepillo-limpiador-facial-sonico",
    name: "Cepillo Limpiador Facial Sónico Waterproof",
    category: "beauty-tech",
    categoryLabel: "Beauty Tech / Limpieza Profunda",
    subcategory: "Limpieza Sónica",
    tags: ["limpieza", "sonico", "silicona", "poros", "waterproof"],
    freeShipping: true,
    codAvailable: true,
    shortDescription:
      "Limpieza profunda con silicona médica ultra-higiénica y pulsaciones sónicas para remover el 99.5% de grasa, maquillaje e impurezas.",
    description:
      "Transforma tu limpieza diaria en un ritual de spa. Sus cerdas de silicona no porosa previenen la acumulación de bacterias, mientras que sus 8 niveles de vibración sónica desobstruyen los poros sin erosionar la barrera de la piel. 100% impermeable IPX7 para uso en la ducha.",
    indications:
      "Aplicar limpiador facial, encender el dispositivo y realizar movimientos circulares suaves durante 1 minuto. Enjuagar con agua tibia.",
    certifications:
      "Silicona médica hipoalergénica libre de BPA. Resistencia IPX7 al agua.",
    specs: {
      "Impermeabilidad": "Grado IPX7 (sumergible)",
      "Velocidades": "8 intensidades regulables",
      "Carga": "USB magnética (hasta 90 usos por carga)",
    },
    presentations: [
      {
        id: "pres-cl-01",
        label: "Color Rosa Pastel",
        price: 59000,
        sku: "CL-SON-PNK",
        inStock: true,
      },
      {
        id: "pres-cl-02",
        label: "Color Verde Menta",
        price: 59000,
        sku: "CL-SON-MNT",
        inStock: true,
      },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/insumos-mesolabpro.webp",
    featured: false,
    inStock: true,
  },

  // ── 2. CUIDADO FACIAL (Skincare Activo) ──
  {
    id: "prod-fc-001",
    slug: "serum-hialuronico-niacinamida",
    name: "Serum Concentrado Ácido Hialurónico + Niacinamida 10%",
    category: "facial",
    categoryLabel: "Cuidado Facial / Sueros Activos",
    subcategory: "Sueros Dermo-activos",
    tags: ["hialuronico", "niacinamida", "hidratacion", "manchas", "poros"],
    freeShipping: true,
    codAvailable: true,
    shortDescription:
      "Fórmula de alta potencia para hidratación multicapa, reducción visible de poros, manchas y fortalecimiento de la barrera cutánea.",
    description:
      "Combina 3 pesos moleculares de Ácido Hialurónico puro con Niacinamida concentrada al 10% y Zinc PCA al 1%. Penetra las capas profundas de la epidermis para retener la humedad, controlar la producción sebácea y aclarar hiperpigmentaciones, dejando un acabado aterciopelado sin sensación pegajosa.",
    indications:
      "Aplicar 3 a 4 gotas sobre el rostro limpio por la mañana y por la noche antes de tu crema hidratante y protector solar.",
    certifications:
      "Registro sanitario INVIMA. Libre de parabenos, fragancias artificiales y sulfatos.",
    specs: {
      "Volumen": "30ml",
      "Textura": "Gel acuoso de absorción ultra-rápida",
      "Tipo de Piel": "Todo tipo de piel (incluso piel sensible o grasa)",
    },
    presentations: [
      {
        id: "pres-sh-01",
        label: "Frasco Gotero 30ml",
        price: 58000,
        sku: "SER-HN-30",
        inStock: true,
      },
      {
        id: "pres-sh-02",
        label: "Pack Dúo Rutina Día y Noche (60ml)",
        price: 98000,
        sku: "SER-HN-DUO",
        inStock: true,
      },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/Vitaminicos-mesolabpro.webp",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-fc-002",
    slug: "mascarilla-colageno-coreano",
    name: "Mascarilla Hidrocoloide Bio-Colágeno Coreano",
    category: "facial",
    categoryLabel: "Cuidado Facial / Mascarillas",
    subcategory: "Mascarillas & Parches",
    tags: ["colageno", "coreana", "glass skin", "nocturna", "hidratacion"],
    freeShipping: true,
    codAvailable: true,
    shortDescription:
      "Tratamiento intensivo 'Glass Skin' que se vuelve transparente a medida que los bioactivos y el colágeno son absorbidos por la piel.",
    description:
      "Mascarilla viral de alta absorción con colágeno de bajo peso molecular y complejo de ceramidas. Se adhiere perfectamente a los contornos del rostro durante la noche o descansos prolongados (3 a 4 horas), hidratando profundamente y devolviendo la elasticidad y firmeza al cutis apagado.",
    indications:
      "Colocar sobre rostro limpio y dejar actuar de 3 a 5 horas (o durante la noche) hasta que la mascarilla quede transparente.",
    certifications:
      "Dermatológicamente testeada en pieles sensibles.",
    specs: {
      "Presentación": "Caja x4 unidades / Pack x8",
      "Origen": "Tecnología dermo-cosmética coreana",
    },
    presentations: [
      {
        id: "pres-mc-01",
        label: "Caja x4 Mascarillas",
        price: 64000,
        sku: "MSK-COL-04",
        inStock: true,
      },
      {
        id: "pres-mc-02",
        label: "Pack Intensivo x8 Mascarillas (Ahorro)",
        price: 108000,
        sku: "MSK-COL-08",
        inStock: true,
      },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/vitaminicos-mesolabpro.webp",
    featured: false,
    inStock: true,
  },

  // ── 3. CUIDADO CORPORAL & SILUETA ──
  {
    id: "prod-cp-001",
    slug: "gel-reductor-termoactivo",
    name: "Gel Termoactivo Reductor y Moldeador Hot & Cold",
    category: "corporal",
    categoryLabel: "Cuidado Corporal / Reductor",
    subcategory: "Geles Reductores & Masajes",
    tags: ["reductor", "cafeina", "termoactivo", "abdomen", "tonificante"],
    freeShipping: true,
    codAvailable: true,
    shortDescription:
      "Fórmula de doble acción térmica con cafeína pura, centella asiática y algas marinas para estimular la microcirculación y tonificar abdomen y piernas.",
    description:
      "Gel de textura ligera y rápida absorción formulado con fitocomplejos lipolíticos que generan un efecto térmico progresivo. Promueve la eliminación de líquidos retenidos, mejora visiblemente el aspecto de la piel de naranja y reafirma los tejidos en abdomen, cintura, muslos y brazos.",
    indications:
      "Aplicar con masajes circulares vigorosos ascendentes sobre la zona deseada antes de hacer ejercicio o después de la ducha. No requiere enjuague.",
    certifications:
      "Registro sanitario INVIMA vigente.",
    specs: {
      "Contenido": "250g",
      "Activos": "Cafeína 5%, Centella Asiática, Extracto de Algas y L-Carnitina",
    },
    presentations: [
      {
        id: "pres-gr-01",
        label: "Pote 250g Efecto Térmico",
        price: 68000,
        sku: "GEL-HOT-250",
        inStock: true,
      },
      {
        id: "pres-gr-02",
        label: "Dúo 250g (Hot Térmico + Cryo Reafirmante)",
        price: 115000,
        sku: "GEL-DUO-500",
        inStock: true,
      },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/lipoliticos-mesolabpro.webp",
    featured: true,
    inStock: true,
  },

  // ── 4. CUIDADO CAPILAR ──
  {
    id: "prod-cp-002",
    slug: "cepillo-secador-voluminizador-3en1",
    name: "Cepillo Secador y Voluminizador Multifunción 3 en 1",
    category: "capilar",
    categoryLabel: "Cuidado Capilar / Estilizado",
    subcategory: "Cepillos & Estilizado",
    tags: ["secador", "voluminizador", "antifrizz", "cepillo", "ceramica"],
    freeShipping: true,
    codAvailable: true,
    shortDescription:
      "Seca, alisa y da volumen profesional en un solo paso con tecnología de cerámica e iones negativos para eliminar el frizz.",
    description:
      "Diseño ovalado con cerdas desenredantes de nylon y jabalí que permiten levantar la raíz y crear ondas suaves con volumen de peluquería en minutos. Sus generadores de iones negativos saturan el flujo de aire para reducir el tamaño de las gotas de agua, minimizando el daño por calor y aportando brillo duradero.",
    indications:
      "Apto para cabello húmedo o seco. Seleccionar la temperatura deseada (baja, media, alta) y deslizar suavemente de raíz a puntas.",
    certifications:
      "Protección contra sobrecalentamiento y cable giratorio 360°.",
    specs: {
      "Potencia": "1000W",
      "Niveles de Calor": "3 ajustes de temperatura y velocidad",
      "Recubrimiento": "Cerámica turmalina iónica",
    },
    presentations: [
      {
        id: "pres-cs-01",
        label: "Edición Negro & Oro Rosado",
        price: 95000,
        sku: "CEP-SEC-3IN1",
        inStock: true,
      },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/insumos-mesolabpro.webp",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-cp-003",
    slug: "tonico-capilar-romero-biotina",
    name: "Tónico Capilar Anticaída Romero + Biotina Concentrada",
    category: "capilar",
    categoryLabel: "Cuidado Capilar / Crecimiento",
    subcategory: "Tónicos Anticaída & Biotina",
    tags: ["romero", "biotina", "anticaida", "crecimiento", "foliculo"],
    freeShipping: true,
    codAvailable: true,
    shortDescription:
      "Extracto botánico concentrado para reactivar el folículo piloso, frenar la caída por quiebre y engrosar la hebra capilar.",
    description:
      "Tratamiento intensivo sin enjuague a base de aceite esencial de romero quimiotipado, biotina líquida, pantenol y extracto de cola de caballo. Estimula la circulación en el cuero cabelludo, fortalece las raíces débiles y promueve un crecimiento visiblemente más denso.",
    indications:
      "Aplicar directamente con el dosificador en spray sobre el cuero cabelludo limpio. Masajear con las yemas de los dedos durante 2 minutos. No enjuagar.",
    certifications:
      "Fórmula 100% vegana con ingredientes naturales certificados.",
    specs: {
      "Volumen": "120ml",
      "Envase": "Spray dosificador de precisión",
    },
    presentations: [
      {
        id: "pres-tc-01",
        label: "Frasco Spray 120ml",
        price: 52000,
        sku: "TON-ROM-120",
        inStock: true,
      },
      {
        id: "pres-tc-02",
        label: "Dúo Tratamiento 2 Meses (240ml)",
        price: 89000,
        sku: "TON-ROM-DUO",
        inStock: true,
      },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/vitaminicos-mesolabpro.webp",
    featured: false,
    inStock: true,
  },

  // ── 5. LÍNEA PROFESIONAL (Mesoterapia & Uso Profesional) ──
  {
    id: "prod-001",
    slug: "l-carnitina",
    name: "L-Carnitina 500mg",
    category: "profesional",
    categoryLabel: "Línea Profesional / Reductor",
    subcategory: "Lipolíticos & Reductores",
    tags: ["mesoterapia", "l-carnitina", "reduccion", "grasa", "profesional"],
    freeShipping: false,
    codAvailable: true,
    shortDescription:
      "Aminoácido esencial para la oxidación de ácidos grasos. Uso en protocolos de reducción localizada.",
    description:
      "La L-Carnitina es un aminoácido que facilita el transporte de ácidos grasos de cadena larga hacia las mitocondrias, donde son metabolizados para producir energía. En mesoterapia, se utiliza como lipolítico para protocolos de reducción localizada de tejido adiposo. Su mecanismo de acción promueve la beta-oxidación a nivel celular, complementando los procedimientos estéticos corporales.",
    indications:
      "Indicada para procedimientos de mesoterapia corporal enfocados en reducción de adiposidad localizada. Se aplica mediante técnica intradérmica o subcutánea según el protocolo del profesional tratante.",
    certifications:
      "Producto con registro sanitario vigente. Lote con trazabilidad completa y almacenamiento INVIMA.",
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
    category: "profesional",
    categoryLabel: "Línea Profesional / Tiroideo",
    subcategory: "Lipolíticos & Reductores",
    tags: ["mesoterapia", "triac", "lipolitico", "termogenesis"],
    freeShipping: false,
    codAvailable: true,
    shortDescription:
      "Análogo tiroideo de acción lipolítica selectiva. Estimula la termogénesis y el metabolismo de grasas.",
    description:
      "El Triac (ácido triyodotiroacético) es un metabolito de las hormonas tiroideas con actividad lipolítica selectiva. En protocolos de mesoterapia, estimula la lipólisis local y la termogénesis del tejido adiposo sin los efectos sistémicos de las hormonas convencionales.",
    indications:
      "Para uso profesional en procedimientos de mesoterapia corporal. Aplicación intradérmica según protocolo clínico.",
    certifications:
      "Producto con registro sanitario vigente. Lote con trazabilidad completa.",
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
    featured: false,
    inStock: true,
  },
  {
    id: "prod-003",
    slug: "alcachofa",
    name: "Alcachofa",
    category: "profesional",
    categoryLabel: "Línea Profesional / Drenaje",
    subcategory: "Drenaje & Depurativos",
    tags: ["mesoterapia", "alcachofa", "drenaje", "celulitis"],
    freeShipping: false,
    codAvailable: true,
    shortDescription:
      "Extracto con propiedades drenantes y depurativas. Complemento en protocolos de reducción y celulitis.",
    description:
      "El extracto de Alcachofa (Cynara scolymus) posee propiedades hepatoprotectoras, coleréticas y diuréticas. En mesoterapia, se utiliza como coadyuvante en tratamientos de drenaje linfático y reducción de retención de líquidos.",
    indications:
      "Indicada como complemento en protocolos de mesoterapia corporal para drenaje y detoxificación.",
    certifications:
      "Registro sanitario vigente. Trazabilidad completa.",
    specs: {
      Concentración: "2%",
      Volumen: "5ml por ampolleta",
      Vía: "Intradérmica",
      Almacenamiento: "15–25°C",
    },
    presentations: [
      { id: "pres-003a", label: "Ampolleta 5ml", price: 12000, sku: "AL-AMP-5", inStock: true },
      { id: "pres-003b", label: "Frasco 10ml", price: 20000, sku: "AL-FRA-10", inStock: true },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/lipoliticos-mesolabpro.webp",
    featured: false,
    inStock: true,
  },
  {
    id: "prod-004",
    slug: "silicio-organico",
    name: "Silicio Orgánico",
    category: "profesional",
    categoryLabel: "Línea Profesional / Firmeza",
    subcategory: "Firmeza & Reafirmantes",
    tags: ["mesoterapia", "silicio organico", "colageno", "firmeza"],
    freeShipping: false,
    codAvailable: true,
    shortDescription:
      "Regenerador del tejido conectivo. Estimula la síntesis de colágeno y elastina para firmeza cutánea.",
    description:
      "El Silicio Orgánico (monometilsilanotriol) es un elemento estructural del tejido conectivo que interviene en la síntesis de colágeno, elastina y proteoglicanos. Indicado para protocolos de reafirmación cutánea y prevención de flacidez.",
    indications:
      "Procedimientos de reafirmación facial y corporal, estrías y flacidez cutánea.",
    certifications:
      "Producto con registro sanitario vigente. Lote con trazabilidad.",
    specs: {
      Concentración: "0.5% (5mg/ml)",
      Volumen: "5ml por ampolleta",
      Vía: "Intradérmica",
      Almacenamiento: "15–25°C",
    },
    presentations: [
      { id: "pres-004a", label: "Ampolleta 5ml", price: 16000, sku: "SO-AMP-5", inStock: true },
      { id: "pres-004b", label: "Frasco 10ml", price: 28000, sku: "SO-FRA-10", inStock: true },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/lipoliticos-mesolabpro.webp",
    featured: false,
    inStock: true,
  },
  {
    id: "prod-005",
    slug: "tr7",
    name: "TR7 (Cóctel Lipolítico)",
    category: "profesional",
    categoryLabel: "Línea Profesional / Cóctel",
    subcategory: "Cócteles Combinados",
    tags: ["mesoterapia", "tr7", "coctel", "lipolitico"],
    freeShipping: false,
    codAvailable: true,
    shortDescription:
      "Fórmula combinada de 7 principios activos para protocolos avanzados de reducción y modelado corporal.",
    description:
      "TR7 es una formulación sinérgica que integra lipolíticos, drenantes y reafirmantes en una sola solución. Su combinación optimizada permite abordar la adiposidad localizada desde múltiples vías metabólicas.",
    indications:
      "Uso exclusivo profesional en protocolos de mesoterapia corporal combinada.",
    certifications:
      "Registro sanitario vigente. Lote verificado.",
    specs: {
      Composición: "Cóctel 7 activos sinérgicos",
      Volumen: "5ml por ampolleta",
      Vía: "Intradérmica",
      Almacenamiento: "15–25°C",
    },
    presentations: [
      { id: "pres-005a", label: "Ampolleta 5ml", price: 22000, sku: "TR7-AMP-5", inStock: true },
      { id: "pres-005b", label: "Frasco 10ml", price: 38000, sku: "TR7-FRA-10", inStock: true },
    ],
    image: "https://api.mesolabpro.com.co/wp-content/uploads/2026/06/lipoliticos-mesolabpro.webp",
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
