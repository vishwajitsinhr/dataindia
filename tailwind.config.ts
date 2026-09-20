import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5F6F2",
        ink: "#14202B",
        muted: "#5C6A70",
        line: "#DCDACF",
        indigo: {
          DEFAULT: "#2C3E6B",
          light: "#E7EAF3",
        },
        saffron: {
          DEFAULT: "#C97A16",
          light: "#F6E8D2",
        },
        teal: {
          DEFAULT: "#1E7A6B",
          light: "#DFEEE9",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
};
export default config;
