import { defineConfig, devices } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

const baseURL = process.env.BASE_URL || "https://www.funda.nl";
const userAgent = process.env.FUNDA_UA || "Mozilla/5.0";

export default defineConfig({
  reporter: [["list"], ["html"]],
  globalSetup: "./tests/smoke/global.setup.ts",
  use: {
    baseURL,
    userAgent,
    storageState: "storageState.json",
    trace: "on-first-retry",
    viewport: { width: 1280, height: 800 },
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"], userAgent } },
  ],
});
