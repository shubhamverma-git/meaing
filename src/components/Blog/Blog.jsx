import BlogCard from "@/Cards/BlogCard/BlogCard.jsx";
import BlogcardSwiper from "../Carousel/BlogcardCarousel/BlogcardCarousel.jsx";
import styles from "./Blog.module.scss";
import React from "react";

export const Blog = ({ data }) => {
  if (!data?.length > 0) {
    return null;
  }
  return (
    <div className={styles.blog_list}>
      <h2 className={styles.heading}>BLOGS</h2>
      <BlogcardSwiper data={data} RenderComponent={BlogCard} />
    </div>
  );
};
