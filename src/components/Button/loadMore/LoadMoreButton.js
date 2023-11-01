import React from "react";
import classes from "./LoadMoreButton.module.scss";
import { BsChevronRight } from "react-icons/bs";

const LoadMoreButton = ({ name, customClass, iconThickness, ...rest }) => {
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

export default LoadMoreButton;
