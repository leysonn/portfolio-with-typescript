/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#28293e",
      "dark": "#391400",
      "dark-accent": "#b550f8",
      "dark-gray": "rgba(57, 20, 0, 0.64)",
      "light": "#fff",
      "light-accent": "#ef6d58",
      "light-gray": "rgba(255, 255, 255, 0.64)",
      "border": "rgba(255, 255, 255, 0.3)",
    },
    extend: {},
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true
  }
}

