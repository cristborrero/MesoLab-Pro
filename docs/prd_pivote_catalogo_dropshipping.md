# Product Requirements Document (PRD): Pivote Estratégico a eCommerce Multicategoría de Belleza y Dropshipping en Colombia

**Proyecto:** MesoLab Pro  
**Versión:** 1.0  
**Fecha:** Octubre 2026  
**Estado:** Propuesta / En revisión  
**Ubicación:** `docs/prd_pivote_catalogo_dropshipping.md`

---

## 1. Visión y Justificación del Negocio

### 1.1. Contexto y Problema Actual
MesoLab Pro nació centrado exclusivamente en ampollas e insumos de mesoterapia. Si bien este segmento ofrece legitimidad médica, su mercado objetivo es reducido (profesionales de la salud/estética con licencia) y los ciclos de recompra B2B son más lentos y limitados geográficamente.

### 1.2. La Oportunidad
El mercado masivo de belleza, cosmética dermo-activa y dispositivos estéticos en casa (Beauty Tech) en Colombia registra tasas de crecimiento sostenidas. Adoptar el modelo **Dropshipping** con **Pago Contra Entrega (PCE)** permite:
- Escalar las ventas a nivel nacional sin inmovilizar capital en inventario.
- Validar productos virales en Meta Ads y TikTok Ads con velocidad.
- Mantener la mesoterapia como una línea premium/especializada dentro de un ecosistema más amplio y rentable.

### 1.3. Propuesta de Valor y Reposicionamiento de Marca
- **De:** *"Proveedor exclusivo de mesoterapia para cabinas"*
- **A:** *"MesoLab Pro: Cuidado estético avanzado, tecnología y bienestar para potenciar tu belleza real."*
- **Tono de Marca:** Elegante, confiable, científico pero accesible y seductor. Mantiene la seriedad y el respaldo de un "Laboratorio", diferenciándose del típico dropshipper anónimo de baja calidad.

---

## 2. Segmentación de Clientes y Buyer Personas

1. **Persona B2C Principal ("Mariana", 24–45 años):**
   - Busca soluciones rápidas y visibles para piel, manchas, líneas finas, reducción de medidas o cuidado capilar.
   - Compra impulsada por anuncios de video en TikTok e Instagram.
   - Exige facilidad: prefiere pagar cuando el paquete llega a la puerta de su casa (Pago Contra Entrega).
2. **Persona B2B / Pro ("Dra. Carolina", Médica / Esteticista):**
   - Sigue acudiendo a MesoLab Pro por insumos de mesoterapia, aparatología profesional y kits de aplicación en cabina.

---

## 3. Taxonomía del Catálogo y Categorías

Se reestructura el menú y la tienda en las siguientes 5 categorías principales:

1. **Cuidado Facial & Skincare:**
   - Sueros concentrados (Vitamina C, Retinol, Ácido Hialurónico, Niacinamida).
   - Mascarillas de colágeno, parches hidrocoloide y limpiadores botánicos.
2. **Beauty Tech & Aparatología Portátil:**
   - Dispositivos de fototerapia LED y microcorrientes.
   - Cepillos limpiadores faciales sónicos y depiladoras IPL portátiles.
3. **Cuidado Corporal & Silueta:**
   - Geles reductores térmicos, cremas reafirmantes y copas masajeadoras.
   - Fajas moldeadoras invisibles de uso diario.
4. **Cuidado Capilar:**
   - Tratamientos anticaída y aceleradores de crecimiento (biotina, romero).
   - Cepillos secadores/voluminizadores y termoprotectores.
5. **Línea Especializada / Mesoterapia:**
   - Ampolletas lipolíticas, vitamínicas y biorevitalizantes (L-Carnitina, Silicio, TR7, etc.) para uso guiado y cabina.

---

## 4. Requisitos Funcionales (FR)

### FR-1: Arquitectura de Navegación y Home Page
- **Hero Section Dinámico:** Titular atractivo enfocado en beneficios reales (*"Tecnología y cosmética avanzada para transformar tu rutina diaria"*), llamado a la acción directo a la tienda y sello de *"Envío a toda Colombia · Paga al recibir"*.
- **Vitrina de Categorías Visuales:** Accesos rápidos con fotografía de alta calidad a Facial, Tech, Corporal y Capilar.
- **Sección de Best Sellers (Productos Ganadores):** Productos destacados con badges de *"Más Vendido"*, *"Envío Gratis"* y *"Pago Contra Entrega"*.
- **Prueba Social:** Testimonios con fotos/videos y valoraciones de 5 estrellas.

### FR-2: Ficha de Producto Orientada a la Conversión (Direct-to-Consumer)
- **Galería multimedia:** Soporte para carrusel de imágenes y video corto demostrativo (formato TikTok/Reels).
- **Selector de Ofertas / Bundles:**
  - Opción 1: Lleva 1 unidad.
  - Opción 2: Lleva 2 unidades con 20% OFF (Opción más popular).
  - Opción 3: Kit completo con 35% OFF.
- **Call-to-Action Dual:**
  - Botón principal: *"Pedir y Pagar Contra Entrega"* (abre formulario express).
  - Botón secundario: *"Comprar por WhatsApp"* (inicia chat con asesor con mensaje prellenado del producto).

### FR-3: Formulario Express de Pago Contra Entrega (Checkout de 1 Paso)
- Formulario modal o embebido optimizado para Colombia:
  - Nombre completo
  - Teléfono / WhatsApp (campo obligatorio)
  - Departamento (select dinámico de los 32 departamentos)
  - Municipio / Ciudad (select dependiente)
  - Dirección de entrega y Barrio
  - Notas para el repartidor (opcional)
- Resumen claro: Total a pagar en efectivo o transferencia al recibir.

### FR-4: Integración con Plataforma Dropshipping / Logística
- Conexión vía Webhook o API con **Dropi** / **Rocketfy** o recepción centralizada en WooCommerce.
- Envío de notificación automática por WhatsApp de confirmación de pedido antes del despacho.

---

## 5. Requisitos No Funcionales (NFR)

- **NFR-1 (Rendimiento Mobile):** Más del 85% del tráfico provendrá de teléfonos móviles a través de Meta/TikTok. Tiempo de carga interactivo (LCP) inferior a 2.5s en conexiones 4G móviles.
- **NFR-2 (Claridad y Confianza Visual):** Diseño limpio, paleta de colores sofisticada (tonos médicos/cosméticos: blanco puro, verde esmeralda/turquesa suave, acentos dorados/neutros), tipografía legible y libre de saturación visual.
- **NFR-3 (Accesibilidad y Seguridad):** Cumplimiento de políticas de privacidad y protección de datos (Habeas Data en Colombia).

---

## 6. Plan de Ejecución y Próximos Pasos

1. **Fase 1 (Inmediata):**
   - Aprobar la nueva taxonomía y la propuesta de copy.
   - Ajustar textos en páginas estáticas (`/nosotros`, Home, Menú de navegación).
   - Actualizar tipos de producto y categorías en el código (`src/lib/types.ts` y catálogo base).
2. **Fase 2:**
   - Incorporar productos ganadores de belleza en el catálogo con fichas persuasivas.
   - Implementar el botón/modal express de Pago Contra Entrega.
3. **Fase 3:**
   - Integración con Dropi/Rocketfy y vinculación del píxel de Meta/TikTok para campañas pagadas.
