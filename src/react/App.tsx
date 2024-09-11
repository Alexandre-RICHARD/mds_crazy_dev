import React from "react";
import { RouterProvider } from "react-router-dom";

import styles from "./App.module.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { router } from "./Router";

export const App = (): React.JSX.Element => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
};
