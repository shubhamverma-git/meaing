import React from "react";
// import styles from "./service_into.module.scss";
import ElementAnimation from "@/Animation/ElementAnimation";
import Image from "next/image";
import { StrapyBaseUrl } from "../../../utils/Utility";
import styles from '../../../styles/Services.module.scss'

function ServiceIntro({ service }) {
  return (
    <div className={`${styles.subService_desktop_view}`}>
      <div className={`page_spacing ${styles.hero_container}`}>
        <div className={`${styles.service_section_intro}`}>
          <div className={styles.details_section}>
            <div className={`${styles.subService_intro_heading}`}>
              <div className={styles.animated_icon_container}>
                {service?.name && (
                  <ElementAnimation
                    outline={`${service?.icon_outline?.data?.attributes?.url}`}
                    filled={`${service?.icon_filled?.data?.attributes?.url}`}
                    isVisiable={true}
                    className={styles.service_icon_animated}
                  />
                )}
              </div>
              <div className={styles.title_container}>
                <h4 className={styles.title}>{service?.name}</h4>
              </div>
            </div>
            <div className={`${styles.subService_intro_content}`}>
              <div className={styles.service_description_container}>
                <p className={styles.intro}>
                  <i>{service?.service_detail?.data?.attributes?.quote}</i>
                </p>
                <p className={styles.description}>
                  {service?.service_detail?.data?.attributes?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image_container}>
          {/* Mobile view needs heading on top of the Image */}
          <div className={`${styles.mobile_subService_intro_heading}`}>
            <div className={styles.animated_icon_container}>
              {service?.name && (
                <ElementAnimation
                  outline={`${service?.icon_outline?.data?.attributes?.url}`}
                  filled={`${service?.icon_filled?.data?.attributes?.url}`}
                  isVisiable={true}
                  className={styles.service_icon_animated}
                />
              )}
            </div>
            <h4 className={styles.title}>{service?.name}</h4>
          </div>
          <Image
            src={`${StrapyBaseUrl}${service?.service_detail?.data?.attributes?.hero_image?.data?.attributes?.url}`}
            blurDataURL={`${StrapyBaseUrl}${service?.service_detail?.data?.attributes?.hero_image?.data?.attributes?.url}`}
            alt={service.name ? service.name : "hero image"}
            width={1024}
            height={1024}
            className={styles.hero_image}
            placeholder="blur"
          />
        </div>
        <div
          className={styles.horizontal_bar}
          style={{ backgroundColor: "#000" }}
        />
      </div>
    </div>
  );
}

export default ServiceIntro;
