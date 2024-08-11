import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "../AppBar/AppBar.module.css";

function AppBar() {
  return (
    <header className={css.header}>
      <nav>
        <Navigation />
        {selectIsLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
}

export default AppBar;
