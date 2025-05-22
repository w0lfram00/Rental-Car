import { IoCheckmarkCircleOutline } from "react-icons/io5";
import type { Car } from "../../types/types";

type Props = {
  car: Car;
};

const CarsAccessories = ({ car }: Props) => {
  return (
    <div>
      <h4>Accessories and functionalities:</h4>
      <ul>
        {car.accessories.map((accessory) => (
          <li key={accessory}>
            <IoCheckmarkCircleOutline />
            <p>{accessory}</p>
          </li>
        ))}
        {car.functionalities.map((func) => (
          <li key={func}>
            <IoCheckmarkCircleOutline />
            <p>{func}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsAccessories;
