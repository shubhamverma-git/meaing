import React from "react";
import classes from "./ValuesBlock.module.scss";
import SectionHeading from "@/SectionHeading/SectionHeading";
import ValuesCard from "./ValuesCard";

const ValuesBlock = ({data}) => {
  return (
    <div className={classes.container}>
      <SectionHeading
        title={data?.value_description?.title}
        sub_title={data?.value_description?.sub_title}
        quote={data?.value_description?.quote}
        description={data?.value_description?.description}
        customClass="page_spacing"
      />

      <div className={classes.values_card_container}>
        {data?.values?.data?.map((item, index) => (
          <ValuesCard item={item.attributes} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ValuesBlock;
