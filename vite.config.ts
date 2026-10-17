import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tanstackStart({ customViteReactPlugin: true, serverEntry: "server" }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    nitro(),
  ],
});
