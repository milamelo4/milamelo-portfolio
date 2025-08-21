import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => ({
  base: "/", // this is CRITICAL for GitHub Pages
  plugins: [
    react(),
    visualizer({
      filename: "bundle-report.html", // report file
      open: true,                     // auto-open in browser after build
      gzipSize: true,
      brotliSize: true,
    }),
    // Add any other dev-only plugins here, wrapped in a mode check:
    // ...(mode === "development" ? [SomeDevOnlyPlugin()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // This will drop console/debugger statements and strip unused dev code
      treeshake: true,
    },
    minify: "esbuild",
  },
}));
