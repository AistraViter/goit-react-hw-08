import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";
const navItem = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navigation() {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navMain}>
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
        <ul className={css.headerWelcome}>
          <li>
            <p> Welcome, Username! </p>
          </li>
          <li>
            <a> Logout</a>
          </li>
        </ul>
        <div></div>
        <ul className={css.navLogin}>
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
      </nav>
    </header>
  );
}

export default Navigation;
