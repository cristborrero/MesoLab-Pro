# MASTER PROMPT — MESOLAB PRO

## Premium E-commerce Redesign, Product Design & Design System

### 1. ROLE & MISSION

Act as a world-class multidisciplinary digital product agency based in London, combining the expertise of:

* Creative Director and Brand Strategist
* Principal Product Designer
* Senior UX/UI Designer
* E-commerce Conversion Rate Optimisation (CRO) Specialist
* Design Systems Architect
* Senior Frontend Engineer
* SEO and Web Performance Specialist
* Accessibility and Quality Assurance Engineer

Your mission is to transform the existing Mesolab Pro website into a premium, sophisticated, high-trust e-commerce experience for professional aesthetic technology and skincare products.

The attached reference image is the approved visual direction. Study it carefully before making any changes.

**The objective is not to copy a screenshot. The objective is to translate its visual language, information architecture and design principles into a complete, production-ready website.**

The final experience should feel like a premium professional beauty-tech brand: clinically precise, editorially sophisticated, modern, trustworthy and commercially effective.

Avoid generic Shopify-template aesthetics, excessive gradients, unnecessary animations, excessive glassmorphism and superficial cosmetic redesigns.

### 2. NON-NEGOTIABLE RULE: AUDIT BEFORE IMPLEMENTATION

Before editing the code:

1. Inspect the existing repository, framework, package manager, routes, layouts, components, styles, assets, product data and integrations.
2. Identify the current homepage implementation and understand how the store actually works.
3. Inspect the existing logo, brand assets, product images, fonts and available content.
4. Identify the existing product, category, cart, checkout, search, WhatsApp, customer account and payment implementations, where applicable.
5. Determine which components can be reused, which need refactoring and which genuinely need to be created.
6. Identify broken images, placeholder content, inconsistent spacing, responsive defects and accessibility issues.
7. Review existing SEO metadata, image optimisation, loading behaviour and performance configuration.
8. Produce a concise implementation plan with priorities and dependencies.

Do not replace the existing stack, introduce a new framework, remove working integrations or rebuild the entire application without a demonstrated technical reason.

**Preserve all existing business functionality.** Visual improvements must not break product inventory, prices, variants, add-to-cart actions, checkout, payment methods, analytics, customer data or integrations.

If an essential capability is missing, document the gap rather than pretending it exists.

### 3. CREATIVE DIRECTION

Use the attached image as the primary visual reference.

The design direction is:

**Clinical Luxury + Beauty Technology + Editorial Commerce.**

The brand should communicate:

* Professional expertise
* Scientific precision and technological innovation
* Confidence in purchasing decisions
* Premium product presentation
* Personalised assistance
* A clean, contemporary Colombian e-commerce experience

The visual language should combine generous whitespace, sophisticated typography, carefully controlled teal accents, premium photography, precise alignment and consistent component behaviour.

The website must look designed by one coherent team, not assembled from unrelated templates.

### 4. DESIGN SYSTEM

Create a documented, reusable Design System before applying the redesign across the website.

#### 4.1 Colour tokens

Use the following proposed palette as the initial direction. Inspect the existing brand assets before finalising the tokens.

* Primary Graphite: #26373B
* Pure White: #FFFFFF
* Clinical Teal: #00B9B5
* Mist Grey: #F3F5F5
* Secondary Text: #647579
* Subtle Border: #E4EAEA
* Success: accessible green
* Warning: accessible amber
* Error: accessible red

Define semantic tokens for page backgrounds, elevated surfaces, primary and secondary text, links, primary and secondary actions, borders, focus states, success, warning and error.

Do not use the accent colour indiscriminately. Reserve it for meaningful interactions, highlights and brand moments.

Check text contrast against WCAG 2.2 AA requirements. Adjust colour combinations where necessary without compromising the visual identity.

Implement the tokens using the project's existing styling architecture, preferably CSS custom properties or the equivalent already in use.

#### 4.2 Typography

Establish a complete typographic scale for:

* Display and hero headings
* Page titles
* Section headings
* Product titles
* Body copy
* Supporting descriptions
* Labels and metadata
* Prices
* Buttons and navigation
* Legal and footnote text

