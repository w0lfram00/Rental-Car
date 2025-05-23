import { Field } from "formik";
import s from "./FilterForm.module.css";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  name: string;
  options: Array<string> | Array<number>;
  inputName: string;
};

const CustomSelect = ({ inputName, name, options }: Props) => {
  return (
    <div className={s.selectWrapper}>
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
      <span className={s.arrow}>
        <FaChevronDown size={16} />
      </span>
    </div>
  );
};

export default CustomSelect;
