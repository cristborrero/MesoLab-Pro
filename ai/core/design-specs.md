# MesoLab Pro — High-Fidelity Product Design Specifications

This document defines the high-fidelity design specifications for the MesoLab Pro e-commerce platform. The visual, interactive, and structural guidelines below are engineered to establish absolute clinical authority and match the perceived quality standards of **Stripe, Apple, Linear, Shopify Plus**, and modern, premium healthcare brands.

---

## 1. Global Core Foundations & Token System

All pages must adhere strictly to these core layout, typographic, and motion specifications. No ad-hoc values are permitted.

### 1.1 Layout Grid & Containers
*   **Max Width**: `max-w-[1280px]` (80rem) centered (`mx-auto`).
*   **Content Padding**:
    *   Mobile: `px-4` (16px / 1rem)
    *   Tablet: `px-8` (32px / 2rem)
    *   Desktop: `px-12` (48px / 3rem)
*   **Grid Gaps**:
    *   Small groups (cards, inputs): `gap-4` (16px) or `gap-6` (24px)
    *   Section columns: `gap-8` (32px) or `gap-12` (48px)
*   **Section Spacing (`margin-bottom` / `padding-vertical`)**:
    *   Mobile: `py-12` (48px)
    *   Tablet: `py-16` (64px)
    *   Desktop: `py-24` (96px)

### 1.2 Typography System
Three font families with distinct, non-overlapping semantic responsibilities:
1.  **Display & Headings**: **DM Sans** (Geometric Neo-grotesque)
    *   *Weight*: `font-bold` (700) or `font-semibold` (600)
    *   *Role*: Establishes structural page hierarchy and brand voice.
2.  **Body Text & Copy**: **Inter** (Highly legible, neutral grotesque)
    *   *Weight*: `font-normal` (400) or `font-medium` (500)
    *   *Role*: Secondary text, descriptions, paragraphs, forms, and instructional guides.
3.  **Technical & Quantitative Data**: **Space Grotesk** (Monospaced/Geometric hybrid)
    *   *Weight*: `font-medium` (500) or `font-bold` (700)
    *   *Tracking*: `tracking-wider` or `tracking-widest` for technical labels.
    *   *Role*: Specs, concentrations, pricing, quantities, cart counts, and category badges.

### 1.3 Color Palette & Contrast Ratios
Restrained, neutral canvas with high-legibility contrasts passing WCAG AA/AAA.
*   **Primary Brand Navy**: `#324047` (`text-navy` / `bg-navy`)
*   **Teal Accent**: `#00CECE` (`bg-teal`, active badges) — *Only paired with dark navy text/backgrounds to ensure contrast, or as solid backgrounds with white text.*
*   **Teal Dark (Contrast Link)**: `#00A8A8` (`text-teal-dark`) — *Used for text links on light backgrounds to pass WCAG AA contrast requirements.*
*   **Background Canvas**: `#EFEFEF` (`bg-surface`) — *Provides a clean, clinical surface, contrasting cards.*
*   **Borders & Dividers**: `#E5E7EB` (`border-gray-200`) or `rgba(0,0,0,0.06)` for absolute subtlety.

### 1.4 Elevating Perceived Quality (Stripe/Linear Details)
*   **Borders**: Instead of heavy black lines, use single-pixel borders with `border-gray-200` or transparent overlays (`border-white/10` on dark).
*   **Card Styling**: White backgrounds (`bg-white`), thin borders, and soft shadows (`shadow-[0_1px_3px_rgba(0,0,0,0.05)]`) rather than heavy elevations.
*   **Gradients**: Avoid heavy multi-color transitions. Use single-color overlays or very subtle linear blends (e.g., `from-white/50 to-white/0`).
*   **Micro-Interactions**: All interactive states must have `transition-all duration-200 ease-out`. Buttons must slightly change opacity or shift background color. No jarring animation jumps.

---

## 2. Global Core Layout Components

### 2.1 Navigation Header & Trust Strip
The entry point of the site. It must establish trust immediately before the user scrolls.

```
+-------------------------------------------------------------------------------+
|   Envíos a toda Colombia  •  Productos Certificados  •  Soporte WhatsApp     |
+-------------------------------------------------------------------------------+
|  [Logo]   Tienda    Nosotros    Contacto            [Cart Icon (3)]  [WhatsApp] |
+-------------------------------------------------------------------------------+
```

