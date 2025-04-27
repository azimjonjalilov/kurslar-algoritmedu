import { Link } from "react-router-dom";
import "./Header.css";
import styles from "./Header.module.css";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        Algoritm brandi
      </Link>

      <FaBars className={styles.menu} />
    </header>
  );
};

export default Header;
