import type React from "react";

import styles from "./Footer.module.scss";

export const Footer = (): React.JSX.Element => {
  return (
    <footer className={styles.footer}>
      <p className={styles.warning}>
        Soyez prudent lors de vos rencontres, nombreux utilisateurs sont entrés
        en collision
      </p>
      <p>© 2024 CosmoMatch. Inc</p>
    </footer>
  );
};
