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
        designColor: "#F7D449", // Yellow color for accents
        textColor: "#aeaeae", // Gray text color
        glowBlue: "#1DA1F2", // For glowing animations
        glowPink: "#FF69B4",
        glowYellow: "#FFD700",
      },
      boxShadow: {
        cardShadow: "0px 0px 5px 10px rgba(0,0,0,0.10)",
        glowBlue: "0 0 10px 2px rgba(29, 161, 242, 0.7)", // Glowing Blue Shadow
        glowPink: "0 0 10px 2px rgba(255, 105, 180, 0.7)", // Glowing Pink Shadow
        glowYellow: "0 0 10px 2px rgba(255, 215, 0, 0.7)", // Glowing Yellow Shadow
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spinGradient: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        spinSlow: "spin 10s linear infinite",
        spinFast: "spin 1.5s linear infinite", // Fast spin for the spinners
        slideIn: "slideIn 0.7s ease-in-out",
        lineGlow: "lineGlow 2s linear infinite",
        pulse: "pulse 2s infinite",
        slideLeft: "slideLeft 0.5s ease-out",
        slideRight: "slideRight 0.5s ease-out",
        fadeInLeft: "fadeInLeft 0.5s ease-out",
        fadeInRight: "fadeInRight 0.5s ease-out",
        hologram: "hologram 0.5s ease-in-out",
        glow: "glow 1.5s infinite ease-in-out",
        float: "float 3s ease-in-out infinite", // Floating animation
        spinGradient: "spinGradient 8s linear infinite", // Gradient spin animation
      },
    },
  },
  plugins: [],
};
