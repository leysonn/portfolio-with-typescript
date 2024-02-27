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
      "gray": "rgba(255, 255, 255, 0.3)",
      "orange-light": "#fdf0e9",
      "orange-dark": "#f3d1bf",
    },
    extend: {
      spacing: {
        "7.5": "1.875rem",
        "13": "3.25rem",
        "25": "6.25rem",
        "37": "9.25rem",
        "mobile": "20.56rem",
        "100": "25rem",
        "120": "30rem",
        "130": "32.5rem",
        "200": "50rem",
      },
    },
  },
  plugins: [],
}

