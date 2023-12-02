import { Link } from "react-router-dom";
import css from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={css.nav}>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <ul className={css.nav__items}>
        <li>
          <Link to="/">Movies</Link>
        </li>
        <li>UserName</li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </nav>
  );
};
