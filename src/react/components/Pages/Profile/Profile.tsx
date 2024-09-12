import type React from "react";

import globalStyles from "../../../App.module.scss";
import styles from "./Profile.module.scss";

export const Profile = (): React.JSX.Element => {
  return (
    <div className={`${globalStyles.global_page} ${styles.profile_container}`}>
      <p>Profile</p>
    </div>
  );
};
