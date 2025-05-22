import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <Logo />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
