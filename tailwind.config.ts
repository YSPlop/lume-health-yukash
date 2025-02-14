import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // Default Tailwind
        'md': '768px',   // Default Tailwind
        'lg': '1024px',  // Default Tailwind
        'xl': '1280px',  // Default Tailwind
        '2xl': '1536px', // Default Tailwind
        '3xl': '1920px', // Custom breakpoint for Full HD
        '4xl': '2560px', // Custom breakpoint for 2560x1440
      },
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
        heading: ['Merriweather', 'serif'], // For headings
        body: ['Nunito', 'sans-serif'], // For body text
        section: ['Merriweather', 'serif'] // For sections
      },
      fontSize: {
        'xxs': '0.45rem', // Equivalent to 10px
      },
    },
  },
  plugins: [],
} satisfies Config;
