import type React from "react";
import { IoPlanetOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

import { dynamicImageImporter } from "../../../helpers/images/dynamicImageImporter.helper";
import styles from "./Header.module.scss";

export const Header = (): React.JSX.Element => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav_bar}>
        <div className={styles.app_name_logo_container}>
          <NavLink
            className={styles.header_logo_container}
            to="/"
          >
            <img
              alt="logo of cosmo match app"
              src={dynamicImageImporter(`logo.png`)}
            />
          </NavLink>
          <p className={styles.app_name}>CosmoMatch</p>
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.nav_link} ${isActive ? styles.current_page : ""}`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/explore-profile"
          className={({ isActive }) =>
            `${styles.nav_link} ${isActive ? styles.current_page : ""}`
          }
        >
          Explorer l'univers de l'amour
        </NavLink>
        <NavLink
          to="/upgrade-premium"
          className={({ isActive }) =>
            `${styles.nav_link} ${styles.premium_link} ${isActive ? styles.current_page : ""}`
          }
        >
          Premium
        </NavLink>
        <div className={styles.header_icon_button_container}>
          <NavLink to="/profile">
            <IoPlanetOutline
              color="white"
              size="25px"
            />
          </NavLink>
          <button type="button">
            <MdLogout
              color="white"
              size="25px"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};
