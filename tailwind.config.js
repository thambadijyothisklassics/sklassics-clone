/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b1424',
        foreground: '#fafafa',
        card: '#101c30',
        border: '#1e2a40',
        muted: { DEFAULT: '#1a2438', foreground: '#9ca3af' },
        brand: { DEFAULT: '#ef4444', foreground: '#ffffff' },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
