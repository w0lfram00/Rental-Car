import { Link } from "react-router-dom";
import s from "./Home.module.css";
import clsx from "clsx";

const Home = () => {
  return (
    <div className={s.hero}>
      <h1>Find your perfect rental car</h1>
      <p>Reliable and budget-friendly rentals for any journey</p>
      <Link className={clsx(s.button, "button-general")} to="/catalog">
        View Catalog
      </Link>
    </div>
  );
};

export default Home;
