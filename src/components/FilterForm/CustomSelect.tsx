import { Field } from "formik";

type Props = {
  name: string;
  options: Array<string> | Array<number>;
  inputName: string;
};

const CustomSelect = ({ inputName, name, options }: Props) => {
  return (
    <Field as="select" name={name}>
      <option value="" disabled>
        Choose a {inputName}
      </option>
      {options.map((option) => (
        <option key={option.toString()} value={option}>
          {option}
        </option>
      ))}
    </Field>
  );
};

export default CustomSelect;
