/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'persian-green': {
          50: '#effefc',
          100: '#c9fef5',
          200: '#92fded',
          300: '#54f4e2',
          400: '#21e0d0',
          500: '#08c4b7',
          600: '#039b94',
          700: '#077e79',
          800: '#0b6462',
          900: '#0f5251',
        },
        'vampire-black': '#070707',
        'rich-black': '#030303',
        'jet-black': '#101010',
        discord: '#7289da',
        'discord-hover': '#5e6ecd',
      },
      backgroundImage: {
        hero: "url('../../public/hero-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
