import React, { useState } from "react";
import styles from "./ClientCard.module.scss";
import Image from "next/image";
import { StrapyBaseUrl } from "../../../utils/Utility";

export default function ClientCard({ clientData }) {
  const { company_name, logo_url } = clientData;
  return (
    <div className={styles.container}>
      <Image
        src={`${StrapyBaseUrl}${logo_url?.data?.attributes?.url}`}
        blurDataURL={`${StrapyBaseUrl}${logo_url?.data?.attributes?.url}`}
        alt={logo_url?.data?.attributes?.alternativeText}
        className={styles.image}
        height={100}
        width={100}
        placeholder="blur"
      />
      <h4 className={styles.name}>{company_name}</h4>
    </div>
  );
}
