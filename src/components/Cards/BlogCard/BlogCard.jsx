import React from "react";
import Image from "next/image";
import styles from "./BlogCard.module.scss";
import Pill from "@/Pill/Pill";
import Arrow from "@/Animation/Arrow/Arrow";
import { StrapyBaseUrl } from "../../../utils/Utility";

const BlogCard = ({ card, index, onClick }) => {
  return (
    <div className={styles.container} key={index}>
      <Image
        src={`${StrapyBaseUrl}${card?.image_url?.data?.attributes?.url}`}
        blurDataURL={`${StrapyBaseUrl}${card?.image_url?.data?.attributes?.url}`}
        alt={card?.image_url?.data?.attributes?.alternativeText}
        style={{ width: "100%", objectFit: "cover" }}
        className={styles.image}
        loading="lazy"
        width={card?.image_url?.data?.attributes?.width}
        height={card?.image_url?.data?.attributes?.height}
        placeholder="blur"
      />
      <div style={{ display: "flex", gap: 10 }}>
        {card?.services?.data?.map(({ attributes }, index) => (
          <Pill
            key={index}
            data={attributes?.name}
            className={styles.pill}
            textColor={attributes?.text_color}
            pillColor={attributes?.color}
            onClick={() => onClick(attributes?.slug)}
          />
        ))}
      </div>

      <h2 className={styles.card_title}>{card?.title}</h2>
      <p className={styles.card_content}>{card?.description}</p>
      <div className={styles.arrow_container}>
        <Arrow className={styles.arrow} />
      </div>
    </div>
  );
};

export default BlogCard;
