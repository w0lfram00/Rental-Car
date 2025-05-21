import type { Car } from "../../types/types";

type Props = {
  car: Car;
};

const CarsAccessories = ({ car }: Props) => {
  return (
    <>
      <h4>Accessories and functionalities:</h4>
      <ul>
        {car.accessories.map((accessory) => (
          <li>{accessory}</li>
        ))}
      </ul>
    </>
  );
};

export default CarsAccessories;
