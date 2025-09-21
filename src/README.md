# Modular CSS Architecture

This website's CSS has been refactored from a monolithic stylesheet into a modular, component-based CSS architecture for better maintainability and organization.

## Directory Structure

```
src/
├── header/
│   └── header.css      # Navigation and header styles
├── hero/
│   └── hero.css        # Hero section with logo animation
├── movement/
│   └── movement.css    # Movement section styles
├── mission/
│   └── mission.css     # Mission cards and grid
├── about/
│   └── about.css       # About section and letter modal
├── initiatives/
│   └── initiatives.css # Community programs section
├── events/
│   └── events.css      # Events with flip card animations
├── get-involved/
│   └── get-involved.css# Social media section
├── team/
│   └── team.css        # Team member cards
├── footer/
│   └── footer.css      # Footer styles
├── styles/
│   ├── base.css        # Global styles and utilities
│   ├── main.css        # Main CSS file that imports all components
│   └── README.md       # This documentation
└── scripts/
    └── script.js       # Optimized essential JavaScript functions
```

## Usage

The main CSS file (`src/styles/main.css`) imports all component styles in the correct order. The `index.html` file has been updated to reference this single CSS file.

## Key Features Preserved

- ✅ All CSS animations and transitions
- ✅ Flip card functionality for events
- ✅ Modal functionality for founder's letter
- ✅ Mobile responsive design
- ✅ Brand color consistency (#D2691E orange theme)
- ✅ Interactive hover effects
- ✅ Background watermark text effects

## Script Optimization

The JavaScript has been optimized to include only essential functionality:

**✅ Kept (Essential):**
- Letter modal open/close functionality
- Event flip card interactions
- Envelope hover effects
- Modal outside-click closing

**❌ Removed (Unnecessary):**
- Smooth scrolling (replaced with CSS `scroll-behavior: smooth`)
- Header background scroll effect (header uses fixed styling)
- Redundant event listeners

**Benefits:** Reduced file size, faster loading, cleaner code maintenance

## Benefits of This Structure

1. **CSS Maintainability**: Each section has its own CSS file
2. **Organization**: Clear separation of styling concerns
3. **Debugging**: Easier to locate and fix CSS issues in specific sections
4. **Performance**: Single CSS file load via imports
5. **Team Collaboration**: Multiple developers can work on different CSS sections
6. **Future-Ready**: Prepared for component-based frameworks if needed

## Development Workflow

To modify styling for a specific section:
1. Locate the CSS file in the `src/[section]/` folder
2. Edit the CSS file as needed
3. Changes will automatically be reflected in the main website
4. HTML content is still edited directly in `index.html`

## Future Enhancements

- Lazy loading of component CSS files
- JavaScript component system
- Build process for CSS optimization
- Component documentation