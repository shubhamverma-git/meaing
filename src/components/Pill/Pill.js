import React from "react";
import classes from "./Pill.module.scss";

const Pill = ({ data, className, pillColor, textColor, ...rest }) => {
  return (
    <span
      className={`${classes.container} ${className}`}
      style={{
        color: textColor,
        backgroundColor: pillColor,
      }}
      {...rest}
    >
      {data}
    </span>
  );
};

export default Pill;
