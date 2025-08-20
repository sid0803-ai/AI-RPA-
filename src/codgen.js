export async function generateCode(action) {
  // Fake example: later GPT can expand
  if (action === "login") {
    return `
      await page.goto("https://example.com/login");
      await page.fill("#email", "test@example.com");
      await page.fill("#password", "password123");
      await page.click("button[type=submit]");
    `;
  }
  return "// No code generated yet";
}
// src/codgen.js