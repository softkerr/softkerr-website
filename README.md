# SoftKerr - Modern Web Development Agency Website

A comprehensive, multi-page agency website built with Next.js, inspired by SoftKerr.com design principles. Features modern animations, 3D elements, and a clean, professional aesthetic.

## 🚀 Features

### Core Technologies

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** for styling with custom design system
- **Framer Motion** for smooth animations and micro-interactions
- **React Three Fiber** for 3D hero scenes and interactive elements
- **React Intersection Observer** for scroll-triggered animations

### Design System

- **SoftKerr Inspired Palette**: Clean white backgrounds with charcoal text, deep blue accents, and bright yellow highlights
- **Typography**: Inter font family for modern, readable text
- **Responsive Design**: Mobile-first approach with seamless desktop scaling
- **Accessibility**: Respects `prefers-reduced-motion` and includes proper ARIA labels

### Key Components

#### 🎨 Link Component

Reusable call-to-action button with text scroll animation:

- Text slides up and fades out on hover
- Identical text enters from bottom
- Supports multiple variants (primary, secondary, outline)
- Configurable sizes (sm, md, lg)

```tsx
<Link href="/contact" variant="primary" size="lg">
  Get Started Today
</Link>
```

#### 📱 Scroll Reveal Animations

Smooth scroll-triggered animations throughout the site:

- Staggered fade and translate effects
- Configurable direction, delay, and duration
- Intersection Observer for performance

#### 🌟 3D Hero Scene

Interactive 3D elements using React Three Fiber:

- Floating geometric shapes with physics-based animations
- Auto-rotating camera controls
- Mobile fallback with static SVG animations
- Lazy loading for optimal performance

### Page Structure

#### 🏠 Home Page

- **Hero Section**: 3D animated background with compelling headline
- **Trusted Companies**: Logo showcase of client partnerships
- **Services Preview**: 4-card grid highlighting core offerings
- **Featured Projects**: Portfolio showcase with hover effects
- **Testimonials**: Client reviews with avatars and company info
- **CTA Section**: Final conversion-focused call-to-action

#### 🛠️ Services Pages (Planned)

- Detailed service descriptions for Design and Development
- Process workflows and methodologies
- Pricing information and packages

#### 💼 Projects/Case Studies (Planned)

- Filterable project grid
- Individual project detail pages
- Technology stack showcases
- Results and impact metrics

#### 👥 Team Page (Planned)

- Team member profiles
- Cooperation models and workflows
- Pricing structures and FAQ

#### 📚 Resources/Blog (Planned)

- Article listing with categories
- Individual blog post pages
- Search and filtering capabilities

#### 💰 Pricing Page (Planned)

- Service packages and pricing tiers
- Feature comparisons
- Custom quote requests

#### 📞 Contact Page (Planned)

- Contact form with validation
- Company information and location
- Multiple contact methods

## 🎯 Performance & Optimization

### 3D Scene Optimization

- Dynamic imports with `{ ssr: false }` for React Three Fiber
- Instancing for repeated geometries
- Mobile detection with static fallbacks
- Performance monitoring with frame rate limits

### Image Optimization

- Next.js Image component with lazy loading
- Unsplash integration for placeholder images
- WebP format support with fallbacks
- Responsive image sizing

### Animation Performance

- Hardware-accelerated transforms
- Reduced motion support for accessibility
- Efficient scroll listeners with throttling
- CSS-based animations where possible

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd softkerr
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
softkerr/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with Header/Footer
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles and Tailwind
│   │   ├── services/          # Services pages
│   │   ├── projects/          # Project showcase pages
│   │   ├── team/              # Team and cooperation pages
│   │   ├── resources/         # Blog and resources
│   │   ├── pricing/           # Pricing information
│   │   └── contact/           # Contact form and info
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Link.tsx
│   │   │   └── ScrollReveal.tsx
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/          # Page sections
│   │   └── three/             # 3D components
│   │       └── Hero3D.tsx
│   ├── lib/                   # Utility functions
│   └── data/                  # Static data and content
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
└── next.config.ts            # Next.js configuration
```

## 🎨 Customization

### Design Tokens

Update colors and spacing in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      charcoal: { /* Custom charcoal palette */ },
      blue: { /* Custom blue palette */ },
      yellow: { /* Custom yellow palette */ },
    }
  }
}
```

### Content Management

- Update company information in `src/data/`
- Replace placeholder images with your assets
- Modify service offerings and project showcases
- Customize team member profiles

### 3D Scene Customization

Modify the Hero3D component to:

- Change geometric shapes and materials
- Adjust animation speeds and patterns
- Add custom 3D models (GLTF/GLB)
- Implement different lighting setups

## 📱 Mobile Behavior

### Responsive Design

- **Mobile**: Simplified layouts, reduced animation complexity
- **Tablet**: Balanced feature set with touch-optimized interactions
- **Desktop**: Full feature set with hover states and complex animations

### 3D Scene Handling

- **Desktop**: Full 3D scene with interactive controls
- **Mobile**: Static SVG fallback with CSS animations
- **Performance**: Automatic quality adjustment based on device capabilities

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Deploy with automatic CI/CD

### Other Platforms

- **Netlify**: Configure build command as `npm run build`
- **AWS Amplify**: Use Next.js SSG configuration
- **Docker**: Use the included Dockerfile for containerization

## 🔧 Development Notes

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Code Quality

- ESLint configuration for code consistency
- TypeScript for type safety
- Prettier for code formatting (recommended)

### Performance Monitoring

- Core Web Vitals tracking
- 3D scene performance metrics
- Image loading optimization
- Animation frame rate monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [SoftKerr](https://SoftKerr.com)
- 3D graphics powered by [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- UI components built with [Tailwind CSS](https://tailwindcss.com)

---

**Ready to launch your digital presence?** This template provides everything you need to create a stunning, professional agency website that converts visitors into clients.