#### Specifications & Layout
*   **Trust Strip**: Full-width, `h-8` (32px), `bg-navy` (`#324047`), text: white, typography: Space Grotesk, size: `text-xs` (12px), tracking: `tracking-wider`.
    *   *Justification*: Combats geographical anxiety in Colombia (guarantees national shipping) and validates medical certification.
*   **Header Bar**: Sticky (`sticky top-0`), `h-16` (64px) on mobile, `h-20` (80px) on desktop.
    *   *Background*: `bg-white/95` with `backdrop-blur-md` and `border-b border-gray-100`.
    *   *Justification*: Promotes premium, modern web aesthetics (reminiscent of Apple/Vercel) while keeping actions sticky.
*   **Main Nav Links**: Typography: Inter, weight: `font-medium`, size: `text-sm` (14px), color: `text-navy` hover: `text-teal-dark`.
*   **Action Row**:
    *   *Cart Trigger*: Simple icon with numeric badge in `bg-teal text-white` (Space Grotesk, `text-xs`, rounded-full).
    *   *WhatsApp Primary CTA*: `bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200`.

### 2.2 Cart Drawer
A slide-out panel that manages order review without redirecting the user, reducing friction.

#### Specifications & Layout
*   **Overlay**: Backdrop blur `bg-black/40 backdrop-blur-sm` to isolate the page behind.
*   **Drawer Panel**: Slide from right (`translate-x-0` on open), desktop width `max-w-md` (448px), full height (`h-screen`), background: `bg-white`, shadow: `shadow-2xl`.
*   **Typography**:
    *   Header: DM Sans `text-lg font-bold text-navy`.
    *   Product Title: DM Sans `text-sm font-semibold`. Variant Label: Space Grotesk `text-xs text-slate-500 uppercase`.
    *   Pricing & Totals: Space Grotesk `font-medium text-sm/base`.
*   **CTA Section**:
    *   *Subtotal Row*: `border-t border-gray-100 pt-4`. Subtotal and shipping alert (e.g., "Envío gratis por compras mayores a $200.000 COP").
    *   *Primary CTA*: "Ir al checkout" button. Full width, `bg-teal text-white font-bold h-12 rounded-md hover:bg-teal-dark transition-colors`.
    *   *Secondary CTA*: "Seguir comprando" link. Centered, `text-xs text-slate-500 hover:text-navy mt-3 transition-colors`.
*   *Justification*: Reduces the purchase funnel by keeping the cart modular and transparent. The free shipping threshold motivates upselling.

### 2.3 Footer
Establishes the structural foundation of the page and final trust reinforcement.

#### Specifications & Layout
*   **Grid Structure**: 4-column layout on desktop, collapsing to 2-column on tablet, and 1-column on mobile.
*   **Visual Styling**: `bg-navy` (`#324047`), text: white/gray, padding: `py-16 pb-8`.
*   **Columns**:
    1.  *Brand Block*: White version of the logo, followed by a short clinical mission statement (Inter, `text-sm`, text-slate-300).
    2.  *Product Navigation*: Links to `/tienda` and each main category.
    3.  *Company Links*: `/nosotros`, `/contacto`, shipping policies.
    4.  *Regulatory & Compliance*: Display of INVIMA certificate references and clinical authority notes.
*   **Bottom Bar**: Divider line (`border-t border-white/10`), copyright notice, and secure payment icons (Wompi, Bold, PSE, Visa, Mastercard, AMEX).
*   *Justification*: Clean footer structure with legal links and payment method security badges is standard for high-end commerce (Shopify Plus/Stripe).

---

## 3. Detailed Page-by-Page Specifications

---

### PAGE 1: Home Page (La Portada Principal)

The home page must establish clinical authority, showcase the brand's aesthetic premium, and direct users to their intent-based category.

```
+-------------------------------------------------------------------------------+
|                                                                               |
|   [Hero Left: DM Sans Bold 48px Header]       [Hero Right: High-end clinical  |
|   "Ciencia en cada ampolleta."                 product layout photography]    |
|   [Inter 18px Subheader]                                                      |
|   [Primary CTA Button]  [Secondary CTA]                                       |
|                                                                               |
+-------------------------------------------------------------------------------+
|                       [4 Category Cards - 4-Col Grid]                         |
|   Lipolíticos       Vitamínicos       Anestésicos       Insumos               |
+-------------------------------------------------------------------------------+
```

