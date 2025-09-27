import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";

export async function switchToRentAndAssert(results: SearchPage) {
  await results.gotoCity("amsterdam", "huur");
  await results.expectRentContext();
}
