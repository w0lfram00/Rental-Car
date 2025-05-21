import type { Car } from "../../types/types";
import { SlLocationPin } from "react-icons/sl";
import { getCarsCity, getCarsCountry } from "../../utils/getCarsData";

type Props = {
  car: Car;
};

const CarLabel = ({ car }: Props) => {
  return (
    <>
      <div>
        <img src={car.img} alt={car.model} />
      </div>
      <div>
        <div>
          <h2>
            {car.brand} {car.model}, {car.year}
          </h2>
          <span> Id: {car.id}</span>
        </div>
        <div>
          <SlLocationPin />
          <p>
            {getCarsCity(car)}, {getCarsCountry(car)}
          </p>
          <p>Mileage: {car.mileage} km</p>
        </div>
        <h3>${car.rentalPrice}</h3>
        <p>{car.description}</p>
      </div>
    </>
  );
};

export default CarLabel;
