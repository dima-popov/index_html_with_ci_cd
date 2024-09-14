// playwright.config.js
module.exports = {
  testDir: "./tests",
  timeout: 30000,
  use: {
    headless: true,
    baseURL: "http://localhost:3000", // Adjust if your app is served at a different address
  },
  webServer: {
    command: "serve",
    url: "http://localhost:3000",
    reuseExistingServer: true,
  },
};
