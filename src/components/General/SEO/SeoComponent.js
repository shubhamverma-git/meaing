import { ArticleJsonLd, NextSeo } from "next-seo";
import React from "react";

const SeoComponent = ({
  data,
  blog,
  postType,
  postURL,
  postTitle,
  datePublished,
  dateModified,
  authorName,
  description,
}) => {
  return (
    <>
      <NextSeo
        title={data && data[0]?.attributes?.meta_title}
        description={data && data[0]?.attributes?.meta_description}
        canonical={data && data[0]?.attributes?.canonical}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Jane Doe",
          },
        ]}
      />
      {data && (
        <meta
          name={"keywords"}
          content={data && data[0]?.attributes?.keywords}
        />
      )}
      {blog && (
        <ArticleJsonLd
          type={postType}
          url={postURL}
          title={postTitle}
          datePublished={datePublished}
          dateModified={dateModified}
          authorName={authorName}
          description={description}
        />
      )}
    </>
  );
};

export default SeoComponent;

/** Hint
 * nextSeo: 'https://github.com/garmeeh/next-seo'
 */
