import React from "react";
import classes from "./sectionHeading.module.scss";

function SectionHeading({ title, sub_title, quote, description, customClass }) {
  return (
    <div className={`${classes.container} ${customClass}`}>
      <h1>
        {title}
        {sub_title && ":"} <span>{sub_title}</span>
      </h1>
      {quote && <h3>{quote}</h3>}
      <p className={classes.description}>{description}</p>
    </div>
  );
}

export default SectionHeading;
