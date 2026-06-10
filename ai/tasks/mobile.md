# TASK: Create Mobile-First Premium Experience

Design and build a mobile-first responsive layout. A great mobile experience does not just shrink a desktop layout; it re-architects layout patterns to fit the physical constraints of hand interaction and screen size.

---

## MOBILE GUIDELINES

### 1. Touch Targets
- **Size**: All buttons, links, and form fields must have a minimum interactive size of 44px x 44px (the physical standard for finger taps).
- **Spacing**: Ensure sufficient margin between interactive elements to prevent mis-taps.

### 2. Navigation Patterns
- **Primary Nav**: Use a bottom tab bar for core app navigation (easily reachable by thumbs) rather than burying everything in a hamburger menu.
- **Back Actions**: Provide clear, top-left back buttons, or support swipe-to-back gestures.

### 3. Typography & Scanning
- **Size**: Minimum body text size of 16px to prevent mobile browsers from auto-zooming on form input focus.
- **Contrast**: High readability under bright lighting conditions (outdoor use).
- **Sizing Scale**: Keep headings compact to prevent single words from wrapping to new lines and breaking the layout.

### 4. Interactive Feel
- **Feedback**: Provide immediate active states (e.g., scale down slightly on tap: `active:scale-[0.98] transition-transform`).
- **Input Types**: Set correct HTML input attributes (e.g., `inputMode="numeric" pattern="[0-9]*"` for numbers to trigger numeric keyboards).
