import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      svg: {
        plugins: [{ name: "preset-default" }, "removeViewBox"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "src"),
      "@components": path.resolve(rootDir, "src/components"),
      "@routes": path.resolve(rootDir, "src/routes"),
      "@data": path.resolve(rootDir, "src/data"),
      "@assets": path.resolve(rootDir, "src/assets"),
      "@shared": path.resolve(rootDir, "shared"),
    },
  },
});
