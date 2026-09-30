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
        dark: '#091520',      // color-1: Dark navy / Text primary
        accent: '#4995D1',    // color-4: Accent blue
        sand: '#BDB185',      // color-5: Text light / sand
        'bg-light': '#F5F4F0',// color-11: Warm off-white background
        'bg-white': '#FFFFFF',// color-12: Clean white
        primary: '#007BFF',   // --primary: Text Primary / Active Blue
        secondary: '#6C757D', // --secondary: Slate gray secondary
        border: {
          light: '#E6E6E6',
          medium: '#E4E4E4',
          subtle: '#CFCFCF',
          DEFAULT: '#CCCCCC',
          dark: '#C5C6C6',
        }
      },
      borderRadius: {
        sm: '4px',
        full: '50%',
        DEFAULT: '4px',
      },
      fontFamily: {
        sans: ['sofia-pro', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '18px' }],
        'sm': ['15px', { lineHeight: '22px' }],
        'base': ['16px', { lineHeight: '26px' }],
        'body-lg': ['26px', { lineHeight: '38px' }],
        'lg': ['40px', { lineHeight: '48px' }],
        'xl': ['68px', { lineHeight: '80px' }],
      },
      spacing: {
        'space-1': '4px',
        'space-2': '8px',
        'space-3': '10px',
        'space-4': '12px',
        'space-5': '15px',
        'space-6': '16px',
        'space-7': '20px',
        'space-8': '30px',
        'space-9': '35px',
        'space-10': '40px',
        'space-11': '50px',
        'space-12': '60px',
        'space-13': '80px',
        'space-14': '110px',
      }
    },
  },
  plugins: [],
};
export default config;