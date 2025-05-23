import { IoCheckmarkCircleOutline } from "react-icons/io5";

const RentalConditions = () => {
  return (
    <div>
      <h4>Rental Conditions:</h4>
      <ul>
        <li>
          <IoCheckmarkCircleOutline />
          <p>Minimum age : 25</p>
        </li>
        <li>
          <IoCheckmarkCircleOutline />
          <p>Security deposite required</p>
        </li>
        <li>
          <IoCheckmarkCircleOutline />
          <p>Valid driver's license</p>
        </li>
      </ul>
    </div>
  );
};

export default RentalConditions;
