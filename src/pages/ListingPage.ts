import { Page, Locator, expect } from "@playwright/test";

export class ListingPage {
  constructor(private page: Page) {}

  readonly aboutSection: Locator = this.page.locator("#about");

  readonly contactBtn = this.page.getByRole("button", {
    name: /toon telefoonnummer/i,
  });

  readonly descriptionSection = this.page.locator("section").filter({
    has: this.page.getByRole("heading", {
      level: 2,
      name: /Omschrijving|Description/i,
    }),
  });

  async listingDetails() {
    await expect(this.page).toHaveURL(/\/koop\//i);
    await expect(this.aboutSection).toBeVisible();
    await expect(this.descriptionSection).toBeVisible();
    await expect(this.contactBtn).toBeVisible();
  }
}
