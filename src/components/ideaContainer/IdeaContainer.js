import React, { useRef, useState } from "react";
import classes from "./IdeaContainer.module.scss";
import LoadMoreButton from "@/Button/loadMore/LoadMoreButton";
import TrendingCard from "@/Cards/TrendingCard/TrendingCard";
import { getHighlightedArticles } from "../../services/articleServices";

const IdeaContainer = ({ data, slug }) => {
  const [ideaData, setIdeaData] = useState(data);

  const pageNum = useRef(1);

  function handlePagination() {
    getHighlightedArticles("idea", slug, pageNum.current + 1, 3)
      .then((res) => {
        ++pageNum.current;
        setIdeaData((prev) => {
          return {
            data: [...prev.data, ...res.data.data],
            meta: res.data.meta,
          };
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={classes.container}>
      <div className={classes.idea_card_container}>
        {ideaData?.data?.map((item, index) => (
          <TrendingCard key={index} data={item?.attributes} />
        ))}
      </div>

      {data?.meta?.pagination.total > ideaData?.data?.length && (
        <div className={classes.button_container}>
          <LoadMoreButton
            customClass={classes.button}
            name={"Load more"}
            iconThickness={1}
            onClick={handlePagination}
          />
        </div>
      )}
    </div>
  );
};

export default IdeaContainer;
