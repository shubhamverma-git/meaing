import React from "react";
import styles from "./HeaderButton.module.scss";
const HeaderButton = ({
  text,
  onClick,
  className,
  backgroundColor,
  textColor,
  page,
  ...rest
}) => {

  return (
    <button
      onClick={onClick}
      className={`${styles.customButton} ${className}`}
      {...rest}
    >
      <div
        className={styles.buttonBackground}
        style={{ backgroundColor: backgroundColor }}
      >
        <span className={styles.buttonText} style={{ color: textColor }}>
          {text}
        </span>
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={`${styles.rightIcon} ${
            page === "Design" && styles.designRightIcon
          }`}
          style={{ color: page === "Design" ? "#000" : backgroundColor }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </button>
  );
};

export default HeaderButton;
