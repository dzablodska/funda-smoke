import { SearchPage } from "../pages/SearchPage";

export async function searchForCityAndVerifyResults(
  results: SearchPage,
  city: string
) {
  await results.gotoCity(city);
  await results.searchResultsVisible();
}
