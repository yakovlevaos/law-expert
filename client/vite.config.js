import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        game: resolve(__dirname, "pages/game.html"),
        gamelib: resolve(__dirname, "pages/gamelib.html"),
        index: resolve(__dirname, "assets/js/index.js"), // Adjusted path for index.js
        games: resolve(__dirname, "assets/js/games.js"), // Adjusted path for games.js
      },
    },
  },
});
