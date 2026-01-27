/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#D22B2B',
        'dark-red': '#8B1A1A',
        'paper-light': '#F5E9D3',
        'primary-green': '#2E8B57',
        'dark-green': '#1F5C3A',
        'brand-black': '#0A0A0A',
      },
      fontFamily: {
          'tech': ['"Share Tech Mono"', 'monospace'],
          'typewriter': ['"Special Elite"', 'monospace'],
          'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      }
    }
  },
  plugins: [],
}
