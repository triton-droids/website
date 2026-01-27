/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#000000',
        'main-text': '#F5F5F5',
        'muted-text': '#A3B2C2',
        'accent': '#FECE00',
        'card-bg': '#2A2B2D',
        'button-text': '#101010',
        'role-blue': '#007bff',
      },
      fontFamily: {
        sans: ['"Proxima Nova"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'button': '6em',
        'card': '2rem',
      },
    },
  },
  plugins: [],
}
