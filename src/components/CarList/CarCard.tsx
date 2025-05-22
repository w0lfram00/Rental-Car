import type { Car } from "../../types/types";
import { CiHeart } from "react-icons/ci";
import { getCarsCity, getCarsCountry } from "../../utils/getCarsData";
import { Link } from "react-router-dom";
import s from "./CarList.module.css";
import clsx from "clsx";

type Props = {
  car: Car;
};

const CarCard = ({ car }: Props) => {
  return (
    <>
      <button className={s.heartButton}>
        <CiHeart />
      </button>
      <img src={car.img} alt={car.model} />
      <div className={s.card}>
        <div className={s.titleBlock}>
          <h3 className={s.title}>
            {car.brand} <span>{car.model}</span>, {car.year}
          </h3>
          <h4 className={s.title}>${car.rentalPrice}</h4>
        </div>
        <div className={s.desc}>
          <p>
            {getCarsCity(car)} | {getCarsCountry(car)} | {car.rentalCompany}
          </p>
          <p>
            {car.type} | {car.mileage} km
          </p>
        </div>
      </div>
      <Link
        className={clsx(s.button, "button-general")}
        to={`/catalog/${car.id}`}
      >
        Read more
      </Link>
    </>
  );
};

export default CarCard;
