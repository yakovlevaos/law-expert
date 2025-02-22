import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        game: resolve(__dirname, "pages/game.html"),
        gamelib: resolve(__dirname, "pages/gamelib.html"),
        games: resolve(__dirname, "assets/js/game.js"),
        gameslibjs: resolve(__dirname, "assets/js/gamelib.js"),
      },
    },
  },
});
