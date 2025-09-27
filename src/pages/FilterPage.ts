import { Page, Locator, expect } from "@playwright/test";

export class FilterPage {
  constructor(private page: Page) {}

  readonly filtersButton: Locator = this.page.getByTestId(
    "ButtonBarFilterButton"
  );

  readonly priceFromInput: Locator = this.page.getByTestId(
    "FilterRangepriceMin"
  );

  readonly priceToInput: Locator = this.page.getByTestId("FilterRangepriceMax");
  readonly showResultsButton: Locator = this.page.getByTestId(
    "FilterPanelFooterButton"
  );
  readonly selectedPriceFilter: Locator = this.page.getByTestId(
    "SelectedFilterprice"
  );
  readonly filterPanel: Locator = this.page.locator("#FilterPanel");

  async openFilters() {
    await this.filtersButton.click({ trial: true });
    await this.filtersButton.click();
    await expect(this.priceFromInput).toBeVisible();
  }

  async selectMinPrice(value: string) {
    await this.priceFromInput.click();
    await this.page.getByRole("option", { name: value }).click();
  }

  async selectMaxPrice(value: string) {
    await this.priceToInput.click();
    await this.page.getByRole("option", { name: value }).click();
  }
}
