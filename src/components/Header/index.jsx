import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        React<span>TMDB</span>
      </NavLink>

      <nav className={styles.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Meus Filmes</NavLink>
      </nav>
    </header>
  );
}

export default Header;
