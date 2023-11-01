import React from "react";
import styles from "./team_style.module.scss";
import TeamCard from "@/Cards/TeamCard/TeamCard";
import SectionHeading from "@/SectionHeading/SectionHeading";
const TeamComponent = ({ data, className }) => {
  return (
    <div className={`${styles.container} page_padding `}>
      <SectionHeading
        title={data?.team_heading?.title}
        sub_title={data?.team_heading?.sub_title}
        description={data?.team_heading?.description}
        customClass={styles.heading_comp}
      />

      <div className={styles.team_card_container}>
        {data?.teams?.data.map((item, index) => (
          <div key={index}>
            <TeamCard card={item.attributes} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamComponent;
