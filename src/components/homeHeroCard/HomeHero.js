import React from "react";
import classes from "./HomeHero.module.scss";
import RightArrow from "../../../public/assets/icons/right.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const HomeHero = ({ title, sub_title, description }) => {
  const router = useRouter();
  return (
    <div className={classes.container}>
      <div className={classes.mob_description}>
        <h2>{title}</h2>
        <h3>{sub_title}</h3>
      </div>
      <video
        src="assets/videos/v3.mp4"
        muted
        loop
        autoPlay
        className="video"
        type="video/mp4"
      />
      <div className={classes.description}>
        <h2>{title}</h2>
        <h3>{sub_title}</h3>
        <p>{description}</p>
        <div className={classes.arrow_container}>
          <Image
            src={RightArrow}
            className={classes.rightArrow}
            alt="right arrow"
            onClick={() => router.push("/about")}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
