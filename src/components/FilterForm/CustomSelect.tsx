import { Field } from "formik";

type Props = {
  name: string;
  options: Array<string> | Array<number>;
};

const CustomSelect = ({ name, options }: Props) => {
  return (
    <Field as="select" name={name}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </Field>
  );
};

export default CustomSelect;
