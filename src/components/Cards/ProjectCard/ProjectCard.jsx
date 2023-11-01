import React from "react";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import Arrow from "@/Animation/Arrow/Arrow";
import { StrapyBaseUrl } from "../../../utils/Utility";
export default function ProjectCard({ data }) {
  return (
    <div className={`${styles.card}`}>
      <Image
        className={`${styles.cardImage}`}
        src={`${StrapyBaseUrl}${data.attributes.image_url.data.attributes.url}`}
        blurDataURL={`${StrapyBaseUrl}${data.attributes.image_url.data.attributes.url}`}
        width={data.attributes.image_url.data.attributes.width}
        height={data.attributes.image_url.data.attributes.height}
        alt={data.project_name ? data.project_name : "Project card image"}
        priority
        placeholder="blur"
      />
      <div className={`${styles.cardContent}`}>
        <p>{data.attributes.project_description}</p>
        <div className={styles.arrow_container}>
        <h3>{data.attributes.company_name}</h3>
          <Arrow />
        </div>
      </div>
    </div>
  );
}
