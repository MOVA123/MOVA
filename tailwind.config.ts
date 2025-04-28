import type { Config } from "tailwindcss";

export default {
  mode: 'jit',
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {},
    debugScreens: {
      selector: ".debug-screens",
    },
    extend: {
      screens: {
        large: "1600px",
        xl: "1280px",
        md: "768px",
        sm: "640px",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "surface-default": "var(--white)",
        "surface-container-default": "var(--neutral-variant-99)",
        "surface-accent-gray-subtlest": "var(--neutral-95)",
        "surface-accent-blue-subtler": "var(--blue-80)",
        "surface-container-hovered": "var(--neutral-85)",
        "surface-inverse": "var(--neutral)",
        "surface-search-field": "var(--white)",
        "surface-accent-gray-subtler": "var(--neutral-85)",
        "text-static": "var(--white)",
        "text-subtler": "var(--neutral-50)",
        "ui-level0": "#121316",
        "ui-level1-new": "#25262b",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      height: {
        "18": "4.5rem",
      },
      borderRadius: {
        "4xl": "1.5rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        "--abcNormal": ["abcNormal", "abcNormal Fallback"],
      },
      transitionDuration: {
        "3s": "3000ms",
      },
      padding: {
        login: "calc(50% - 165px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-debug-screens"),
  ],
} satisfies Config;
