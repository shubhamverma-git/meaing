import React from "react";
// import styles from './software_used.module.scss'
import Image from "next/image";
import { StrapyBaseUrl } from "../../../utils/Utility";
import styles from '../../../styles/Services.module.scss'

function SoftwareUsed({ service_softwares, item }) {
  return (
    <div className={`page_spacing ${styles.service_softwares_container}`}>
      {service_softwares?.map((item, index) => (
        <Image
          key={index}
          src={`${StrapyBaseUrl}${item?.attributes?.image_url?.data?.attributes?.url}`}
          blurDataURL={`${StrapyBaseUrl}${item?.attributes?.image_url?.data?.attributes?.url}`}
          width={80}
          style={{ objectFit: "contain" }}
          height={80}
          alt={item?.attributes?.image_url?.data?.attributes?.alternativeText}
          placeholder="blur"
        />
      ))}
    </div>
  );
}

export default SoftwareUsed;
