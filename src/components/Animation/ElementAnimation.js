import React from "react";
import styles from "./ElementAnimation.module.scss";
import Image from "next/image";
import { StrapyBaseUrl } from "../../utils/Utility";

const ElementAnimation = ({
  outline,
  filled,
  isVisiable,
  style,
  className,
}) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={`${StrapyBaseUrl}${outline}`}
        style={{ objectFit: "contain", margin: "2px", ...style }}
        className={`${styles.outline} ${className}`}
        height={100}
        width={100}
        alt="service icon"
        placeholder="blur"
        blurDataURL={`${StrapyBaseUrl}${outline}`}
      />
      {isVisiable && (
        <Image
          src={`${StrapyBaseUrl}${filled}`}
          style={{ objectFit: "contain", margin: "2px", ...style }}
          className={`${styles.filled} ${className}`}
          height={100}
          width={100}
          alt="service icon"
          placeholder="blur"
          blurDataURL={`${StrapyBaseUrl}${filled}`}
        />
      )}
    </div>
  );
};

export default ElementAnimation;
