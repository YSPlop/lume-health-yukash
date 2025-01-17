import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgcolour: "#fcf9f3",
        textcolour: "#756f6d",
        accentcolour: "#e8dccb",
        cardcolour: "#ffa787",
      },
    },
  },
  plugins: [],
} satisfies Config;
