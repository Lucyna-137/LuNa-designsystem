import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'host-grotesk': ['Host Grotesk', 'sans-serif'],
        'ibm-plex-sans-jp': ['IBM Plex Sans JP', 'sans-serif'],
      },
      colors: {
        grey: {
          50: '#F2F2F0',
          300: '#67697C',
          900: '#010109',
          white: '#FFFFFF',
        },
      },
      fontSize: {
        'display-xxl': ['112px', { lineHeight: '1', letterSpacing: '-4.48px' }],
        'heading-medium': ['32px', { lineHeight: '1.3', letterSpacing: '-0.64px' }],
        'heading-small': ['24px', { lineHeight: '1.4', letterSpacing: '-0.48px' }],
        'text-large': ['18px', { lineHeight: '1.4' }],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(119.396deg, rgb(252, 193, 136) 0%, rgb(112, 66, 210) 65.068%, rgb(46, 0, 142) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      spacing: {
        '37': '37px',
        '41': '41px',
      },
    },
  },
  plugins: [],
}
export default config 