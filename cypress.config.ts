import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',  // <-- Add your Next.js dev server URL here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
