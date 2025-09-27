import { test } from "../../src/fixtures/ui.fixtures";
import { switchToRentAndAssert } from "../../src/steps/navigation.steps";

test("should display rent results when switching to Rent tab", async ({
  search,
}) => {
  await switchToRentAndAssert(search);
});
