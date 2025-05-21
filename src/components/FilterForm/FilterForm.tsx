import { Field, Form, Formik } from "formik";
import CustomSelect from "./CustomSelect";
import { generateNumbers } from "../../utils/generateNumbers";
import type { FilterOptions } from "../../types/types";
import { useAppSelector } from "../../redux/hooks";
import { selectBrands } from "../../redux/selectors";

type Props = {
  onSubmit: (FilterOptions: FilterOptions) => void;
};

const FilterForm = ({ onSubmit }: Props) => {
  const brands = useAppSelector(selectBrands);

  const initialValues = {};

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onSubmit({ page: 1, ...values });
        }}
      >
        <Form>
          <CustomSelect name="Brand" inputName="brand" options={brands} />
          <CustomSelect
            inputName="rentalPrice"
            name="Price"
            options={generateNumbers(30, 200, 10)}
          />
          <div>
            <Field type="number" name="minMileage" />
            <Field type="number" name="msxMileage" />
          </div>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterForm;
