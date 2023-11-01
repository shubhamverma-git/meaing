import React from "react";
import ReactMarkdown from "react-markdown";

export default function textblog({ data }) {
  return (
    <div
      style={{
        marginTop: 70,
      }}
    >
      <ReactMarkdown
        transformImageUri={(uri) => `https://insights.droot.in${uri}`}
      >
        {JSON.parse(JSON.stringify(data?.attributes?.test))}
      </ReactMarkdown>
    </div>
  );
}

export async function getServerSideProps() {
  let res = await fetch("https://insights.droot.in/api/blogs/1");
  let json = await res?.json();

  return {
    props: { data: json?.data },
  };
}
