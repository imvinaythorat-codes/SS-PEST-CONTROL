export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B5E20',
          light: '#2E7D32',
          dark: '#0D3B12',
        },
        accent: {
          yellow: '#FFA000',
          orange: '#FF6F00',
        },
        neutral: {
          offwhite: '#F5F7F5',
          light: '#E8F5E9',
          medium: '#546E7A',
          dark: '#263238',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}