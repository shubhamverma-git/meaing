import React from "react";
import IdeaContainer from "@/ideaContainer/IdeaContainer";
import styles from "./trending_ideas.module.scss";
import OnScrollAnimateX from "@/Animation/OnScrollAnimateX";

function TrendingIdeas({ trendingData, slug, isHomepage, serviceName }) {
  return (
    <div className={`page_spacing ${styles.trending_service_section}`}>
      <div className={styles.trending_section_heading}>
        <OnScrollAnimateX title="Trending" />
        <h2>{`Trending ${!isHomepage ? serviceName : ""} Ideas`}</h2>
      </div>
      <IdeaContainer data={trendingData} slug={slug} />
    </div>
  );
}

export default TrendingIdeas;
