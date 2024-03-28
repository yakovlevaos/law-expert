import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "pages/index.html"),
        pages: resolve(__dirname, "pages/game.html"),
      },
    },
  },
});
