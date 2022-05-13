import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonWrapper = ({ children }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        paddingRight: "0.6rem",
        marginTop: "1rem",
        width: 320,
      }}
    >
      {children}
    </div>
  );
};

const SkeletonLoading = ({
  wrapper = false,
  radius = "4rem",
  height = 55,
  width = 375,
  count = 1,
}) => (
  <Skeleton
    wrapper={wrapper && SkeletonWrapper}
    borderRadius={radius}
    height={height}
    width={width}
    count={count}
  />
);

export default SkeletonLoading;
