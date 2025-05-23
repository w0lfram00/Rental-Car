import type { StoreState } from "./store";

export const selectAllCars = (state: StoreState) => state.main.cars;
export const selectSelectedCar = (state: StoreState) => state.main.selectedCar;
export const selectBrands = (state: StoreState) => state.main.brands;
export const selectIsLoading = (state: StoreState) => state.main.isLoading;
export const selectTotalPages = (state: StoreState) => state.main.totalPages;
export const selectPage = (state: StoreState) => state.main.filterOptions.page;
export const selectFilterOptions = (state: StoreState) =>
  state.main.filterOptions;
export const selectFavCars = (state: StoreState) => state.main.favCars;
