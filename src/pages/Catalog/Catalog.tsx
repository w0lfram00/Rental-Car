import { useEffect } from "react";
import FilterForm from "../../components/FilterForm/FilterForm";
import CarList from "../../components/CarList/CarList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectAllCars,
  selectFilterOptions,
  selectIsLoading,
  selectPage,
  selectTotalPages,
} from "../../redux/selectors";
import { getBrands, getCarsFiltered } from "../../redux/operations";
import type { FilterOptions } from "../../types/types";
import {
  nextPage,
  resetCarsState,
  resetFilter,
  setFilter,
} from "../../redux/slice";
import Loading from "../../components/Loading/Loading";
import s from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useAppDispatch();
  const cars = useAppSelector(selectAllCars);
  const totalPages = useAppSelector(selectTotalPages);
  const filterOptions = useAppSelector(selectFilterOptions);
  const isLoading = useAppSelector(selectIsLoading);
  const page = useAppSelector(selectPage);

  useEffect(() => {
    dispatch(resetCarsState());
    dispatch(getBrands());
  }, []);

  useEffect(() => {
    dispatch(getCarsFiltered(filterOptions));
  }, [dispatch, filterOptions]);

  const handleSubmit = (filterOptions: FilterOptions) => {
    dispatch(resetFilter());
    dispatch(resetCarsState());
    dispatch(setFilter(filterOptions));
  };

  return (
    <div className="container">
      <FilterForm onSubmit={handleSubmit} />
      <CarList cars={cars} />
      {page < totalPages && (
        <button
          className={s.button}
          onClick={() => {
            dispatch(nextPage());
          }}
        >
          Load more
        </button>
      )}
      {isLoading && <Loading />}
    </div>
  );
};

export default Catalog;
