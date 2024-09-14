const { test, expect } = require("@playwright/test");

test("Header contains expected content", async ({ page }) => {
  await page.goto("/"); // This assumes your Docker container serves the site at the root URL
  const header = await page.locator("h1"); // Adjust the selector based on your actual header element
  await expect(header).toHaveText("Hello, Docker!"); // Replace with the expected header text
});
