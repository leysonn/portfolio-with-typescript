/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{html,ts,tsx,scss}',
    './src/components/**/*.{html,ts,tsx,scss}',
    './index.html',
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
        "4.5": "1.125rem",
        "7.5": "1.875rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "25": "6.25rem",
        "32.5": "8.125rem",
        "33.7": "8.425rem",
        "36.5": "9.125rem",
        "37": "9.25rem",
        "42.7": "10.675rem",
        "mobile": "20.56rem",
        "100": "25rem",
        "120": "30rem",
        "130": "32.5rem",
        "180": "45rem",
        "200": "50rem",
        "250": "62.5rem",
        "288.5": "72.125rem",
        "292.5": "73.125rem",
        "d-screen": "1440px",
      },
    },
  },
  plugins: [],
}

