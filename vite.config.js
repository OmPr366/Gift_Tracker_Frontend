import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth/google": {
        target: "https://gift-tacker-api.onrender.com",
        changeOrigin: true,
      },
      "/api/users": {
        target: "https://gift-tacker-api.onrender.com",
        changeOrigin: true,
      },
      "/api/people": {
        target: "https://gift-tacker-api.onrender.com",
        changeOrigin: true,
      },
      "/api/gifts": {
        target: "https://gift-tacker-api.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
