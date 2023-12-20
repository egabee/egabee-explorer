/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'mandy': '#e35050',
        'dark-purple': '#081A51',
        'darker-purple': '#040f30',
        'light-white': 'rgba(255,255,255,0.18)',
        'dark-gray': '#202020',
        'athens-gray': '#ededef',
        'athens-gray-50': '#777778',
        'egabee-gray': '#232323',
        'egabee-gray-10': '#393939',
        'iron': '#e2e2e4',
        'text-light-gray': '#cbcbcb',
        'gray-border': '#cbcbcb',
        'light-green': '#46d39e',
        'dark-green': '#23694f',
        'light-yellow': '#fecb0b',
        'supernova': '#fecb0b',
        'supernova-30': '#fedb54',
        'light-yellow-20': '#fed53c',
        'dark-yellow': '#aa892f',
        'dark-yellow-1': '#d5ac28',
        'woodsmoke': '#161618',
        'woodsmoke-50': '#0b0b0c',
        'shark': '#2E2E32',
        'shark-10': '#232326',
        'shark-40': '#1c1c1e',
        'shark-50': '#171719',
        'shark-60': '#ababad',
        'shark-tint-30': '#333335',
        'shark-tint-10': '#39393c',
        'shark-tint-20': '#58585b',
        'mmist': '#9a999f',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FAFBFD",
        special: "#861B90",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}