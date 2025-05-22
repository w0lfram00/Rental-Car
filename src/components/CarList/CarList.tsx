import type { Car } from "../../types/types";
import CarCard from "./CarCard";
import s from "./CarList.module.css";

type Props = {
  cars: Array<Car>;
};

const CarList = ({ cars }: Props) => {
  return cars.length ? (
    <ul className={s.carList}>
      {cars.map((car) => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No car available with such requirements</p>
  );
};

export default CarList;
