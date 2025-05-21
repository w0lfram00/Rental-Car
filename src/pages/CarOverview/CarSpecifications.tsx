import { IoCarSportOutline } from "react-icons/io5";
import { BsCalendar2Week, BsFuelPump } from "react-icons/bs";
import type { Car } from "../../types/types";
import { GoGear } from "react-icons/go";

type Props = {
  car: Car;
};

const CarSpecifications = ({ car }: Props) => {
  return (
    <>
      <h4>Car Specifications:</h4>
      <ul>
        <li>
          <BsCalendar2Week />
          <p>Year: {car.year}</p>
        </li>
        <li>
          <IoCarSportOutline />
          <p>Type: {car.type}</p>
        </li>
        <li>
          <BsFuelPump />
          <p>Fuel Consumption: {car.fuelConsumption}</p>
        </li>
        <li>
          <GoGear />
          <p>Engine Size: {car.engineSize}</p>
        </li>
      </ul>
    </>
  );
};

export default CarSpecifications;
