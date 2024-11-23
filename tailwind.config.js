/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Nunito Sans", "sans-serif"], // Existing body font
        modica: ["Modica", "sans-serif"], // Add Modica Ultra
      },
      backgroundImage: {
        "hero-image": "url('/assets/bg.jpg')",
        "contact-image": "url('/assets/contact.jpg')",
      },
      colors: {
        designColor: "#F7D449",
        textColor: "#aeaeae",
      },
      boxShadow: {
        cardShadow: "0px 0px 5px 10px rgba(0,0,0,0.10)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateY(50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        lineGlow: {
          "0%": { backgroundPosition: "0%" },
          "100%": { backgroundPosition: "100%" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(1.1)", opacity: 0.9 },
        },
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        hologram: {
          "0%": { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
          "50%": { opacity: 0.8, transform: "scale(1.05)" },
          "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px 2px rgba(0, 0, 255, 0.6)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(0, 0, 255, 0.8)" },
          "100%": { boxShadow: "0 0 10px 2px rgba(0, 0, 255, 0.6)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideIn: "slideIn 0.7s ease-in-out",
        lineGlow: "lineGlow 2s linear infinite",
        pulse: "pulse 2s infinite",
        slideLeft: "slideLeft 0.5s ease-out",
        slideRight: "slideRight 0.5s ease-out",
        fadeInLeft: "fadeInLeft 0.5s ease-out",
        fadeInRight: "fadeInRight 0.5s ease-out",
        hologram: "hologram 0.5s ease-in-out",
        glow: "glow 1.5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
