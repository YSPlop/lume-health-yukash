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
        bgcolour: "#FFB9A3",
        bgdarkcolour: "#ff7854",
        textcolour: "#756f6d",
        accentcolour: "#e8dccb",
        cardcolour: "#f5ede0",
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'], // For headings
        body: ['Nunito', 'sans-serif'], // For body text
      },
      fontSize: {
        'xxs': '0.45rem', // Equivalent to 10px
      },
    },
  },
  plugins: [],
} satisfies Config;
