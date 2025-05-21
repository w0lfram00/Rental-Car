export interface FilterOptions {
  brand?: string;
  rentalPrice?: string;
  minMileage?: number;
  maxMileage?: number;
  limit?: number;
  page: number;
}

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
