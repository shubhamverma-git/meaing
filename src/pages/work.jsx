import React from "react";
import styles from "@/styles/WorkPage.module.scss";
import ProjectCard from "@/Cards/ProjectCard/ProjectCard";
import QueryForm from "@/Forms/QueryForm";
import SeoComponent from "@/General/SEO/SeoComponent";
import { getOurProjects } from "../services/OurWork";
import HeroBackgroundCover from "@/HeroImage/HeroBackgroundCover/HeroBackgroundCover";
import { getSeoData } from "../services/SeoService";

const WorkPage = ({ seoData, data }) => {
  return (
    <div className={styles.container}>
      <SeoComponent data={seoData?.data} />
      <HeroBackgroundCover title="Our Work" />
      <div className={`${styles.card_container} page_spacing`}>
        {data?.workData?.data.map((item, index) => (
          <ProjectCard data={item} key={index} />
        ))}
      </div>
      <QueryForm page={"work"} />
    </div>
  );
};

export default WorkPage;

export async function getStaticProps() {
  const workData = await getOurProjects();
  const seoData = await getSeoData("work");
  return {
    props: {
      data: { workData: workData?.data, seoData: seoData?.data },
    },
  };
}
