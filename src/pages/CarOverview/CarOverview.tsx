import { useParams } from "react-router-dom";
import CarsAccessories from "./CarsAccessories";
import { useEffect } from "react";
import { getCarById } from "../../redux/operations";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectIsLoading, selectSelectedCar } from "../../redux/selectors";
import Loading from "../../components/Loading/Loading";
import CarSpecifications from "./CarSpecifications";
import RentalConditions from "./RentalConditions";
import CarLabel from "./CarLabel";
import RentForm from "./RentForm";
import clsx from "clsx";
import s from "./CarOverview.module.css";

const CarOverview = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const car = useAppSelector(selectSelectedCar);
  const isLoading = useAppSelector(selectIsLoading);
  useEffect(() => {
    if (id != undefined) dispatch(getCarById(id));
  }, [dispatch, id]);

  return car && !isLoading ? (
    <div className={clsx(s.container, "container")}>
      <div className={s.miniContainer}>
        <img src={car.img} alt={car.model} />
        <RentForm />
      </div>
      <div className={s.miniContainer}>
        <CarLabel car={car} />
        <div className={s.info}>
          <RentalConditions />
          <CarSpecifications car={car} />
          <CarsAccessories car={car} />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default CarOverview;
