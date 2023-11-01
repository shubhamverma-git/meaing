import React from "react";
import Marquee from "react-fast-marquee";
import classes from "./Marquee.module.scss";

export default function MarqueeRow({ tags }) {
  return (
    <Marquee gradient={false} className={classes.container}>
      {tags.map((item, index) => (
        <p className={classes.heading} key={index}>
          {item.attributes.name}
        </p>
      ))}
    </Marquee>
  );
}
