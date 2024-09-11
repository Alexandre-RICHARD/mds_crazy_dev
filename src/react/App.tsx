import React from "react";

import styles from "./App.module.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Router } from "./Router";

export const App = (): React.JSX.Element => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Router />
      </main>
      <Footer />
    </div>
  );
};
