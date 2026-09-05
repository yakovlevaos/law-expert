import type { NextConfig } from "next";

// Catalog covers and screenshots are served by the Django backend, so its
// origin has to be allowed before next/image will optimise them.
const apiOrigin = new URL(
  process.env.API_BASE_URL ?? "https://genesis-expert.ru/api/v1",
).origin;

const nextConfig: NextConfig = {
  // Self-contained server bundle for the Docker image: `.next/standalone`
  // ships its own minimal node_modules, so the runtime stage needs no install.
  output: "standalone",

  // The repo root holds a vestigial empty package-lock.json; without this Next
  // picks it as the workspace root and warns on every build.
  outputFileTracingRoot: import.meta.dirname,

  images: {
    remotePatterns: [new URL(`${apiOrigin}/**`)],
  },

  // The Vite site published these two pages as .html files; keep the old
  // links, including anything already indexed, pointing somewhere real.
  async redirects() {
    return [
      { source: "/pages/game.html", destination: "/game", permanent: true },
      { source: "/pages/gamelib.html", destination: "/gamelib", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
