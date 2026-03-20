import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@shared": path.resolve(rootDir, "shared"),
    },
  },
  test: {
    environment: "node",
    include: ["shared/**/*.test.ts"],
  },
});
