import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Game specific colors
        "game-bg": "#FFFBF0",
        "game-pink": "#FFE1EC",
        "game-blue": "#E1F0FF",
        "game-yellow": "#FFF8E1",
        "game-button-blue": "#A7C5FF",
        "game-button-pink": "#FFB5D0",
        "game-button-purple": "#E5DEFF",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;