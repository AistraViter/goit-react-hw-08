import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
const navItem = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navigation() {
  return (
        <ul className={css.navigation}>
          <li>
            <NavLink to="/" className={navItem}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={navItem}>
              Contacts
            </NavLink>
          </li>
        </ul>
  );
}

export default Navigation;
