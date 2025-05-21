import type { Car } from "../../types/types";
import CarCard from "./CarCard";

type Props = {
  cars: Array<Car>;
};

const CarList = ({ cars }: Props) => {
  return (
    <ul>
      {cars.map((car) => (
        <li id={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
};

export default CarList;
