# TASK: Create Premium Reusable Component

Create a modular, type-safe, and highly polished UI component. The component must be built using React and TypeScript, adhering to best practices of component design.

---

## ARCHITECTURE PRINCIPLES

### 1. Composition Over Configuration
- Avoid building "god components" with dozens of boolean props (e.g., `<Button isIcon isPrimary hasLeftIcon isLoading ... />`).
- Pair structural elements together using React composition.

### 2. Compound Components
- For complex elements (e.g., Selects, Modals, Tabs), use the Compound Component pattern with React context to manage internal state implicitly.
- Example:
  ```tsx
  <Select value={value} onChange={setValue}>
    <SelectTrigger />
    <SelectContent>
      <SelectItem value="1">Option 1</SelectItem>
    </SelectContent>
  </Select>
  ```

---

## IMPLEMENTATION CHECKLIST

- **Strict Props Type**: Every prop must have a clear TypeScript type definition. Extend native HTML props where appropriate (e.g., `interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>`).
- **Interactive States**: Explicitly style Hover, Focus, Active, and Disabled states. Ensure transitions are smooth.
- **Accessibility (a11y)**:
  - Use semantic HTML tags.
  - Set appropriate ARIA roles and attributes (`role="dialog"`, `aria-expanded`, etc.).
  - Ensure keyboard navigation works out of the box (e.g., Enter/Space to select, Escape to close).
- **Tailwind Merging**: Use a utility like `clsx` and `tailwind-merge` (e.g., `cn(...)`) to merge custom className props with internal styles safely.
