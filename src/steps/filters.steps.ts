import { expect } from "@playwright/test";
import { FilterPage } from "../pages/FilterPage";
import { SearchPage } from "../pages/SearchPage";

export async function applyPriceFilterAndAssert(
  search: SearchPage,
  filter: FilterPage
) {
  const minLabel = "€ 350.000";
  const maxLabel = "€ 1.000.000";

  const expectedPriceFilter = `${minLabel} - ${maxLabel}`.replace(/€\s+/g, "€");

  await search.gotoCity("amsterdam");
  await filter.openFilters();
  await filter.selectMinPrice(minLabel);
  await filter.selectMaxPrice(maxLabel);
  await filter.showResultsButton.click();
  await expect(filter.selectedPriceFilter).toContainText(expectedPriceFilter);
}
