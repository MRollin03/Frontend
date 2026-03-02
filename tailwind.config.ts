import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Add custom colors, spacing, fonts, etc.
    },
  },
  plugins: [],
}

export default config
