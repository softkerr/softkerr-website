import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Brand colors - safelist to ensure dynamic classes work
    'bg-brand-gold',
    'bg-brand-gold/15',
    'bg-brand-gold/25',
    'bg-brand-gold/30',
    'bg-brand-gold/40',
    'bg-brand-gold/60',
    'text-brand-gold',
    'border-brand-gold',
    'border-brand-gold/30',
    'border-brand-gold/60',
    'border-brand-gold/40',
    'shadow-brand-gold/30',
    'from-brand-gold/25',
    'to-brand-gold/10',
    'group-hover:text-brand-gold',
    'bg-brand-blue',
    'bg-brand-blue/15',
    'bg-brand-blue/25',
    'bg-brand-blue/30',
    'bg-brand-blue/40',
    'bg-brand-blue/60',
    'text-brand-blue',
    'border-brand-blue',
    'border-brand-blue/30',
    'border-brand-blue/40',
    'border-brand-blue/60',
    'shadow-brand-blue/30',
    'from-brand-blue/25',
    'to-brand-blue/10',
    'group-hover:text-brand-blue',
    'bg-brand-violet',
    'bg-brand-violet/15',
    'bg-brand-violet/25',
    'bg-brand-violet/30',
    'bg-brand-violet/40',
    'bg-brand-violet/60',
    'text-brand-violet',
    'border-brand-violet',
    'border-brand-violet/30',
    'border-brand-violet/40',
    'border-brand-violet/60',
    'shadow-brand-violet/30',
    'from-brand-violet/25',
    'to-brand-violet/10',
    'group-hover:text-brand-violet',
    'group-hover:text-brand-violet',
    'bg-brand-pink',
    'bg-brand-pink/15',
    'bg-brand-pink/25',
    'bg-brand-pink/30',
    'bg-brand-pink/40',
    'bg-brand-pink/60',
    'text-brand-pink',
    'border-brand-pink',
    'border-brand-pink/30',
    'border-brand-pink/40',
    'border-brand-pink/60',
    'shadow-brand-pink/30',
    'from-brand-pink/25',
    'to-brand-pink/10',
    'group-hover:text-brand-pink',
    'bg-brand-green',
    'bg-brand-green/15',
    'bg-brand-green/25',
    'bg-brand-green/30',
    'bg-brand-green/40',
    'bg-brand-green/60',
    'text-brand-green',
    'border-brand-green',
    'border-brand-green/30',
    'border-brand-green/40',
    'border-brand-green/60',
    'shadow-brand-green/30',
    'from-brand-green/25',
    'to-brand-green/10',
    'group-hover:text-brand-green',
    'bg-brand-cyan',
    'bg-brand-cyan/15',
    'bg-brand-cyan/25',
    'bg-brand-cyan/30',
    'bg-brand-cyan/40',
    'bg-brand-cyan/60',
    'text-brand-cyan',
    'border-brand-cyan',
    'border-brand-cyan/30',
    'border-brand-cyan/40',
    'border-brand-cyan/60',
    'shadow-brand-cyan/30',
    'from-brand-cyan/25',
    'to-brand-cyan/10',
    'group-hover:text-brand-cyan',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme color palette
        background: {
          DEFAULT: '#02021e', // main background (almost black with subtle blue tint)
          secondary: '#14142d', // secondary background (cards, containers)
        },
        text: {
          primary: '#EAEAEA', // primary text (almost white)
          secondary: '#9CA3AF', // secondary text (body, descriptions)
          muted: '#6B7280', // muted text (captions, hints)
        },
        accent: {
          yellow: '#F0B90B', // main accent (CTA buttons, highlights)
          BtnYellow: '#FCD535;', // main accent (CTA buttons, highlights)
          yellowHover: '#FACC15', // hover state for yellow buttons
          blue: '#2563EB', // secondary accent (icons, UI details)
          purple: '#8B5CF6', // alternative accent (gradients, effects)
        },
        brand: {
          gold: '#F0B90B', // Primary brand color - gold/yellow
          blue: '#2563EB', // Secondary brand color - blue
          violet: '#8B5CF6', // Tertiary brand color - violet/purple
          pink: '#EC4899', // Accent color - pink
          green: '#16B981', // Success/positive color - emerald green
          cyan: '#06B6D4FF', // Info/neutral color - cyan
          red: '#EF4444', // Error/negative color - red
        },
        border: {
          subtle: '#1F2937', // subtle dividers and borders
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          width: '6px',
          height: '6px',
        },
        '.scrollbar-thumb-white\\/10::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '3px',
        },
        '.scrollbar-thumb-transparent::-webkit-scrollbar-thumb': {
          backgroundColor: 'transparent',
        },
        '.scrollbar-thumb-transparent:hover::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        '.hover\\:scrollbar-thumb-white\\/10:hover::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        '.scrollbar-track-transparent::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  darkMode: 'class',
};

export default config;
