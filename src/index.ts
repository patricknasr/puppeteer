import * as puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://example.com/login");

  // Fill in login credentials
  await page.type("#username", "your-username");
  await page.type("#password", "your-password");

  // Click the login button
  await Promise.all([page.waitForNavigation(), page.click("#login-button")]);

  // Wait for the login to complete
  await page.waitForSelector("#logged-in-indicator");

  // Do other actions on the logged-in page
  // ...

  await browser.close();
})();
