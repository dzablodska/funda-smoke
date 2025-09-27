import { chromium } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

const baseURL = process.env.BASE_URL || "https://www.funda.nl";
const userAgent = process.env.FUNDA_UA || "Mozilla/5.0";

export default async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ baseURL, userAgent });
  const page = await context.newPage();

  await page.goto("/");

  const cookieBtn = page.locator("button#didomi-notice-agree-button");
  if (await cookieBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
    await cookieBtn.click();
    await page.waitForTimeout(300);
  }

  await context.storageState({ path: "storageState.json" });
  await browser.close();
}