Use a contemporary, highly legible sans-serif family for interface elements. An elegant editorial serif may be introduced selectively for major headlines if it enhances the approved reference direction.

Prefer existing licensed assets or suitable open-source fonts. Use responsive typography with fluid sizing where appropriate.

Avoid excessively small text, arbitrary font sizes and inconsistent font weights.

#### 4.3 Spacing and layout

Create a consistent spacing scale based on a 4px or 8px rhythm.

Define:

* Main content width
* Desktop, tablet and mobile gutters
* Section spacing
* Grid gaps
* Card padding
* Form spacing
* Header dimensions
* Border radii
* Border thickness
* Shadow levels
* Responsive breakpoints

Use a consistent container system. Avoid the excessively wide or compressed layouts that can make premium websites feel unbalanced.

#### 4.4 Component states

Every interactive component must have appropriate states:

* Default
* Hover
* Focus-visible
* Active
* Disabled
* Loading
* Error
* Success, where applicable

Transitions should be subtle and purposeful. Respect reduced-motion preferences.

### 5. COMPONENT LIBRARY

Create or refactor reusable components following the existing project's conventions.

The component library should cover:

* Site header and primary navigation
* Mobile navigation
* Search field and search results
* Shopping cart indicator
* WhatsApp contact action
* Primary, secondary and text buttons
* Hero section
* Category cards
* Product cards
* Product badges
* Price display
* Ratings and reviews, when real data exists
* Product variants and selectors
* Add-to-cart controls
* Trust-benefit items
* Testimonial cards
* Editorial image-and-text sections
* Consultation banners
* Newsletter forms, only if appropriate
* Footer navigation
* Breadcrumbs
* Product filters and sorting, where supported
* Empty, loading and error states
* Toasts and confirmation messages
* Accessible dialogs and drawers, where needed

Avoid monolithic components and unnecessary duplication. Reuse components without forcing unrelated sections into the same inflexible template.

### 6. HOMEPAGE REDESIGN

Implement the following homepage architecture, adapting it to the actual catalogue and business priorities.

#### Section 01 — Premium header

Create a refined, clean header with:

* Existing Mesolab Pro logo
* Main navigation
* Shop categories
* Search
* Cart with a functional item count
* WhatsApp assistance

Use clear visual hierarchy and comfortable spacing.

A sticky header may be implemented if it improves usability and does not consume excessive mobile viewport space.

On mobile, provide a well-designed navigation menu, easily accessible search and clear shopping-cart access.

#### Section 02 — Editorial hero

Create a visually striking hero inspired by the reference image.

Suggested headline:

“Tecnología estética. Confianza en cada elección.”

Suggested supporting copy:

“Equipos y soluciones cosméticas seleccionados para profesionales que buscan calidad, asesoría especializada e información clara para elegir.”

Primary CTA: “Explorar productos”

Secondary CTA: “Hablar con un asesor”

Use premium photography showing real aesthetic equipment, a professional treatment environment or an appropriate skincare scene.

Choose image placement and text alignment based on the actual assets. Preserve sufficient contrast, a clear reading order and a strong focal point.

Do not embed essential copy into the image itself.

Do not invent certifications, clinical outcomes or unsupported product claims.

#### Section 03 — Trust strip

Create a compact row of trust signals, such as:

* Envíos en Colombia
* Compra segura
* Asesoría especializada
* Información de garantía

Only display claims that the business can substantiate. Link to relevant shipping, payment and warranty information when available.

#### Section 04 — Browse by category

Create four visually consistent category cards, corresponding to the existing catalogue where applicable:

* Cuidado Facial
* Beauty Tech
* Cuidado Corporal
* Cuidado Capilar

Each card should contain a relevant image, category title, concise supporting copy and a clear navigation affordance.

Make the entire card clickable, with an accessible name and visible keyboard focus.

Use a consistent image ratio and deliberate cropping. Avoid empty white blocks or inconsistent card heights.

#### Section 05 — Best sellers and featured products

Create a premium product grid with four columns on wide desktop screens, adapting responsively to smaller screens.

Each card should prioritise:

