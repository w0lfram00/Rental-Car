import type { Car } from "../../types/types";
import { SlLocationPin } from "react-icons/sl";
import { getCarsCity, getCarsCountry } from "../../utils/getCarsData";
import s from "../../pages/CarOverview/CarOverview.module.css";

type Props = {
  car: Car;
};

const CarLabel = ({ car }: Props) => {
  return (
    <div className={s.label}>
      <div className={s.title}>
        <h2>
          {car.brand} {car.model}, {car.year}
        </h2>
        <span> Id: {Math.floor(Math.random() * 20000)}</span>
      </div>
      <div className={s.location}>
        <div>
          <SlLocationPin />
          <p>
            {getCarsCity(car)}, {getCarsCountry(car)}
          </p>
        </div>
        <p>Mileage: {car.mileage} km</p>
      </div>
      <h3 className={s.price}>${car.rentalPrice}</h3>
      <p className={s.desc}>{car.description}</p>
    </div>
  );
};

export default CarLabel;
