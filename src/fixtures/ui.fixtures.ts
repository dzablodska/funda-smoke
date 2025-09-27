import { test as base } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { ListingPage } from "../pages/ListingPage";
import { FilterPage } from "../pages/FilterPage";

type Fixtures = {
  home: HomePage;
  search: SearchPage;
  listing: ListingPage;
  filter: FilterPage;
};

export const test = base.extend<Fixtures>({
  home: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  search: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
  listing: async ({ page }, use) => {
    await use(new ListingPage(page));
  },
  filter: async ({ page }, use) => {
    await use(new FilterPage(page));
  },
});

export { expect } from "@playwright/test";
