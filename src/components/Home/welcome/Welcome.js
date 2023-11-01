import React from "react";
import classes from "./Welcome.module.scss";

const Welcome = ({ heading, body, description, sub_heading, className }) => {
  return (
    <div className={`${classes.container} ${className}`}>
      <div className={classes.content}>
        <h2>
          <span>{heading}:</span> {body}
        </h2>
        {sub_heading && <h6 className={classes.sub_title}>{sub_heading}</h6>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Welcome;
