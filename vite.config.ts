import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Prevent base64-inlining large assets
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split the heavy Three.js ecosystem into its own chunk
          // so the main app bundle stays lean
          "three-vendor": [
            "three",
            "@react-three/fiber",
            "@react-three/rapier",
            "@react-three/drei",
          ],
          // Isolate GSAP
          gsap: ["gsap"],
        },
      },
    },
  },
});
