/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ☀️ Sand & Sky Palette
        sand: {
          light: "#fcfbf7",
          DEFAULT: "#f5f2e9",
          dark: "#e8e3d7",
        },
        sky: {
          light: "#cde1ff",
          DEFAULT: "#79aefc",
          dark: "#3d85f0",
        },
        gold: {
          light: "#f6e5b0",
          DEFAULT: "#e7bf63",
          dark: "#c89b37",
        },
        rose: {
          light: "#fbd5d5",
          DEFAULT: "#f5a6a6",
          dark: "#e57272",
        },
        text: {
          dark: "#111827",
          soft: "#374151",
        },
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      backgroundImage: {
        "sand-sky-gradient": "linear-gradient(180deg, #fcfbf7 0%, #f2f6fa 100%)",
      },

      boxShadow: {
        glass: "0 4px 20px rgba(0, 0, 0, 0.05)",
        glow: "0 6px 18px rgba(121,174,252,0.25)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      animation: {
        spark: "spark 3.5s ease-in-out infinite",
      },

      keyframes: {
        spark: {
          "0%, 100%": { transform: "translateX(-5%)", opacity: "0.85" },
          "50%": { transform: "translateX(5%)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
