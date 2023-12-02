import { Link } from "react-router-dom";
import css from "./Navbar.module.css";
import { useAuth } from "../../context/AuhtProvider";

export const Navbar = () => {
  const { user, isAuth, logout } = useAuth();

  const handleLogout = async (token) => {
    await logout(localStorage.getItem("token", JSON.stringify(token)));
    localStorage.removeItem("token")
  };
  return (
    <nav className={css.nav}>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <ul className={css.nav__items}>
        {isAuth ? (
          <>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>Welcome {user}</li>
            <li>
              <Link to="/login">
                <button onClick={()=> handleLogout()} className={css.nav__button}>Logout</button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                {" "}
                <button className={css.nav__button}>Login</button>
              </Link>
            </li>
            <li>
              <Link to="/">
                {" "}
                <button className={css.nav__button}>Register</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
