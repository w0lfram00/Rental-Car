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

const CarOverview = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const car = useAppSelector(selectSelectedCar);
  const isLoading = useAppSelector(selectIsLoading);
  useEffect(() => {
    if (id != undefined) dispatch(getCarById(id));
  }, [id, dispatch]);

  return car && isLoading ? (
    <div>
      <CarLabel car={car} />
      <RentalConditions />
      <CarSpecifications car={car} />
      <CarsAccessories car={car} />
    </div>
  ) : (
    <Loading />
  );
};

export default CarOverview;
