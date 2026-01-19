import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
                 extend: {
                    colors: {
                        primary: "#3b82f6", // Vibrant Blue
                        "background-light": "#f8fafc",
                        "background-dark": "#0f172a", // Navy Charcoal
                        "card-dark": "rgba(30, 41, 59, 0.7)",
                        "accent-orange": "#f59e0b",
                    },
                    fontFamily: {
                        display: ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "12px",
                    },
                },
  },
  plugins: [],
}

export default config
// 