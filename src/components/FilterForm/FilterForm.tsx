import { Field, Form, Formik } from "formik";
import React from "react";
import CustomSelect from "./CustomSelect";
import { generateNumbers } from "../../utils/generateNumbers";

const FilterForm = () => {
  const initialValues = {};

  const handleSubmit = () => {};

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <CustomSelect name="brand" options={["qwe", "qwe", "zxc", "asd"]} />
          <CustomSelect
            name="rentalPrice"
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
