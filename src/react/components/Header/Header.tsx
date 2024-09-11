import type React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

export const Header = (): React.JSX.Element => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/explore-profile">Explorer l univers de l amour</Link>
        <Link to="/upgrade-premium">Premium</Link>
      </nav>
    </header>
  );
};
