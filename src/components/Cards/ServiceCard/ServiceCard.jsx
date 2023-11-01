import React, { useEffect, useRef, useState } from "react";
import styles from "./ServiceCard.module.scss";
import ElementAnimation from "@/Animation/ElementAnimation";
import Pill from "@/Pill/Pill";
import Arrow from "@/Animation/Arrow/Arrow";

const ServiceCard = ({ data }) => {
  const imageDiv = useRef(null);
  const [isVisiable, setIsVisiable] = useState(false);
  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisiable(true);
      }
    });

    observe.observe(imageDiv.current);
  });
  return (
    <div className={styles.container} ref={imageDiv}>
      <div>
        <ElementAnimation
          outline={data.attributes.icon_outline?.data?.attributes.url}
          filled={data.attributes.icon_filled?.data?.attributes.url}
          isVisiable={isVisiable}
          className={styles.service_icon}
        />
        <h2 className={styles.title}>{data.attributes.name}</h2>
        <p className={styles.description}>
          {data.attributes?.card_description}
        </p>
      </div>
      <div className={styles.pills_container}>
        {data?.attributes?.sub_services?.data?.map((item, index) => (
          <Pill
            key={index}
            data={item.attributes.name}
            className={styles.pill}
          />
        ))}
      </div>
      <Arrow className={styles.rightArrow} />
    </div>
  );
};

export default ServiceCard;
