import React from "react";
import styles from "./HeroBackgroundText.module.scss";
import Image from "next/image";
import { StrapyBaseUrl } from "../../../utils/Utility";

const HeroBackgroundCover = ({ coverImage, title }) => {
  return (
    <div className={styles.container}>
      {coverImage ? (
        <Image
          src={`${StrapyBaseUrl}${coverImage?.url}`}
          blurDataURL={`${StrapyBaseUrl}${coverImage?.url}`}
          alt={coverImage?.alternativeText}
          width={coverImage.width}
          height={coverImage.height}
          className={styles.image}
          priority={1}
          placeholder="blur"
        />
      ) : (
        <div className={styles.hero_title}>{title}</div>
      )}
    </div>
  );
};

export default HeroBackgroundCover;
