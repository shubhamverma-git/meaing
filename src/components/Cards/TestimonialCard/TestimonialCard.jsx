import React from "react";
import styles from "./TestimonialCard.module.scss";
import Image from "next/image";
import { StrapyBaseUrl } from "../../../utils/Utility";

const TestimonialCard = ({ card, index }) => {
  return (
    <div className={styles.container} key={index}>
      {card.image_url && (
        <Image
          src={`${StrapyBaseUrl}${card.image_url.data.attributes.url}`}
          blurDataURL={`${StrapyBaseUrl}${card.image_url.data.attributes.url}`}
          alt={card.image_url.data.attributes.alternativeText}
          style={{ width: "100%", marginBottom: "10px", objectFit: "cover" }}
          placeholder="blur"
          height={card.image_url.data.attributes.height}
          width={card.image_url.data.attributes.width}
        />
      )}
      <h2
        className={styles.card_title}
        style={{ textAlign: "left", marginBottom: "10px" }}
      >
        {card.name}
      </h2>
      {card.designation && (
        <h5 className={styles.sub_title} style={{ textAlign: "left" }}>
          {card.designation}
        </h5>
      )}
      {card.company_name && (
        <h5
          className={styles.sub_title}
          style={{ textAlign: "left", marginTop: "5px" }}
        >
          {card.company_name}
        </h5>
      )}
      <p
        className={styles.card_content}
        style={{ textAlign: "left", marginTop: "10px" }}
      >
        {card.review}
      </p>
    </div>
  );
};

export default TestimonialCard;
