import React from "react";
import styles from "@/styles/About.module.scss";
import ValuesBlock from "@/About/ValuesBlock/ValuesBlock";
import AboutHero from "@/About/AboutHero/AboutHero";
// import TextClutch from "@/TextClutch";
// import TeamComponent from "@/TeamComponent/TeamComponent";
import ClientComponent from "@/ClientComponent/ClientComponent";
import CareerSection from "@/careerSection/CareerSection";
import SectionHeading from "@/SectionHeading/SectionHeading";
import QueryForm from "@/Forms/QueryForm";
import HeroBackgroundCover from "@/HeroImage/HeroBackgroundCover/HeroBackgroundCover";
import SeoComponent from "@/General/SEO/SeoComponent";
import { aboutData } from "../services/aboutServices";
import { getSeoData } from "../services/SeoService";
import { getClientData } from "../services/utilityService";

const AboutPage = ({ clientData, payload, seoData }) => {
  return (
    <>
      <SeoComponent data={seoData?.data} />
      <HeroBackgroundCover title={payload?.page_name} />
      <SectionHeading
        title={payload?.hero_section?.title}
        description={payload?.hero_section?.description}
        customClass={`page_spacing ${styles.welcome_container_wrapper} ${styles.section_Spacing}`}
      />

      <AboutHero data={payload?.work_cta} />

      <ValuesBlock data={payload?.value_block} />

      <div className={`page_spacing ${styles.intro_section_container}`}>
        <CareerSection data={payload?.hiring_block} />
      </div>

      <div className="page_spacing" style={{ margin: "0px 0" }}>
        <ClientComponent clientList={clientData.data} />
      </div>

      {/* <div className={`page_spacing ${styles.intro_section_container}`}>
        <SectionHeading
          title={payload?.review?.title}
          sub_title={payload?.review?.sub_title}
          quote={payload?.review?.quote}
          description={payload?.review?.description}
        />

        <div
          style={{ display: "flex", justifyContent: "center", margin: "0px" }}
        >
          <TextClutch />
        </div>
      </div> */}

      <div style={{ margin: "80px 0px" }}>
        <QueryForm page={"about"} />
      </div>
    </>
  );
};

export default AboutPage;

export async function getStaticProps() {
  const clientData = await getClientData();
  const response = await aboutData();
  const seoData = await getSeoData("about");

  return {
    props: {
      clientData: clientData.data,
      payload: response.data.data.attributes,
      seoData: seoData?.data,
    },
  };
}
