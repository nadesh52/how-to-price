import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { prompt: ["Prompt"] },
      colors: { background: "#FFC567", "primary": "#FD5A46", secondary: "#00995e", "accent": "#058CD7" },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
