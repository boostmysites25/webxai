/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",   // optional but prevents bugs
    "./src/**/*.{js,ts,jsx,tsx}",     // optional but good for imports
  ],

  theme: {
    extend: {
      colors: {
        accent: "#3A6DFF",     // Electric blue (brand)
        primary: "#232C85",    // Deep tech blue
        dark: "#05050A",       // Main dark bg
        card: "#0A0A0C",       // UI sections
        soft: "#C9C9C9",       // Body text
      },

      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },

      maxWidth: {
        container: "1300px",
      },

      spacing: {
        section: "120px", // used for hero + sections
      },

      backgroundSize: {
        "200": "200% 200%",
        "300": "300% 300%",
      },

      // Animations needed for hero (A+B+C+D layers)
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },

        pulseGlow: {
          "0%, 100%": { opacity: 0.3 },
          "50%": { opacity: 0.7 },
        },

        sweep: {
          "0%": { transform: "translateX(-20%)", opacity: 0 },
          "50%": { opacity: 0.4 },
          "100%": { transform: "translateX(120%)", opacity: 0 },
        },
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        sweep: "sweep 8s ease-in-out infinite",
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};