#### 1. Hero Section
*   **Layout**: 2-column layout on desktop (50/50 split). Stacks vertically on mobile (visual element on top, copy underneath to maintain mobile browsing context).
*   **Typography**:
    *   Headline: DM Sans, `text-4xl` (36px) mobile / `text-5xl` (48px) desktop, `leading-tight`, `font-bold`, `text-navy`.
    *   Subheadline: Inter, `text-base` (16px) mobile / `text-lg` (18px) desktop, `leading-relaxed`, `text-slate-600`.
*   **Visual Assets**: A high-end clinical layout of ampoules on a white marble or concrete clinical surface with medical-grade soft lighting (no generic stock vectors).
*   **CTAs**:
    *   Primary: "Ver catálogo" → `/tienda` (Solid `bg-navy`, white text, `px-6 py-3 rounded-md font-semibold text-base transition-all hover:bg-slate-700 shadow-sm`).
    *   Secondary: "Hablar por WhatsApp" → WhatsApp prefilled link (Inline flex, `text-teal-dark`, `font-semibold`, hover: underline).
*   *Justification*: Establish medical legitimacy. Clean geometric fonts and soft grey backgrounds denote clinical expertise.

#### 2. Category Grid
*   **Layout**: 4-column grid on desktop, 2-column grid on mobile/tablet.
*   **Card Design**: `bg-white`, border: `border border-gray-100`, border-radius: `rounded-lg` (8px), padding: `p-6`, shadow: `shadow-sm hover:shadow-md transition-shadow duration-200`.
*   **Elements**: Dynamic icon (clinical flask, syringe, vitamin molecule, medical kit) styled in thin teal lines, followed by the category name (DM Sans `font-semibold text-lg`), product count (Space Grotesk `text-xs text-slate-400`), and a "Explorar" text link.
*   *Justification*: Fast routing. Users scan the icons and immediately self-select their category.

#### 3. Featured Products
*   **Layout**: 4-column grid on desktop, horizontal scrolling slider on mobile with `snap-x mandatory` behavior.
*   **Card Design**: Standardized product cards (see section 4.1).
*   *Justification*: Highlights best-sellers quickly. On mobile, horizontal scrolling prevents endless vertical page length.

#### 4. Trust Pillars & Authority
*   **Layout**: 3-column row on desktop, stacked on mobile. Styled on `bg-white` with a top divider.
*   **Structure**:
    *   Pillar 1: *Certificación INVIMA* (Shield icon).
    *   Pillar 2: *Envíos Asegurados* (Truck icon).
    *   Pillar 3: *Asesoría Farmacéutica* (Stethoscope icon).
*   **Typography**: Title: DM Sans `text-base font-bold text-navy`. Description: Inter `text-sm text-slate-500`.
*   *Justification*: Eliminates skepticism. Medical professionals require safety guarantees before ordering.

#### 5. High-Impact Testimonial
*   **Layout**: Centered single block, no carousel to avoid clutter.
*   **Typography**: Quote: Inter `text-lg md:text-xl italic font-medium text-navy/80 leading-relaxed`. Author details: Space Grotesk `text-sm text-navy uppercase tracking-wider font-semibold` (e.g. "DRA. MARÍA DE LA ROSA • DERMATÓLOGA • CLÍNICA CUTIS, BOGOTÁ").
*   *Justification*: Social proof. B2B medical buyers look for endorsement from verified medical colleagues.

---

### PAGE 2: Shop & Category Pages (Catálogo Interactiva)

A clean, unified catalogue page optimized for quick sorting and immediate action.

```
+-------------------------------------------------------------------------------+
|  Inicio / Tienda                                                              |
|  Tienda                                                                       |
|  [ Todos ]  [ Lipolíticos ]  [ Vitamínicos ]  [ Anestésicos ]  [ Insumos ]    |
+-------------------------------------------------------------------------------+
|  +-------------------+  +-------------------+  +-------------------+          |
|  | [Product Image]   |  | [Product Image]   |  | [Product Image]   |          |
|  | L-Carnitina       |  | Triac             |  | Alcachofa         |          |
|  | $85.000 COP       |  | $92.000 COP       |  | $78.000 COP       |          |
|  | [Agregar al Cart] |  | [Agregar al Cart] |  | [Agregar al Cart] |          |
|  +-------------------+  +-------------------+  +-------------------+          |
+-------------------------------------------------------------------------------+
```

