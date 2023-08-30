import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#D87D4A',
        'dark': '#101010',
        'hero': '#181818;',
        'light': '#F1F1F1',
        'very-light': '#FAFAFA',
        'secondary': '#fbaf85',
        'span': '#D87D4A',
      },
      backgroundImage : {
        'hero-mobile': "url('../public/home/mobile/image-header.jpg')",
        'hero-tablet': "url('../public/home/tablet/image-header.jpg')",
        'hero-desktop': "url('../public/home/desktop/image-hero.jpg')",
        'pattern': "url('../public/home/desktop/pattern-circles.svg')",
        'zx7-mobile': "url('../public/home/mobile/image-speaker-zx7.jpg')",
        'zx7-tablet': "url('../public/home/tablet/image-speaker-zx7.jpg')",
        'zx7-desktop': "url('../public/home/desktop/image-speaker-zx7.jpg')",
      },
    },
  },
  plugins: [],          
}
export default config
