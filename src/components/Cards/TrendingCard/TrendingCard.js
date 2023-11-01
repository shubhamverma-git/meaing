import React from "react";
import classes from "./TrendingCard.module.scss";
import Arrow from "@/Animation/Arrow/Arrow";
import Image from "next/image";
import Pill from "@/Pill/Pill";
import { StrapyBaseUrl } from "../../../utils/Utility";
import { motion } from "framer-motion";

const TrendingCard = ({ data, pillClick }) => {
  const cardClickHandler = () => {};
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    variants={{
      visible: { opacity: 1, translateY: '-30px'},
      hidden: { opacity: 0, translateY: '-10px' }
    }}
      className={classes.container}
      onClick={() => data?.link && window.open(data.link,'_blank')}
    >
      <div className={classes.img_container}>
        <Image
          className={classes.card_img}
          src={`${StrapyBaseUrl}${data?.image_url?.data?.attributes?.url}`}
          alt={data?.image_url?.data?.attributes?.alternativeText}
          fill={true}
          placeholder="blur"
          blurDataURL={`${StrapyBaseUrl}${data?.image_url?.data?.attributes?.url}`}
        />
        <div className={classes.image_heading}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            {data?.services?.data?.map(({ attributes }, index) => (
              <Pill
                key={index}
                data={attributes.name}
                className={classes.pill}
                textColor={attributes.text_color}
                pillColor={attributes.color}
                onClick={() => pillClick(attributes.slug)}
              />
            ))}
          </div>
        </div>
        <div className={classes.overlay}></div>
      </div>
      <div className={classes.card_body}>
        <h4>{data?.title}</h4>
        <p className={classes.card_text}>{data?.description}</p>
      </div>

      <div className={`${classes.arrow_icon}`} style={{ marginTop: 10 }}>
        <Arrow onClick={cardClickHandler} />
      </div>
    </motion.div>
  );
};

export default TrendingCard;
