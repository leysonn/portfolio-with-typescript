/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,ts,tsx,scss}',
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
      "brown": "#5C2000",
      "vinous": "#570B00",
    },
    extend: {
      spacing: {
        "4.5": "1.125rem",
        "6.5": "1.625rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",
        "9.5": "2.375rem",
        "12.5": "3.125rem",
        "13": "3.25rem",
        "13.5": "3.375rem",
        "15": "3.75rem",
        "16.5": "4.125rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "19.25": "4.8125rem",
        "22": "5.5rem",
        "22.5": "5.625rem",
        "24.5": "6.125rem",
        "25": "6.25rem",
        "27": "6.75rem",
        "30": "7.5rem",
        "32.5": "8.125rem",
        "33.7": "8.425rem",
        "35": "8.75rem",
        "36.5": "9.125rem",
        "37": "9.25rem",
        "39": "9.75rem",
        "42.7": "10.675rem",
        "46.7": "11.675rem",
        "50": "12.5rem",
        "52.5": "13.125rem",
        "53": "13.25rem",
        "63": "15.75rem",
        "67": "16.75rem",
        "68": "17rem",
        "69.5": "17.375rem",
        "76": "19rem",
        "mobile": "20.56rem",
        "84": "21rem",
        "86": "21.5rem",
        "92": "23rem",
        "97.7": "24.425rem",
        "100": "25rem",
        "104": "26rem",
        "112": "28rem",
        "117.5": "29.375rem",
        "120": "30rem",
        "125.5": "31.375rem",
        "130": "32.5rem",
        "142.5": "35.625rem",
        "158.5": "39.625rem",
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

