# MatrixHero Component

A Matrix-style code rain animation component for the hero section, built with Canvas 2D API and React.

## Features

### Visual Effects

- **Falling Code Characters**: Columns of programming-related characters falling from top to bottom
- **Neon Glow Effect**: Bright yellow (#FFD600) glow matching the site's accent color
- **Character Flickering**: Characters randomly change to create a "living" effect
- **Mouse Interaction**: Characters glow stronger and columns react near the mouse cursor
- **Fade Effect**: Characters fade towards the tail of each column for depth

### Character Set

The animation includes a diverse set of characters:

- Binary digits (0, 1)
- Code symbols ({}, <>, [], (), etc.)
- Programming keywords (fn, if, js, ts, go, py, etc.)
- Modern code snippets (=>, &&, ||, !=, ++, etc.)
- Letters and numbers (A-Z, 2-9)
- Special characters (@, #, $, %, etc.)

### Performance Optimizations

- **Canvas 2D**: Uses HTML5 Canvas for high-performance rendering
- **RequestAnimationFrame**: Smooth 60fps animation loop
- **Off-screen Culling**: Characters outside viewport are skipped
- **Delta Time**: Frame-rate independent animation timing
- **Device Pixel Ratio**: High-DPI display support

### Accessibility & Responsive Design

- **Reduced Motion**: Respects `prefers-reduced-motion` setting with static fallback
- **Mobile Fallback**: Static pattern for mobile devices to preserve battery
- **Keyboard Navigation**: No interference with keyboard navigation
- **Screen Readers**: Animation is purely decorative and doesn't affect content

## Usage

```tsx
import MatrixHero from '@/components/three/MatrixHero';

// Basic usage
<MatrixHero />

// With custom className
<MatrixHero className="custom-styles" />
```

## Customization

### Colors

The component uses Tailwind CSS custom colors:

- Background: `#0B0B0F` (bg-background)
- Characters: `#FFD600` (accent-yellow)

### Animation Parameters

You can modify these values in the component:

- `fontSize`: Character size (default: 16px)
- `columnWidth`: Space between columns (default: fontSize \* 0.8)
- `speed`: Fall speed range (default: 1-4)
- `flickerRate`: Character change frequency (default: 10% every 100ms)
- `mouseInfluenceRadius`: Mouse interaction distance (default: 150px)

### Character Set

Modify the `MATRIX_CHARS` array to customize the falling characters.

## Browser Support

- Modern browsers with Canvas 2D support
- Graceful degradation for older browsers
- Mobile-optimized with static fallback

## Performance Notes

- Optimized for 60fps on modern devices
- Automatically adjusts to device pixel ratio
- Memory efficient with object pooling for columns
- Minimal CPU usage when tab is not visible (requestAnimationFrame pausing)
