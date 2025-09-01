import { test, expect } from "@playwright/test";

test("homepage has title", async ({ page }) => {
  await page.goto("https://dev.indiafilings.com");
  await expect(page).toHaveTitle(/Playwright/);
});
