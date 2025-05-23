import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Car, FilterOptions } from "../types/types";

const carsApi = axios.create({ baseURL: "https://car-rental-api.goit.global" });

export type CarsResponse = {
  cars: Array<Car>;
  totalPages: number;
};

export const getCarsFiltered = createAsyncThunk(
  "main/getCars",
  async (options: FilterOptions, thunkAPI) => {
    try {
      const optionsToSend: Partial<FilterOptions> = Object.entries(
        options
      ).reduce(
        (acc, [key, value]) => {
          if (
            value !== null &&
            value !== undefined &&
            value !== "" &&
            value !== 0
          ) {
            acc[key as keyof FilterOptions] = value;
          }
          return acc;
        },
        { page: options.page } as Partial<FilterOptions>
      );

      const response = await carsApi.get<CarsResponse>("/cars", {
        params: optionsToSend,
      });
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

export const getCarById = createAsyncThunk(
  "main/getCarById",
  async (id: string, thunkAPI) => {
    try {
      const response = await carsApi.get<Car>("/cars/" + id);
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

export const getBrands = createAsyncThunk(
  "main/getBrands",
  async (_, thunkAPI) => {
    try {
      const response = await carsApi.get<Array<string>>("/brands");
      return response.data;
    } catch (e: unknown) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
