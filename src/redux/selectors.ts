import type { StoreState } from "./slice";

export const selectAllCars = (state: StoreState) => state.cars;
export const selectSelectedCar = (state: StoreState) => state.selectedCar;
export const selectBrands = (state: StoreState) => state.brands;
export const selectIsLoading = (state: StoreState) => state.isLoading;
export const selectTotalPages = (state: StoreState) => state.totalPages;
export const selectPage = (state: StoreState) => state.page;
