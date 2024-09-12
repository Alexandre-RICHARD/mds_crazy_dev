import type React from "react";

import globalStyles from "../../../App.module.scss";
import styles from "./HomepageConnected.module.scss";

export const HomepageConnected = (): React.JSX.Element => {
  return (
    <div
      className={`${globalStyles.global_page} ${styles.homepage_connected_container}`}
    >
      HomepageConnected
    </div>
  );
};
