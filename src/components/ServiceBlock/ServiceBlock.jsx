import React from "react";
import ServiceCard from "@/Cards/ServiceCard/ServiceCard.jsx";
import styles from "./ServiceBlock.module.scss";
import { useRouter } from "next/router";
import SectionHeading from "@/SectionHeading/SectionHeading.jsx";

export const ServiceBlock = ({ data }) => {
  const router = useRouter();
  const handleClick = (ele) => {
    router.push({ pathname: `/services/${ele.attributes.slug}` });
  };

  return (
    <div className="page_spacing">
        <SectionHeading
          customClass={styles.intro_spacing}
          title={`Our Services`}
          sub_title={`Transforming Visions into Reality`}
          description={`We offer a holistic suite of services designed to ignite growth and innovation across every facet of your business. From visual identity to intricate software development, we bring your dreams to life. Our strategic insights illuminate the path to success, while cutting-edge technology sets the stage for unprecedented achievements.`}
        />
      <div className={styles.card_container}>
        {data.map((item, index) => (
          <div className={`${styles.card}`} key={index}>
            <div
              onClick={() => handleClick(item)}
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
                height: "100%",
              }}
            >
              <ServiceCard data={item} key={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
