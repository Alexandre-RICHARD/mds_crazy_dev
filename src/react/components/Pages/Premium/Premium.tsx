import type React from "react";

import globalStyles from "../../../App.module.scss";
import styles from "./Premium.module.scss";

export const Premium = (): React.JSX.Element => {
  return (
    <div
      className={`${globalStyles.global_page} ${styles.premium_page_container}`}
    >
      Premium
    </div>
  );
};