1. Product photography
2. Product name
3. Brand or product category
4. Short, useful descriptor
5. Real price and currency
6. Real review information, if available
7. Relevant availability or promotional badge
8. Add-to-cart action

Use authentic product data from the existing system.

Do not fabricate prices, discounts, review counts, availability, sales rankings or product specifications.

Ensure that product images load correctly. Provide appropriate aspect ratios, responsive image sizes, lazy loading below the fold and meaningful alternative text.

The add-to-cart interaction must work with the existing cart architecture.

#### Section 06 — Why Mesolab Pro

Create an editorial brand section combining an appropriate image with concise content about the company's real offering, expertise and approach.

Use existing, verified company information.

Avoid invented company history, years of experience, partner brands, customer totals or international credentials.

If suitable evidence is unavailable, keep the section focused on the real service proposition rather than manufacturing authority.

#### Section 07 — Testimonials and social proof

Use real, authorised customer reviews where available.

Present them with clear typography, restrained visual treatment and accessible controls if a carousel is justified.

Do not create fictional testimonials, fabricated star ratings or false verification labels.

If sufficient authentic reviews are unavailable, design a flexible component that can remain unpublished until genuine content is provided.

#### Section 08 — Personalised consultation

Create a strong, visually distinctive consultation banner.

Suggested headline:

“¿Necesitas asesoría personalizada?”

Supporting copy:

“Te ayudamos a encontrar los productos adecuados para tus necesidades.”

Primary CTA: “Escríbenos por WhatsApp”

Secondary CTA: “Contáctanos”

Use the actual WhatsApp destination and contact details configured in the project. Do not invent phone numbers or dead links.

#### Section 09 — Institutional footer

Create a sophisticated dark graphite footer with:

* Brand identity and concise description
* Product categories
* Customer support
* Company information
* Contact details
* Social media links
* Shipping, returns and warranty information
* Privacy policy, cookie policy and terms
* Real payment methods, where applicable

Use the existing business data and valid destinations. Ensure excellent readability and a responsive column layout.

### 7. PRODUCT DETAIL AND COMMERCE EXPERIENCE

Do not limit the work to the homepage if shared components or obvious usability defects affect the rest of the shopping journey.

Review and improve, within the scope of the existing architecture:

* Product detail pages
* Product galleries
* Product specifications
* Variants and availability
* Shipping and warranty information
* Cart feedback
* Cart and checkout usability
* Search and category navigation
* Empty and error states

Product information should answer practical questions before purchase.

Never replace working payment, stock, checkout or customer-account functionality with decorative mock interactions.

If checkout is operated by an external provider, preserve its integration and clearly identify which parts of the experience can be improved locally.

### 8. RESPONSIVE DESIGN

Implement and test a complete responsive experience.

Suggested validation widths:

* Mobile: 360px and 390px
* Tablet: 768px
* Laptop: 1024px and 1280px
* Desktop: 1440px and above

These are validation targets, not a requirement to create a separate rigid layout for every width.

Use fluid grids and content-driven breakpoints.

Verify:

* No horizontal overflow
* No clipped headings or buttons
* Correct product-grid behaviour
* Appropriate image crops
* Readable typography
* Touch-friendly controls
* Mobile navigation usability
* Accessible dialogs and drawers
* Consistent spacing
* Stable page layout during image loading

Treat mobile as a first-class experience, not a reduced desktop screenshot.

### 9. ACCESSIBILITY

Follow WCAG 2.2 AA as the target.

Implement:

* Semantic HTML
* Logical heading hierarchy
* Keyboard navigation
* Visible focus indicators
* Accessible labels and names
* Sufficient contrast
* Descriptive link and button text
* Meaningful image alternatives
* Accessible form errors
* Reduced-motion support
* Correct dialog and menu semantics

Do not rely on colour alone to communicate product status, errors or availability.

### 10. SEO AND PERFORMANCE

Preserve existing SEO configuration and improve it where needed.

Review:

* Page titles and meta descriptions
* Canonical URLs
* Heading structure
* Product and category URLs
* Product structured data
* Sitemap and robots configuration
* Image formats and sizing
* Internal linking
* Open Graph metadata
* Core Web Vitals
* JavaScript bundle weight
* Layout shifts
* Font loading

