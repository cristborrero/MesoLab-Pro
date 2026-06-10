# World-Class Design Quality Checklist

Use this checklist to verify the implementation of any component, page, or interface before declaring it finished.

## 1. Grid & Spacing
- [ ] **Unified Scale**: All paddings, margins, and gaps use the defined spacing system (e.g., 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px).
- [ ] **Breathing Room**: Layout has ample whitespace. Sections are separated by at least 48px to 96px on desktop.
- [ ] **Alignment**: All elements align perfectly to a vertical grid. No ad-hoc offset values.
- [ ] **Inner vs. Outer**: Inner padding of a component (e.g., card) is strictly smaller than the outer spacing between components.

## 2. Typography
- [ ] **Scale & Hierarchy**: Font sizes, weights, and line heights are clearly differentiated (e.g., H1 Bold 32px, H2 Semibold 24px, Body Regular 16px).
- [ ] **Line Length**: Body text columns are limited to a max-width of 60ch to 70ch for comfortable reading.
- [ ] **Contrast**: Text has high readability. No light grey text on white backgrounds or dark grey on black.
- [ ] **Spacing**: Line-heights are proportional (1.2 for headers, 1.5 - 1.6 for body copy). Letter-spacing is adjusted (slightly tighter for large headings).

## 3. Colors
- [ ] **Restraint**: The interface uses a maximum of 3 core colors (Primary, Accent, Base Background/Neutral).
- [ ] **Contrast Ratio**: Meets WCAG AA or AAA guidelines for text contrast.
- [ ] **Intentional Accents**: Accent colors are reserved strictly for interactive components (CTAs, links) or key indicators.

## 4. Components & Consistencies
- [ ] **Radii Match**: Component corner radiuses are consistent (e.g., inputs and buttons have the same `rounded-md`, cards have `rounded-lg`).
- [ ] **Borders**: Border colors are subtle and consistent (e.g., thin `border-slate-200` or `border-neutral-800` in dark mode).
- [ ] **States**: Hover, Focus, Active, and Disabled states are styled and transition smoothly (e.g., `transition-all duration-200`).
- [ ] **Focus Rings**: Custom focus indicators are present for keyboard accessibility.

## 5. Responsiveness & Touch
- [ ] **Flexibility**: The layout shifts gracefully from mobile to desktop using container queries or clean breakpoints.
- [ ] **Touch Targets**: On mobile, interactive elements are at least 44px x 44px to prevent accidental taps.
- [ ] **Text Scale**: Typographic sizes adjust correctly for smaller screens (e.g., huge headers shrink to fit without wrapping awkwardly).
