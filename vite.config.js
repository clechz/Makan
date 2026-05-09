import { defineConfig } from "vite";

// Static-only config — Vite is used purely as a dev server for the
// hybrid landing page in public/hybrid/. No React, no Tailwind, no
// JSX compilation. The editor will reintroduce a build pipeline later.
export default defineConfig({
  server: {
    port: 5173,
  },
});
