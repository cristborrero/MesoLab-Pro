# TASK: Interface Audit & Redesign

Analyze the existing UI implementation and systematically elevate it to a premium, world-class standard. Do not make cosmetic changes; refactor the layout, spacing, and hierarchy.

---

## REDESIGN WORKFLOW

### Step 1: Audit & Identify Sins
Locate and catalog:
- **Visual Clutter**: Decorative borders, unnecessary backgrounds, complex icons.
- **Weak Hierarchy**: Headings that blend with body text, primary actions that look like secondary ones.
- **Inconsistent Spacing**: Varying margins between sections, cramped text, uneven paddings.
- **Amateur Details**: Hard black shadows, bright primary gradients, missing hover/interactive states.

### Step 2: Establish the Token Foundation
Ensure the UI relies on a strict set of design tokens:
- **Color Palette**: Replace arbitrary color values with a refined, cohesive scale.
- **Spacing Scale**: Enforce a strict multiplication scale (e.g., 4px/8px grid).
- **Corner Radii**: Enforce consistent rounded corners.

### Step 3: Refactor the Layout
- **Increase Whitespace**: Double the spacing around text and sections. Allow the design to breathe.
- **Strengthen Typography**: Make headlines bold and compact. Demote secondary text by color (`text-slate-500` or `text-neutral-400`) and size.
- **Consolidate Elements**: Combine redundant boxes/borders. Use whitespace instead of lines to separate sections.

### Step 4: Add Micro-Interactions
- Add smooth transitions (`transition-all duration-200`) to hover, focus, active, and loading states.
- Ensure buttons slightly shift background/opacity, links get subtle underlines, and focus states show clean rings.
