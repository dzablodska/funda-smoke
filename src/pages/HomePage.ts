import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  readonly search: Locator = this.page.getByTestId("search-box");
  readonly logo: Locator = this.page.getByTestId("site-logo");
  readonly loginButton: Locator = this.page.getByRole("button", {
    name: /^inloggen$/i,
  });
  readonly searchOnMap: Locator = this.page.getByRole("link", {
    name: /^zoek op kaart$/i,
  });

  async goto() {
    await this.page.goto("/");
    await expect(this.search).toBeVisible();
  }
}
