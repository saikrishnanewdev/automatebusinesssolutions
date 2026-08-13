import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020B19',
          900: '#031638',
          800: '#06245A',
          700: '#0B3B8C',
          600: '#1252C4',
        },
        brand: {
          orange: '#FF9800',
          'orange-dark': '#E68200',
          'orange-light': '#FFB74D',
          navy: '#06245A',
          'deep-navy': '#031638',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(255, 152, 0, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 152, 0, 0.6)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;