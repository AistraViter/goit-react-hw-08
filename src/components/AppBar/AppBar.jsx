import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "../AppBar/AppBar.module.css";
import { useSelector } from "react-redux";

function AppBar() {
    const isLoggedIn =useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <nav>
        <Navigation />
        {isLoggedIn ? <UserMenu />:<AuthNav />}
      </nav>
    </header>
  );
}

export default AppBar;
