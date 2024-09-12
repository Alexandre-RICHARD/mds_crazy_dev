import type React from "react";

import globalStyles from "../../../App.module.scss";
import styles from "./Homepage.module.scss";

export const Homepage = (): React.JSX.Element => {
  return (
    <div className={`${globalStyles.global_page} ${styles.homepage_container}`}>
      HomePage
    </div>
  );
};
