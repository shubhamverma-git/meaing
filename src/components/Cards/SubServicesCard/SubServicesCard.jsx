import React from "react";
import styles from "./SubServicesCard.module.scss";
import Image from "next/image";
import right from "../../../../public/assets/icons/right.svg";
import { useRouter } from "next/router";
import Arrow from "@/Animation/Arrow/Arrow";
import { StrapyBaseUrl } from "../../../utils/Utility";

const SubServicesCard = ({ subServices, barColor }) => {
  const router = useRouter();
  const subServiceClickhandler = () => {
    //
  };
  return (
    <div className={`page_spacing ${styles.subService_container}`}>
      <div className={styles.grid_container}>
        {subServices.data?.map((ele, index) => (
          <div className={styles.subService_content} key={index}>
            <div
              className={`${styles.bar}`}
              style={{
                backgroundColor: barColor,
                position: "absolute",
                top: "0",
                left: "0",
              }}
            ></div>
            <div className={styles.single_details_container}>
              <div className={styles.bar_image}>
                <Image
                  src={`${StrapyBaseUrl}${ele?.attributes?.icon_url?.data?.attributes?.url}`}
                  blurDataURL={`${StrapyBaseUrl}${ele?.attributes?.icon_url?.data?.attributes?.url}`}
                  alt={
                    ele?.attributes?.icon_url?.data?.attributes?.alternativeText
                  }
                  className={styles.image}
                  placeholder="blur"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.subService_detail}>
                <h4 className={styles.title}>{ele?.attributes?.name}</h4>
                <i>{ele.attributes.card_quote}</i>
                <p className={styles.description}>
                  {ele?.attributes?.card_description}
                </p>
              </div>
              {/* <Arrow
                className={styles.right_arrow}
                onClick={subServiceClickhandler}
              /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubServicesCard;
