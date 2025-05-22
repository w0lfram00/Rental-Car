import type { Car } from "../types/types";

export const getCarsCountry = (car: Car): string => {
  return car.address.slice(car.address.lastIndexOf(",") + 1);
};

export const getCarsCity = (car: Car): string => {
  const carNoCountry = car.address.slice(0, car.address.lastIndexOf(","));
  return carNoCountry.slice(carNoCountry.lastIndexOf(",") + 1);
};