#### 1. Page Header & Breadcrumbs
*   **Breadcrumbs**: Inter `text-xs text-slate-400 mb-2`. (e.g., `Inicio > Tienda`).
*   **Page Title**: H1, DM Sans `text-3xl font-bold text-navy mb-4`.
*   **Category Description** (Present on category-specific pages): Inter `text-base text-slate-600 max-w-2xl mt-2`.
*   *Justification*: Provides instant navigation context and keywords for medical SEO.

#### 2. Filter Pills Navigation
*   **Layout**: Horizontal pill buttons. Flex-wrap on desktop, horizontal scrollable container with hidden scrollbar on mobile.
*   **Pill Styling**:
    *   *Default State*: `bg-white border border-gray-200 text-navy text-sm font-medium px-4 py-2 rounded-full hover:border-navy hover:text-navy transition-all cursor-pointer`.
    *   *Active State*: `bg-navy text-white border-navy`.
*   *Justification*: Filters products instantly. Removes standard sidebar filters which take up screen real estate and are unnecessary for an 8-SKU catalog.

#### 3. Product Grid
*   **Layout**: 3-column grid on desktop, 2-column grid on tablet, 1-column on mobile.
*   **Grid Gap**: `gap-6` (24px).
*   *Justification*: Large card targets are readable, clinical, and optimized for mobile tap accuracy.

---

### PAGE 4: Product Detail Page (PDP)

The PDP is the primary conversion engine. It must combine technical specs, variants, pricing, and certifications into a clear hierarchy.

```
+-------------------------------------------------------------------------------+
|  [Breadcrumbs]                                                                |
|  +---------------------------+  +-------------------------------------------+ |
|  |                           |  |  [Badge] LIPOLÍTICO                       | |
|  |                           |  |  L-Carnitina                              | |
|  |                           |  |  [Specs Table]                            | |
|  |    [Product Image]        |  |  Presentación:  (Ampolleta 5ml) (Frasco)  | |
|  |                           |  |  $85.000 COP                              | |
|  |                           |  |  [-] 1 [+]   [ Agregar al Carrito ]       | |
|  +---------------------------+  +-------------------------------------------+ |
|  +--------------------------------------------------------------------------+ |
|  |  [ Tabs: Descripción | Indicaciones | Certificaciones ]                  | |
|  +--------------------------------------------------------------------------+ |
+-------------------------------------------------------------------------------+
```

#### 1. Image Gallery
*   **Layout**: 1-column layout on mobile (horizontal swipe), 50% width column on desktop (sticky left).
*   **Aesthetic**: Large square canvas, background: `#F5F5F5` or `#FFFFFF`, soft natural shadow under the product vial.
*   *Justification*: High-end visual weight focuses attention on the physical product and its premium labeling.

#### 2. Product Information Block (Right Sticky Column)
*   **Badge**: Space Grotesk `text-xs font-semibold uppercase tracking-wider bg-teal/10 text-teal-dark px-3 py-1 rounded-full w-fit mb-3`.
*   **Title**: DM Sans `text-3xl md:text-4xl font-bold text-navy mb-2`.
*   **Price**: Space Grotesk `text-2xl font-bold text-navy mb-4` (e.g. "$85.000 COP").
*   **Specs Table**:
    *   *Styling*: Rounded container `bg-surface rounded-lg p-4 border border-gray-200 mb-6`.
    *   *Typography*: Labels: Inter `text-xs text-slate-500 uppercase`. Values: Space Grotesk `text-sm font-semibold text-navy`.
    *   *Justification*: Displays scientific information (Concentración, Volumen, Registro INVIMA) in an organized, legible structure.
*   **Presentation Selector**:
    *   *Styling*: Horizontal radio cards.
    *   *Variants*: "Ampolleta 5ml" vs "Caja x 10 Ampolletas".
    *   *State*: Selected card gets `border-navy bg-navy/5 text-navy`, unselected card gets `border-gray-200 bg-white text-slate-600`.
    *   *Justification*: Clear commercial choices. Buying by box or individual unit is common for Colombian aesthetic clinics.
*   **Quantity & Add to Cart Container**:
    *   *Stepper*: A 3-button block ([-] [Qty] [+]). Space Grotesk font, border: `border-gray-200 rounded-md`.
    *   *Primary CTA*: "Agregar al carrito". `flex-1 h-12 bg-teal hover:bg-teal-dark text-white font-bold rounded-md transition-colors`.
    *   *WhatsApp Consultation Link*: Below CTA, WhatsApp green icon + "Consultar con un asesor farmacéutico" (Inter, `text-sm`, `text-teal-dark`, hover: underline).
    *   *Justification*: Strong action triggers. WhatsApp link provides a secondary path for B2B buyers who need purchase orders or tax invoicing.

