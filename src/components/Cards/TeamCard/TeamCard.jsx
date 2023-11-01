import React from "react";
import styles from "./TeamCard.module.scss";
import Image from "next/image";
import { StrapyBaseUrl } from "../../../utils/Utility";
const TeamCard = ({ card, index }) => {
  return (
    <div key={index} className={styles.container}>
      <div className={styles.image}>
        <Image
          src={`${StrapyBaseUrl}${card?.image_url?.data?.attributes.url}`}
          blurDataURL={`${StrapyBaseUrl}${card?.image_url?.data?.attributes.url}`}
          alt={card?.image_url?.data?.attributes?.alternativeText}
          loading="lazy"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          height={card?.image_url?.data?.attributes?.height}
          width={card?.image_url?.data?.attributes.width}
          placeholder="blur"
        />
      </div>
      <h5 className={styles.name}>{card.name}</h5>
      <h4 className={styles.designation}>{card.designation}</h4>
    </div>
  );
};

export default TeamCard;
