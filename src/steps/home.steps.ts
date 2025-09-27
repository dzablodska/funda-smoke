import { HomePage } from "../pages/HomePage";
import { expect } from "@playwright/test";

export async function validateCoreUI(home: HomePage) {
  await home.goto();
  await expect(home.loginButton).toBeVisible();
  await expect(home.searchOnMap).toBeVisible();
}
