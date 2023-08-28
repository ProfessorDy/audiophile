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
        'light': '#F1F1F1',
        'very-light': '#FAFAFA',
        'secondary': '#fbaf85',
      },
    },
  },
  plugins: [],          
}
export default config
