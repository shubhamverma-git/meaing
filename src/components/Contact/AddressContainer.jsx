import React from "react";
import styles from "./AddressContainer.module.scss";
import { StrapyBaseUrl } from "../../utils/Utility";
import Image from "next/image";

export default function AddressContainer({ data }) {
  return (
    <div className={`page_spacing  ${styles.container}`}>
      <h2 className={styles.heading}>{data?.address_heading}</h2>
      <div className={styles.addresses}>
        {data?.addresses?.data.map((item, index) => (
          <div key={index} className={styles.address}>
            <Image
              src={`${StrapyBaseUrl}${item?.attributes?.image_url?.data?.attributes?.url}`}
              blurDataURL={`${StrapyBaseUrl}${item?.attributes?.image_url?.data?.attributes?.url}`}
              alt={
                item?.attributes?.image_url?.data?.attributes?.alternativeText
              }
              className={styles.image}
              width={item?.attributes?.image_url?.data?.attributes?.width}
              height={item?.attributes?.image_url?.data?.attributes?.height}
              placeholder="blur"
            />
            <div className={styles.address_content}>
              <p className={styles.city}>{item.attributes.city_name}</p>
              <p><a href={`tel: ${item.attributes.phone_number}`} className={styles.phone_number}>{item.attributes.phone_number}</a></p>
              <p><a href={`tel: ${item.attributes.phone_number}`} className={styles.email}>{item.attributes.email_id}</a></p>
              <p className={styles.address}>{item.attributes.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
