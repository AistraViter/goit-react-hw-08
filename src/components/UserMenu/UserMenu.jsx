import css from "../Navigation/Navigation.module.css";

function UserMenu() {
  return (
    <ul className={css.userMenu}>
      <li>
        <p> Welcome, Username! </p>
      </li>
      <li>
        <a> Logout</a>
      </li>
    </ul>
  );
}

export default UserMenu;
