import React from "react";
import styles from "./Button.module.scss";

const Button = ({ text, onClick, bgColor, textColor, icon, style, type, className }) => {
  const halfBackgroundStyle = {
    backgroundColor: bgColor,
  };

  const textColorStyle = {
    color: textColor,
  };

  return (
    <button
      className={`${styles.customButton} ${className}`}
      onClick={onClick}
      style={style}
      type={type}
    >
      <span className={styles.buttonText} style={textColorStyle}>
        {text}
      </span>
      <span>{icon}</span>
      <span
        className={styles.buttonBackground}
        style={halfBackgroundStyle}
      ></span>
    </button>
  );
};

export default Button;
