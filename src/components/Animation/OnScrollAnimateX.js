import React from "react";

const OnScrollAnimateX = ({ title, style }) => {
  return (
    <h3
      style={{zIndex: 1, ...style }}
    >
      {title}
    </h3>
  );
};

export default OnScrollAnimateX;