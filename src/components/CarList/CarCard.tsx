import type { Car } from "../../types/types";
import { CiHeart } from "react-icons/ci";
import { getCarsCity, getCarsCountry } from "../../utils/getCarsData";
import { Link } from "react-router-dom";

type Props = {
  car: Car;
};

const CarCard = ({ car }: Props) => {
  return (
    <>
      <button>
        <CiHeart />
      </button>
      <img src={car.img} alt={car.model} />
      <div>
        <h3>
          {car.brand} <span>{car.model}</span>, {car.year}
        </h3>
        <h4>${car.rentalPrice}</h4>
      </div>
      <p>
        {getCarsCity(car)} | {getCarsCountry(car)} | {car.rentalCompany} |{" "}
        {car.type} | {car.mileage}
      </p>
      <Link to={`/catalog/${car.id}`}>Read more</Link>
    </>
  );
};

export default CarCard;
