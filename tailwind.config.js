/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      cabin: ['Cabin', 'sans-serif']
    },
    screens: {
      'sm': {'min': '300px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        ruby: "#7F1330",
        babypink: "#FFC6BF",
        teal: "#003744",
        salmon: "#FE8982",
        beige: "#FFEEE3",
        hotpink: "#B72552"
      },
      backgroundImage: {
        pinkbg: "url('/src/assets/bgs/pinkhero.svg')"
      }
    },
  },
  plugins: [],
}

