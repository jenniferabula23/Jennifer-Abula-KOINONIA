/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0d14',
          soft: '#161a24',
          mute: '#5d6472',
          faint: '#8a909c',
        },
        paper: {
          DEFAULT: '#ffffff',
          warm: '#fafaf8',
          cool: '#f5f7fa',
        },
        line: {
          DEFAULT: '#e6e8ee',
          strong: '#d4d8e1',
        },
        navy: {
          DEFAULT: '#0b1f4d',
          deep: '#071a3d',
          soft: '#163a8a',
        },
        brand: {
          50: '#f7f7f8',
          100: '#ececee',
          200: '#dcdce0',
          300: '#a1a1aa',
          400: '#71717a',
          500: '#18181b',
          600: '#0a0a0b',
          700: '#0a0a0b',
          800: '#050506',
          900: '#000000',
          glow: '#18181b',
        },
        ice: '#f6f6f7',
        royal: {
          DEFAULT: '#1937b8',
          deep: '#0f2585',
          soft: '#eef2ff',
        },
      },
      fontFamily: {
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.055em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,13,20,0.04), 0 8px 24px -12px rgba(10,13,20,0.10)',
        float: '0 2px 6px rgba(10,13,20,0.04), 0 24px 48px -20px rgba(10,13,20,0.18)',
        lift: '0 14px 34px -14px rgba(10,13,20,0.32)',
        glass: '0 1px 0 rgba(255,255,255,0.7) inset, 0 20px 50px -24px rgba(10,13,20,0.18)',
        glow: '0 0 0 1px rgba(10,13,20,0.06), 0 18px 40px -18px rgba(10,13,20,0.25)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
    },
  },
  plugins: [],
};
