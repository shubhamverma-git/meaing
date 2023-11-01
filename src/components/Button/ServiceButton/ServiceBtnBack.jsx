import React from "react";
import styles from "./ServiceBtnBack.module.scss";

const ServiceBtnBack = ({ text, onClick, bgColor, textColor }) => {
  const halfBackgroundStyle = {
    backgroundColor: bgColor,
  };

  const textColorStyle = {
    color: textColor,
  };

  return (
    <button className={styles.customButton} onClick={onClick}>
      <span className={styles.buttonText} style={textColorStyle}>
        {text}
      </span>
      <span
        className={styles.buttonBackground}
        style={halfBackgroundStyle}
      ></span>
    </button>
  );
};

export default ServiceBtnBack;