#### 3. Tabs (Descripción, Indicaciones, Certificaciones)
*   **Layout**: Horizontal tab list, content container below. Tab selection updates without page refresh.
*   **Styling**: Tabs: Inter `text-sm font-semibold`. Border bottom on active tab.
*   **Content Details**:
    *   *Descripción*: Paragraph text (Inter, `text-sm`, leading-relaxed, text-slate-600).
    *   *Indicaciones*: Bulleted list with custom checkmark bullets.
    *   *Certificaciones*: High-visibility badge with INVIMA number, manufacture date, and quality assurance seal.
*   *Justification*: Keeps the page clean by hiding secondary content while keeping it accessible.

---

### PAGE 6: Checkout Page (El Checkout Unificado)

A optimized single-page checkout designed to maximize completion rates by removing registration barriers.

```
+-------------------------------------------------------------------------------+
|  Checkout                                                                     |
|  +-----------------------------------+  +----------------------------------+  |
|  |  1. Contacto                      |  |  Resumen del Pedido              |  |
|  |  [ Email ]   [ WhatsApp ]         |  |                                  |  |
|  |  2. Datos de Envío                |  |  L-Carnitina x 2     $170.000    |  |
|  |  [ Nombre ]  [ Dirección ]        |  |  Envío               $15.000     |  |
|  |  [ Departamento ] [ Ciudad ]      |  |  Total               $185.000    |  |
|  |  3. Pago                          |  |  [ Trust Badges ]                |  |
|  |  [ Wompi / Bold Secure Widget ]   |  |                                  |  |
|  +-----------------------------------+  +----------------------------------+  |
+-------------------------------------------------------------------------------+
```

#### 1. Information Form (Left Column - 60%)
*   **Guest Checkout Default**: No forced login. Includes a checkbox to save data for next time.
*   **Form Inputs**:
    *   *Styling*: `h-11 border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-navy focus:border-navy transition-all w-full`. Label is small and positioned above the input (Inter, `text-xs font-semibold uppercase text-slate-500 mb-1`).
    *   *Department Selector*: Uses a styled native select containing all 32 departments of Colombia to ensure correct shipping addresses.
*   **Form Sections**:
    *   Section 1: Contacto (Email + Celular/WhatsApp).
    *   Section 2: Datos de Envío (Nombre, Dirección, Departamento, Ciudad).
    *   Section 3: Pago (Secure integration via Wompi/Bold checkout widget).
*   *Justification*: Reduces cart abandonment. Placing forms on the left and order summaries on the right is the standard ecommerce convention.

#### 2. Order Summary Sidebar (Right Column - 40%)
*   **Position**: Sticky on desktop, scrolls with page. Stacks on top as an expandable summary block on mobile.
*   **Styling**: `bg-white border border-gray-100 rounded-lg p-6 shadow-sm`.
*   **List Items**: Thumbnail (64x64px), product name, variant string, subtotal (Space Grotesk, right-aligned).
*   **Financial Details**: Subtotal, shipping fee, tax (IVA), total. Typography: Space Grotesk `text-base font-bold text-navy`.
*   **Trust Indicators**: Secure lock icon + text: "Tus datos se transmiten de forma encriptada bajo certificado SSL" (Inter, `text-xs`, `text-slate-500`).
*   *Justification*: Real-time financial clarity. No surprises at checkout prevents cart abandonment.

---

### PAGE 7: About Us (Nuestra Historia y Ciencia)

Establishes the scientific authority and operational legitimacy of MesoLab Pro.

#### 1. Hero Block
*   **Layout**: Centered text column, no generic stock photos.
*   **Typography**: H1, DM Sans `text-4xl md:text-5xl font-bold text-navy max-w-3xl leading-tight mb-4`.
*   *Justification*: Sets a clean, authoritative tone.

#### 2. The Narrative (Story & Mission)
*   **Layout**: 2-column text block.
*   **Typography**: Paragraphs: Inter `text-base text-slate-600 leading-relaxed max-w-xl`. First letters highlighted (Drop cap) or key metrics in Space Grotesk.
*   *Justification*: Tells a professional story that builds trust.

