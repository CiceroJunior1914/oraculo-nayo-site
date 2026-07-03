import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ameixa: {
          DEFAULT: '#5C2844',
          lt: '#7A3D5E',
        },
        ouro: {
          DEFAULT: '#BF9A52',
          lt: '#D4B57A',
        },
        blush: '#E3C8BB',
        creme: '#F7F1E7',
        marfim: '#FDFAF5',
        grafite: '#2E2828',
        taupe: '#96837A',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        jost: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 4px 24px rgba(92,40,68,0.08)',
        'warm-md': '0 8px 40px rgba(92,40,68,0.12)',
      },
      letterSpacing: {
        widest2: '0.28em',
        widest3: '0.18em',
      },
    },
  },
  plugins: [],
}

export default config
