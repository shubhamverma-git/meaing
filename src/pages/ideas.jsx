import React, { useRef, useState } from "react";
import classes from "../styles/ideas.module.scss";
import TrendingCard from "@/Cards/TrendingCard/TrendingCard";
import axios from "axios";
import Pill from "@/Pill/Pill";
import {
  getAllArticles,
  getFilteredArticles,
} from "../services/articleServices";
import HeroBackgroundCover from "@/HeroImage/HeroBackgroundCover/HeroBackgroundCover";
import SeoComponent from "@/General/SEO/SeoComponent";
import { getSeoData } from "../services/SeoService";
import LoadMoreButton from "@/Button/loadMore/LoadMoreButton";
import IdeaBlogSection from "@/ideas/idea_blog_section/IdeaBlogSection";

const IdeaPage = ({ ideas, blog, services, seoData }) => {
  const [selectedPill, setSelectedPill] = useState(null);
  const [filterData, setFilterData] = useState(ideas);

  const ideaPageNum = useRef(1);

  function filterPills(value) {
    ideaPageNum.current = 1;
    if (selectedPill == value) {
      setSelectedPill(null);
      setFilterData(ideas);
    } else {
      setSelectedPill(value);
      getFilteredArticles("idea", value, 1)
        .then((res) => {
          ++ideaPageNum.current;
          setFilterData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }

  const handlePageApiCall = () => {
    if (selectedPill == null) {
      getAllArticles("idea", ideaPageNum.current + 1)
        .then((res) => {
          setFilterData((prev) => {
            return {
              data: [...prev.data, ...res.data.data],
              meta: res.data.meta,
            };
          });
          ++ideaPageNum.current;
        })
        .catch((err) => setFilterData(err));
    } else {
      getFilteredArticles("idea", selectedPill, ideaPageNum.current)
        .then((res) => {
          ++ideaPageNum.current;
          setFilterData((prev) => {
            return {
              data: [...prev.data, ...res.data.data],
              meta: res.data.meta,
            };
          });
        })
        .catch((err) => console.log(err));
    }
  };

  console.log();
  return (
    <>
      <SeoComponent data={seoData?.data} />
      <HeroBackgroundCover title="Ideas" />

      <div className={`${classes.container} page_spacing`}>
        <div className={classes.title_container}>
          <h3>Trending Articles</h3>

          <div>
            {services.map(({ attributes }, index) => (
              <>
                <Pill
                  key={index}
                  data={attributes?.name}
                  pillColor={
                    attributes?.slug === selectedPill
                      ? attributes?.color
                      : "white"
                  }
                  textColor={
                    attributes?.slug === selectedPill
                      ? attributes?.text_color
                      : "black"
                  }
                  className={classes.filter_pill}
                  onClick={() => filterPills(attributes?.slug)}
                  onMouseEnter={(e) => {
                    if (attributes?.slug !== selectedPill) {
                      e.currentTarget.style.backgroundColor = attributes?.color;
                      e.currentTarget.style.color = attributes?.text_color;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (attributes?.slug !== selectedPill) {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.color = "black";
                    }
                  }}
                />
              </>
            ))}
          </div>
        </div>

        <>
          <div className={classes.idea_card_container}>
            {filterData?.data?.map((el, index) => (
              <TrendingCard
                data={el?.attributes}
                key={index}
                pillClick={filterPills}
              />
            ))}
          </div>
          <div className={classes.load_more_button}>
            {filterData?.data?.length < filterData?.meta?.pagination?.total && (
              <LoadMoreButton
                name="Load more"
                onClick={handlePageApiCall}
                iconThickness={1}
              />
            )}
          </div>
        </>
        {blog?.data?.length > 0 && (
          <IdeaBlogSection blog={blog} services={services} />
        )}
      </div>
    </>
  );
};

export default IdeaPage;

export async function getStaticProps() {
  const seoData = await getSeoData("ideas");
  const ideas = await getAllArticles("idea", 1);
  const blog = await getAllArticles("blog", 1);
  const service = await axios.get("https://insights.droot.in/api/services");

  return {
    props: {
      ideas: ideas?.data,
      blog: blog?.data,
      services: service.data.data,
      seoData: seoData.data,
    },
  };
}
