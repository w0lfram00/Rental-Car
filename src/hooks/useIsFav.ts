import { useAppSelector } from "../redux/hooks";
import { selectFavCars } from "../redux/selectors";

const useIsFav = () => {
  const favCars = useAppSelector(selectFavCars);

  return (id: string) => favCars.includes(id);
};

export default useIsFav;
