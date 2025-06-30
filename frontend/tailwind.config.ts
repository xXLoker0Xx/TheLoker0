import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground, 0 0% 98%))',
        },
        secondary: 'hsl(var(--secondary))',
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground, 0 0% 9%))',
        },
        border: 'hsl(var(--border))',
        // Colores dieselpunk/wasteland
        rustOrange: 'hsl(var(--rust-orange))',
        copper: 'hsl(var(--copper))',
        brass: 'hsl(var(--brass))',
        steel: 'hsl(var(--steel))',
        dirt: 'hsl(var(--dirt))',
        ash: 'hsl(var(--ash))',
        wastelandBg: 'hsl(var(--wasteland-bg))',
        darkerBg: 'hsl(var(--darker-bg))',
        smoke: 'hsl(var(--smoke))',
        // Colores para compatibilidad
        text: 'hsl(var(--foreground))',
        textMuted: 'hsl(var(--foreground) / 0.7)',
        primaryHover: 'hsl(var(--primary) / 0.8)',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        full: '9999px',
      },
      boxShadow: {
        softGlow: '0 4px 32px 0 rgba(56, 189, 248, 0.15)',
        rustGlow: '0 0 20px hsl(var(--rust-orange) / 0.4)',
        copperGlow: '0 0 20px hsl(var(--copper) / 0.4)',
        brassGlow: '0 0 20px hsl(var(--brass) / 0.4)',
        steelInset: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
        wastelandDeep: '0 8px 32px rgba(0, 0, 0, 0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
        diesel: ['Bebas Neue', 'Impact', 'Arial Black', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        heading: ['Oswald', 'Impact', 'sans-serif'],
        industrial: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'rust-pulse': 'rust-pulse 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'smoke': 'smoke 8s ease-in-out infinite',
      },
      keyframes: {
        'rust-pulse': {
          '0%': { 
            textShadow: '0 0 2px hsl(var(--rust-orange) / 0.8), 0 0 4px hsl(var(--rust-orange) / 0.6)' 
          },
          '100%': { 
            textShadow: '0 0 4px hsl(var(--rust-orange) / 1), 0 0 8px hsl(var(--rust-orange) / 0.8), 0 0 12px hsl(var(--rust-orange) / 0.6)' 
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'smoke': {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0px) scale(1)' },
          '50%': { opacity: '0.6', transform: 'translateY(-20px) scale(1.1)' },
        }
      },
    },
  },
  plugins: [],
}

export default config
