import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth/google": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/api/users": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/api/people": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/api/gifts": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
