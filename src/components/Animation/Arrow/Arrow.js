import React from "react";
import RightArrow from "../../../../public/assets/icons/right.svg";
import Image from "next/image";
import classes from "./Arrow.module.scss";

const Arrow = ({ className, onClick }) => {
  return (
    <Image
      src={RightArrow}
      className={`${classes.container} ${className}`}
      onClick={onClick}
      alt="arrow icon"
    />
  );
};

export default Arrow;
