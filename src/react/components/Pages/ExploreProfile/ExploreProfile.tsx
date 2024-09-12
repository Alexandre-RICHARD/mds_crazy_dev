import type React from "react";

import globalStyles from "../../../App.module.scss";
import styles from "./ExploreProfile.module.scss";

export const ExploreProfile = (): React.JSX.Element => {
  return (
    <div className={`${globalStyles.global_page} ${styles.explore_profile}`}>
      Explore Profile
    </div>
  );
};
