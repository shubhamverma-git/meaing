import React from "react";
import classes from "./custom-button.module.scss";
import { BsChevronRight } from "react-icons/bs";

const CustomButton = ({ name, customClass, iconThickness,...rest }) => {
  return (
    <div className={`${classes.container} ${customClass}`}>
      <button {...rest}>
        <h5>{name}</h5>
        <span>
          <BsChevronRight
            style={{ strokeWidth: iconThickness }}
            className={classes.icon_class}
          />
        </span>
      </button>
    </div>
  );
};

export default CustomButton;
