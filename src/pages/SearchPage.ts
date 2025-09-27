import { Page, Locator, expect } from "@playwright/test";

export class SearchPage {
  constructor(private page: Page) {}

  readonly pagination: Locator = this.page.getByTestId("pagination");
  readonly relatedLinks: Locator = this.page.getByTestId("relatedLinks");

  readonly resultsContainer: Locator = this.page.locator("#PageListings");

  readonly resultLinks: Locator = this.resultsContainer.locator(
    'a[href*="/detail/koop/"]'
  );

  readonly resultsCountLine: Locator = this.page
    .getByText(/\b(huurwoningen)\b/i)
    .first();

  async gotoCity(city: string, type: "koop" | "huur" = "koop") {
    await this.page.goto(`/${type}/${encodeURIComponent(city)}/`);
  }

  async searchResultsVisible() {
    await expect(this.resultsContainer).toBeVisible();
    await expect(this.resultLinks.first()).toBeVisible();
    await expect(this.pagination).toBeVisible();
  }

  async openFirstResult() {
    await expect(this.resultLinks.first()).toBeVisible();
    await this.resultLinks.first().click();
  }

  async expectRentContext() {
    await expect(this.page).toHaveURL(/\/(zoeken\/)?huur/i);
    await expect(this.resultsCountLine).toHaveText(/huurwoningen/i);
  }
}
