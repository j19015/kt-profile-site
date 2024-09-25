import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      base: process.env.GITHUB_PAGES
        ? "kt-profile-site"
        : "./",
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
