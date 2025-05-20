import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { Car } from "../types/types";
import { getBrands, getCarById, getCarsFiltered } from "./operations";

type InitialState = {
  cars: Array<Car>;
  brands: Array<string>;
  totalPages: number;
  isLoading: boolean;
  selectedCar: Car | null;
  isError: unknown | null;
};

const initialState: InitialState = {
  cars: [],
  brands: [],
  totalPages: 0,
  isLoading: false,
  selectedCar: null,
  isError: null,
};

const slice = createSlice({
  name: "mainReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarsFiltered.fulfilled, (state, action) => {
        state.cars = action.payload.cars;
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