Use semantic content and descriptive image alternatives.

Do not introduce unnecessary dependencies or client-side JavaScript for static presentation.

Optimise images responsibly and prioritise the actual largest contentful element. Avoid lazy-loading the primary hero image if doing so delays its display.

Set performance goals based on the real deployment environment and measure results rather than assuming they have been achieved.

### 11. CONTENT AND DATA INTEGRITY

All user-facing copy should be natural, professional Colombian Spanish.

Use the brand's existing product data and business information.

If data is unavailable, use an explicitly identified development placeholder only where necessary, and never present it as a genuine business claim.

Keep content separate from presentation where the current architecture supports it.

Preserve the existing CMS, API contracts and data model unless changes are necessary and explicitly justified.

### 12. IMPLEMENTATION QUALITY

Follow the existing framework and coding conventions.

Requirements:

* Reuse the current package manager.
* Use existing dependencies whenever practical.
* Keep components modular and maintainable.
* Avoid duplicated styling and arbitrary CSS overrides.
* Implement responsive states deliberately.
* Preserve existing routes and integrations.
* Do not hardcode dynamic product data into reusable components.
* Do not expose credentials or secrets.
* Do not introduce unrelated refactors.
* Keep changes scoped and reviewable.
* Avoid adding dependencies for simple functionality.

If the project uses a design token framework, extend it consistently rather than creating a parallel styling system.

### 13. TESTING AND ACCEPTANCE CRITERIA

After implementation:

1. Run the project's existing linting, type-checking and build commands where available.
2. Fix errors introduced by the changes.
3. Verify that all product images render correctly.
4. Test navigation and internal links.
5. Test search, filters and sorting where supported.
6. Test product variants and add-to-cart behaviour.
7. Test cart quantity changes and removal.
8. Verify checkout handoff and payment integration without placing unintended real orders.
9. Test WhatsApp links and contact actions.
10. Validate responsive layouts at the target widths.
11. Inspect keyboard navigation and focus visibility.
12. Review console errors and failed network requests.
13. Check for layout shifts and obvious performance regressions.
14. Confirm that product data, prices and existing SEO routes remain intact.

Do not claim a test passed unless it was actually executed.

If browser automation or visual regression tooling is available, use it. Otherwise, document which checks were performed manually and which remain outstanding.

### 14. EXECUTION STRATEGY

Work in controlled phases.

**Phase A — Audit**

Inspect the project and produce a short implementation plan.

**Phase B — Design foundation**

Define design tokens, typography, spacing, layout rules and reusable components.

**Phase C — Homepage**

Implement the complete homepage according to the approved visual direction.

**Phase D — Commerce consistency**

Improve shared product components and related purchase flows without disrupting existing functionality.

**Phase E — Responsive and accessibility refinement**

Validate desktop, tablet and mobile experiences.

**Phase F — QA and handover**

Run the available checks, fix regressions and document the results.

Complete each phase coherently. Do not stop after producing a plan, a mockup or a static prototype if implementation access is available.

Do not ask for approval at every minor design decision. Use professional judgement, make reversible decisions and document assumptions. Ask only when a missing business fact or a potentially destructive technical change requires clarification.

### 15. FINAL DELIVERABLES

At completion, provide:

1. A concise summary of the redesign.
2. A list of modified and created files.
3. The implemented design tokens and component architecture.
4. The responsive behaviour and accessibility improvements.
5. The preserved business integrations.
6. The tests executed and their actual results.
7. Any remaining defects, assumptions or missing business data.
8. A clear distinction between implemented functionality and visual elements that still require integration.

### FINAL QUALITY STANDARD

The result must look and behave like a carefully art-directed, premium professional e-commerce brand.

It should be visually sophisticated, commercially clear, accessible, responsive, technically maintainable and consistent across the customer journey.

Prioritise clarity over decoration, authenticity over invented credibility, consistency over isolated visual tricks and measurable usability over subjective aesthetic claims.

**Use the attached Mesolab Pro homepage image as the visual north star. Audit the actual project, build a coherent Design System, implement the redesign and verify the result without breaking the existing store.**
