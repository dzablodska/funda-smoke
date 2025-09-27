import { SearchPage } from "../pages/SearchPage";
import { ListingPage } from "../pages/ListingPage";

export async function openFirstListingAndVerifyDetails(
  results: SearchPage,
  listing: ListingPage,
  city: string
) {
  await results.gotoCity(city);
  await results.openFirstResult();
  await listing.listingDetails();
}
