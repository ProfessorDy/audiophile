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
    },
  },
  plugins: [],          
}
export default config
