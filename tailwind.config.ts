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
      colors: { background: "#F6F6F6", "primary": "#FF7E61" },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
