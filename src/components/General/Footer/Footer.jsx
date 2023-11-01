import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import menuData from "@/../data/headerData";
import SectionHeading from "@/SectionHeading/SectionHeading";
import Subscribe from "./Subscribe";
import SocialMedia from "./SocialMedia";
import ServiceContainer from "./ServiceContainer";

const Footer = () => {
  return (
    <div className={`${styles.container} page_spacing`}>
      <SectionHeading
        title="Make Sure you are following along!"
        description="Keep up to date with all the latest news, events"
        customClass={styles.footer_heading}
      />
      <Subscribe />
      <ServiceContainer menuData={menuData} />

      <div className={styles.rights_sections}>
        <div className={styles.footer_navigations}>
          <div className={styles.nav_socials}>
            <Link className={styles.link} href={"/about"}>
              About
            </Link>
            <Link className={styles.link} href={"/work"}>
              Work
            </Link>
            <Link className={styles.link} href={"/contact"}>
              Contact
            </Link>
            <div className={styles.link} href={"/ideas"}>
              Ideas
            </div>
          </div>
          <SocialMedia />
        </div>
        <div className={styles.rights}>
          <p>© 2023-2024 Droot | All Rights Reserved</p>
          <Link href={"/privacy-policy"}>Privacy policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
