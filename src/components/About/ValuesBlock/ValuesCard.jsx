import React from "react";
import classes from "./ValuesBlock.module.scss";
import Image from "next/image";
import { StrapyBaseUrl } from "../../../utils/Utility";

export default function ValuesCard({ item, index }) {
  return (
    <div key={index} className={classes.single_value}>
      <Image
        src={`${StrapyBaseUrl}${item.icon_url.data.attributes.url}`}
        width={item.icon_url.data.attributes.width}
        height={item.icon_url.data.attributes.height}
        alt={item.icon_url.data.attributes.alternativeText}
        className={classes.image}
        placeholder="blur"
        blurDataURL={`${StrapyBaseUrl}${item.icon_url.data.attributes.url}`}
      />
        <div className={classes.details}>
          <h2>{item?.title}</h2>
          <p>{item?.description}</p>
        </div>
    </div>
  );
}
