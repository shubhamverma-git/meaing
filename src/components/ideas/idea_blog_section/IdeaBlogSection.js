import React, { useRef, useState } from "react";
import classes from "./idea_blog_section.module.scss";
import BlogCard from "@/Cards/BlogCard/BlogCard";
import LoadMoreButton from "@/Button/loadMore/LoadMoreButton";
import Pill from "@/Pill/Pill";
import {
  getAllArticles,
  getFilteredArticles,
} from "../../../services/articleServices";

function IdeaBlogSection({ blog, services }) {
  const [blogFilterData, setBlogFilterData] = useState(blog);
  const [blogPill, setBlogPill] = useState(null);

  const pageNumber = useRef(1);

  function blogFilter(value) {
    pageNumber.current = 1;
    if (blogPill == value) {
      setBlogPill(null);
      setBlogFilterData(blog);
    } else {
      setBlogPill(value);
      getFilteredArticles("blog", value, 1)
        .then((res) => {
          setBlogFilterData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }

  const handlePageApiCall = () => {
    if (blogPill == null) {
      getAllArticles("blog", pageNumber.current + 1)
        .then((res) => {
          setBlogFilterData((prev) => {
            return {
              data: [...prev.data, ...res.data.data],
              meta: res.data.meta,
            };
          });
          ++pageNumber.current;
        })
        .catch((err) => console.log(err));
    } else {
      console.log(pageNumber.current);
      getFilteredArticles("blog", blogPill, pageNumber.current)
        .then((res) => {
          ++pageNumber.current;
          setBlogFilterData((prev) => {
            return {
              data: [...prev.data, ...res.data.data],
              meta: res.data.meta,
            };
          });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={classes.blog_container}>
      <div className={classes.title_container}>
        <h3>BLOGS</h3>

        <div>
          {services.map(({ attributes }, index) => (
            <Pill
              key={index}
              data={attributes?.name}
              onClick={() => blogFilter(attributes?.slug)}
              pillColor={
                attributes?.slug === blogPill ? attributes?.color : "white"
              }
              textColor={
                attributes?.slug === blogPill ? attributes?.text_color : "black"
              }
              className={classes.filter_pill}
              onMouseEnter={(e) => {
                if (attributes?.slug !== blogPill) {
                  e.currentTarget.style.backgroundColor = attributes?.color;
                  e.currentTarget.style.color = attributes?.text_color;
                }
              }}
              onMouseLeave={(e) => {
                if (attributes?.slug !== blogPill) {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "black";
                }
              }}
            />
          ))}
        </div>
      </div>
      <>
        <div className={classes.blog_card_container}>
          {blogFilterData.data?.map(({ attributes }, index) => (
            // <></>
            <BlogCard
              card={attributes}
              key={index}
              //  onClick={blogFilter}
            />
          ))}
        </div>

        <div className={classes.load_more_button}>
          {blogFilterData?.data?.length <
            blogFilterData?.meta?.pagination?.total && (
            <LoadMoreButton name="Load more" onClick={handlePageApiCall} />
          )}
        </div>
      </>
    </div>
  );
}

export default IdeaBlogSection;
