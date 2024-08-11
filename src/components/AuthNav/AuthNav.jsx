import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../Navigation/Navigation.module.css";
const navItem = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function AuthNav() {
  return (
    <ul className={css.authNav}>
      <li>
        <NavLink to="/register" className={navItem}>
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={navItem}>
          Login
        </NavLink>
      </li>
    </ul>
  );
}
export default AuthNav;
