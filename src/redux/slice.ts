import { createSlice, isAnyOf, type PayloadAction } from "@reduxjs/toolkit";
import type { Car, FilterOptions } from "../types/types";
import { getBrands, getCarById, getCarsFiltered } from "./operations";

export interface SliceState {
  cars: Array<Car>;
  favCars: Array<string>;
  selectedCar: Car | null;
  brands: Array<string>;
  totalPages: number;
  filterOptions: FilterOptions;
  isLoading: boolean;
  isError: unknown | null;
}

const initialState: SliceState = {
  cars: [],
  favCars: [],
  selectedCar: null,
  brands: [],
  totalPages: 0,
  filterOptions: { page: 1 },
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: "mainReducer",
  initialState,
  reducers: {
    resetCarsState: (state) => {
      state.cars = [];
    },
    resetFilter: (state) => {
      state.filterOptions = initialState.filterOptions;
    },
    setFilter: (state, action: PayloadAction<FilterOptions>) => {
      state.filterOptions = action.payload;
      state.filterOptions.page = 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.filterOptions = { ...state.filterOptions, page: action.payload };
    },
    nextPage: (state) => {
      state.filterOptions.page++;
    },
    addToFav: (state, action: PayloadAction<string>) => {
      state.favCars.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarsFiltered.fulfilled, (state, action) => {
        state.cars.push(...action.payload.cars);
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getCarById.fulfilled, (state, action) => {
        state.selectedCar = action.payload;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
      })
      .addMatcher(
        isAnyOf(getBrands.pending, getCarById.pending, getCarsFiltered.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getBrands.fulfilled,
          getCarById.fulfilled,
          getCarsFiltered.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getBrands.rejected,
          getCarById.rejected,
          getCarsFiltered.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export const mainReducer = slice.reducer;
export const {
  resetCarsState,
  setFilter,
  setPage,
  resetFilter,
  nextPage,
  addToFav,
} = slice.actions;
