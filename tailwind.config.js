/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#373543",
        secondary: "#282830",
        accent: "#fcbe4c",
        text: "#f5f5f5",
        "text-500": "#848299",
        tailwind: "#06b6d4",
        supabase: "#3ecf8e",
        redux: "#764cff",
        react: "#61dbfb",
      },
      fontFamily: {
        body: "Assistant",
        title: "EBGaramond",
        heading: "Tinos",
      },
      keyframes: {
        blob: {
          from: {
            "border-radius": "50% 72% 65% 40%",
          },

          to: {
            " border-radius": "72% 50% 40% 65%",
          },
        },
      },
      animation: {
        blob: "blob 5s ease-in-out infinite alternate",
      },
      transitionDuration: {
        DEFAULT: "0.3s",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      scrollBehaviour: ["smooth"],
    },
  },
  plugins: [],
};
