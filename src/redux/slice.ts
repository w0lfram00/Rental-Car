import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { Car } from "../types/types";
import { getBrands, getCarById, getCarsFiltered } from "./operations";

export interface StoreState {
  cars: Array<Car>;
  selectedCar: Car | null;
  brands: Array<string>;
  totalPages: number;
  page: number;
  isLoading: boolean;
  isError: unknown | null;
}

const initialState: StoreState = {
  cars: [],
  selectedCar: null,
  brands: [],
  totalPages: 0,
  page: 1,
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
export const { resetCarsState } = slice.actions;
