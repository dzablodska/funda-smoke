import { test } from "../../src/fixtures/ui.fixtures";
import { openFirstListingAndVerifyDetails } from "../../src/steps/listing.steps";

test("should display listing details when opening the first result", async ({
  search,
  listing,
}) => {
  await openFirstListingAndVerifyDetails(search, listing, "amsterdam");
});
