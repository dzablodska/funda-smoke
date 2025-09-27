import { test } from "../../src/fixtures/ui.fixtures";
import { applyPriceFilterAndAssert } from "../../src/steps/filters.steps";

test("should show applied price range in filters", async ({
  search,
  filter,
}) => {
  await applyPriceFilterAndAssert(search, filter);
});
