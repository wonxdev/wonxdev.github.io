import { defineConfig } from "vite";

// Using a relative base ("./") makes the production build work whether it is
// served from a custom domain root (e.g. https://wonxlabs.com/), a GitHub
// user/organization page (https://<user>.github.io/), or a GitHub project
// page served from a subpath (https://<user>.github.io/<repo>/).
export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
