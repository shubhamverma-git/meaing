import React from "react";

import Accordion from "@/Accordion/Accordion";
import { Blog } from "@/Blog/Blog";
import SubServicesCard from "@/Cards/SubServicesCard/SubServicesCard";
import QueryForm from "@/Forms/QueryForm";
import SeoComponent from "@/General/SEO/SeoComponent";
import HeroBackgroundCover from "@/HeroImage/HeroBackgroundCover/HeroBackgroundCover";
import ServiceIntro from "@/service_components/service_intro/ServiceIntro";
import SoftwareUsed from "@/service_components/software_used/SoftwareUsed";

import { getServiceDetailPageData } from "../../services/serviceDetailsPage";
import { getHighlightedArticles } from "../../services/articleServices";
import { getSeoData } from "../../services/SeoService";

import styles from "../../styles/Services.module.scss";
import TrendingIdeas from "@/service_components/trending_ideas/TrendingIdeas";

export default function DataAndAi({ trendingData, blog, data, seoData, slug }) {
  const { attributes } = data;
  return (
    <>
      <SeoComponent data={seoData?.data} />
      <div className={styles.service_section_container}>
        <HeroBackgroundCover
          coverImage={
            attributes?.service_detail?.data?.attributes?.cover_image?.data
              ?.attributes
          }
        />
        <ServiceIntro service={attributes} ColorTheme={attributes.color} />
        <SubServicesCard
          subServices={attributes.sub_services}
          barColor={attributes.color}
        />
        <SoftwareUsed service_softwares={attributes.software.data} />

        {attributes.faqs.data.length > 0 && (
          <Accordion faqList={attributes.faqs.data} />
        )}

        <QueryForm
          attributes={attributes}
          page={attributes.slug}
          quireBtn={
            attributes.slug == "development"
              ? styles.development_btn_quire_form
              : attributes.slug == "data-and-ai"
              ? styles.data_and_ai_btn_quire_form
              : attributes.slug == "design"
              ? styles.design_btn_quire_form
              : attributes.slug == "strategy"
              ? styles.strategies_btn_quire_form
              : undefined
          }
        />

        {trendingData?.data?.length > 0 && (
          <TrendingIdeas trendingData={trendingData} slug={slug} serviceName={data?.attributes?.name}/>
        )}
      </div>
      <div className={styles.blog_wrapper}>
        <Blog data={blog} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const result = await getServiceDetailPageData("data-and-ai");
  const ideas = await getHighlightedArticles("idea", "data-and-ai", 1, 3);
  const blog = await getHighlightedArticles("blog", "data-and-ai", 1, 100);
  const seoData = await getSeoData("data-and-ai");
  return {
    props: {
      data: result?.data?.data.find((el) => el),
      trendingData: ideas?.data,
      blog: blog?.data?.data,
      seoData: seoData.data,
      slug: "data-and-ai",
    },
  };
}
