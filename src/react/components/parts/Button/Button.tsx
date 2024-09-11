import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Button.module.scss";

type Props = {
  label: string;
} & (
  | {
      type: "button";
      onClick: () => void;
      isDisabled: boolean;
      link?: undefined;
    }
  | {
      type: "link";
      onClick?: undefined;
      isDisabled?: undefined;
      link: string;
    }
);

export const Button = ({
  type,
  label,
  onClick,
  link,
  isDisabled = false,
}: Props): React.JSX.Element | null => {
  if (type === "button") {
    return (
      <button
        type="button"
        className={`${styles.button_custom} ${isDisabled ? styles.disable : ""}`}
        onClick={isDisabled ? undefined : onClick}
      >
        {label}
      </button>
    );
  }
  if (type === "link") {
    return (
      <NavLink
        to={link}
        className={`${styles.button_custom} ${isDisabled ? styles.disable : ""}`}
        onClick={isDisabled ? undefined : onClick}
      >
        {label}
      </NavLink>
    );
  }
  return null;
};
