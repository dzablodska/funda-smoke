import { test } from "../../src/fixtures/ui.fixtures";
import { searchForCityAndVerifyResults } from "../../src/steps/search.steps";

test("should display search results when searching for Amsterdam", async ({
  search,
}) => {
  await searchForCityAndVerifyResults(search, "amsterdam");
});
