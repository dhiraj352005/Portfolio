/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark': '#060b17',
        'card-dark': '#0c1527',
        'border-dark': '#1e293b',
        'cyan-accent': '#00f2fe',
        'blue-accent': '#4facfe',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyan-blue-gradient': 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 242, 254, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(79, 172, 254, 0.3)',
        'card-glow': '0 10px 30px -10px rgba(0, 242, 254, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
