import type { Car } from "../../types/types";
import { CiHeart } from "react-icons/ci";
import { getCarsCity, getCarsCountry } from "../../utils/getCarsData";
import { Link } from "react-router-dom";
import s from "./CarList.module.css";
import clsx from "clsx";
import { IoMdHeart } from "react-icons/io";
import useIsFav from "../../hooks/useIsFav";
import { useAppDispatch } from "../../redux/hooks";
import { addToFav } from "../../redux/slice";

type Props = {
  car: Car;
};

const CarCard = ({ car }: Props) => {
  const isFav = useIsFav();
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        className={s.heartButton}
        onClick={() => {
          dispatch(addToFav(car.id));
        }}
      >
        {isFav(car.id) ? (
          <IoMdHeart size={22} color="#3470ff" />
        ) : (
          <CiHeart size={22} color="#ffffff" />
        )}
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
