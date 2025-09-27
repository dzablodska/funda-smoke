import { test } from "../../src/fixtures/ui.fixtures";
import { validateCoreUI } from "../../src/steps/home.steps";

test("should display login button and search on map on the home page", async ({
  home,
}) => {
  await validateCoreUI(home);
});
