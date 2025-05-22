import { Field, Form, Formik } from "formik";
import CustomSelect from "./CustomSelect";
import { generateNumbers } from "../../utils/generateNumbers";
import type { FilterOptions } from "../../types/types";
import { useAppSelector } from "../../redux/hooks";
import { selectBrands, selectIsLoading } from "../../redux/selectors";
import s from "./FilterForm.module.css";
import clsx from "clsx";

type Props = {
  onSubmit: (FilterOptions: FilterOptions) => void;
};

const FilterForm = ({ onSubmit }: Props) => {
  const brands = useAppSelector(selectBrands);
  const isLoading = useAppSelector(selectIsLoading);

  const initialValues = {
    brand: "",
    rentalPrice: "",
    minMileage: 0,
    maxMileage: 0,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit({ page: 1, ...values });
      }}
    >
      <Form className={s.wrapper}>
        <label>
          <p>Car brand</p>
          <CustomSelect name="brand" inputName="Brand" options={brands} />
        </label>
        <label>
          <p>Price/ 1 hour</p>
          <CustomSelect
            inputName="Price"
            name="rentalPrice"
            options={generateNumbers(30, 80, 10)}
          />
        </label>
        <label>
          <p>Car mileage / km</p>
          <div className={s.mileage}>
            <Field type="number" name="minMileage" placeholder="From" />
            <Field type="number" name="maxMileage" placeholder="To" />
          </div>
        </label>
        <button
          className={clsx(s.button, "button-general")}
          type="submit"
          disabled={isLoading}
        >
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default FilterForm;
