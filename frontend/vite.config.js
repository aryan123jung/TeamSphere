import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "./", // Set the root folder to TeamSphere
  plugins: [react()],
});