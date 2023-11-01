import React, { useEffect, useState } from "react";
import styles from "./ClientComponent.module.scss";
import ClientCard from "@/Cards/ClientCard/ClientCard";
import SectionHeading from "@/SectionHeading/SectionHeading";

const ClientComponent = ({ clientList, className }) => {
  return (
    <div className={`${styles.intro_section_container}`}>
      <SectionHeading title="Our Clients" sub_title="Partners in Progress" />

      <div className={styles.client_list}>
        {clientList?.map((item, index) => (
          <ClientCard clientData={item.attributes} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ClientComponent;
