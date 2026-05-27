import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0ecff',
          200: '#c1d9ff',
          300: '#a2c6ff',
          400: '#5a97ff',
          500: '#1a64ff',
          600: '#0052cc',
          700: '#0F4C97',
          800: '#083a8a',
          900: '#061e4d',
        },
        accent: {
          50: '#fffbf0',
          100: '#fff7e6',
          200: '#ffefd0',
          300: '#ffe7b8',
          400: '#ffcf80',
          500: '#ffb847',
          600: '#ffa500',
          700: '#D9B56D',
          800: '#c9a055',
          900: '#a67d3a',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mystical': 'linear-gradient(135deg, #0F4C97 0%, #1a2847 50%, #0F4C97 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
