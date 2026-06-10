# TASK: Create a Premium SaaS Dashboard

Create a modern, data-dense, yet clean SaaS dashboard. The dashboard must prioritize clarity, fast information scanning, and logical layout partitioning.

---

## INTERFACE STRUCTURE

### 1. Main Navigation Layout
- **Sidebar**: Left-aligned, collapsible sidebar with workspace selector, core navigation links, user profile at the bottom, and hotkey indicators.
- **Top Bar**: Search bar (with CMD+K indicator), notification bell, and action buttons.

### 2. Header Section
- **Content**: Page title, breadcrumbs, and primary action button (e.g., "+ Create New").

### 3. Metric Cards (KPIs)
- **Grid**: 3 or 4 columns.
- **Details per card**:
  - Tiny, neutral label (e.g., "Monthly Recurring Revenue").
  - Bold, prominent metric value (`font-mono` or tabular numerals).
  - Tiny trend indicator (e.g., green `+12% vs last month` or red `-2.4%`).
  - Optional: subtle sparkline chart.

### 4. Core Content Area
- **Grid Layout**: 2/3 width for primary data visualization/tables, 1/3 width for recent activity/secondary charts.
- **Data Tables**:
  - Crisp columns, clear headers, proper text alignment (left for text, right for money/numbers).
  - Hover states on rows.
  - Paginated or clean virtualized scroll.

---

## KEY DASHBOARD DETAILS
- **Tabular Numerals**: Always use `font-mono` or `tnum` for numbers so they align vertically in tables.
- **Status Indicators**: Use tiny status badges (solid dot + text) for states (e.g., Green for "Active", Amber for "Pending", Grey for "Draft").
- **Empty States**: Design beautiful empty states (minimal icon, clean headline, direct action button) if no data exists.
