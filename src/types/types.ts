interface AllFilterOptions {
  brand: string;
  rentalPrice: string;
  minMileage: number;
  maxMileage: number;
  limit: number;
  page: number;
}

export type FilterOptions = Partial<AllFilterOptions>;
export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: [string];
  functionalities: [string];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: [string];
  mileage: number;
}
