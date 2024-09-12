import type React from "react";

import globalStyles from "../../../App.module.scss";
import styles from "./AccountAccess.module.scss";

export const AccountAccess = (): React.JSX.Element => {
  return (
    <div
      className={`${globalStyles.global_page} ${styles.account_access_container}`}
    >
      <div>AccountAccess</div>
    </div>
  );
};