#### 3. Core Values & Pillars
*   **Layout**: 3-column grid.
*   **Pillars**:
    *   *Pureza*: Guaranteed ingredient concentrations.
    *   *Trazabilidad*: Direct monitoring of batches from production to clinic.
    *   *Compromiso*: Technical support for aesthetic practitioners.
*   *Justification*: Validates the brand's core values.

#### 4. Certifications & Compliance
*   **Layout**: Grey banner section `bg-surface rounded-xl p-8 border border-gray-200`.
*   **Details**: Display of certified laboratory numbers, INVIMA registrations, and storage temperatures (15-25°C).
*   *Justification*: Scientific proof. Essential for medical and clinical professionals.

---

### PAGE 8: Contact Page (Contacto Directo)

A communication hub optimized for custom pricing requests and support.

#### 1. Contact Form (Left Column)
*   **Inputs**: Name, Email, Celular, Message, Professional Category (Dropdown: Médico Estético, Esteticista, Distribuidor).
*   **Submit Button**: "Enviar mensaje" (DM Sans, `bg-navy text-white font-bold h-12 rounded-md hover:bg-slate-700 transition-colors cursor-pointer`).
*   *Justification*: Collects structured leads for large orders.

#### 2. Direct Contacts (Right Column)
*   **Layout**: Stacked high-visibility cards.
*   **Featured Card**: WhatsApp Business.
    *   *Styling*: `bg-[#25D366]/5 border border-[#25D366]/20 p-6 rounded-lg`.
    *   *Link*: "Chatear con un asesor ahora" (Text link, `#25D366 font-bold hover:underline`).
*   **Additional Cards**: Email (`info@mesolabpro.com.co`), business hours (Lunes a Sábado, 8:00 AM - 6:00 PM).
*   *Justification*: Lowers the friction of initial contact. WhatsApp Business is the preferred channel for Colombian aesthetics providers.

---

## 4. Product Card Component Specification (Global)

The primary modular component used across pages.

```
+---------------------------+
|                           |
|       [Product Image]     |
|       bg-surface 1:1      |
|                           |
+---------------------------+
|  [Badge] LIPOLÍTICO       |
|  L-Carnitina              |
|  Ampolleta 5ml            |
|  $85.000 COP              |
|                           |
|  [ AGREGAR AL CARRITO ]   |
+---------------------------+
```

### 4.1 Card Layout & Spacing
*   **Container**: `bg-white border border-gray-100 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-[2px] flex flex-col h-full`.
*   **Visual Area (Top)**: Aspect ratio `aspect-square` (1:1), background `#F9FAFB`. Product image centered.
*   **Text & Info (Bottom)**: Padding `p-4 flex-1 flex flex-col`.
    *   *Category*: Space Grotesk `text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1`.
    *   *Name*: DM Sans `text-base font-semibold text-navy hover:text-teal-dark mb-1 transition-colors`.
    *   *Specs*: Inter `text-xs text-slate-500 mb-2` (e.g. "Ampolleta 5ml / Caja x 10").
    *   *Price*: Space Grotesk `text-sm font-bold text-navy mb-4`.
    *   *Button*: "Agregar" or "Agregar al carrito". `h-9 bg-navy hover:bg-slate-700 text-white font-semibold text-xs rounded-md w-full transition-all mt-auto`.
*   *Justification*: Reusable component with high visual uniformity. Clear hierarchy ensures immediate readability.

---

## 5. Micro-Interactions & State Specification

Every interactive element must have distinct, smooth states to communicate premium performance.

| Element | Default State | Hover State | Active/Focus State |
|---|---|---|---|
| **Primary CTA (Navy)** | `bg-navy text-white` | `bg-slate-700` | `ring-2 ring-navy/20 scale-[0.98]` |
| **Secondary CTA (Teal)** | `bg-teal text-white` | `bg-teal-dark` | `ring-2 ring-teal/20 scale-[0.98]` |
| **Pills (Filters)** | `bg-white border-gray-200` | `border-navy text-navy` | `bg-navy text-white border-navy` |
| **Form Inputs** | `border-gray-300 bg-white` | `border-gray-400` | `border-navy ring-1 ring-navy bg-white` |
| **Product Card** | `shadow-none border-gray-100` | `shadow-md -translate-y-[2px]` | `scale-[0.99]` |
| **Nav Links** | `text-navy` | `text-teal-dark` | `underline underline-offset-4 decoration-2` |
