import React from "react";
import { Loader } from "react-overlay-loader";
import "react-overlay-loader/styles.css";

const Loading = () => {
  return (
    <Loader
      fullPage
      loading
      text="Loading your content..."
      containerStyle={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 1200,
      }}
      textStyle={{
        color: "#fff",
      }}
    />
  );
};

export default Loading;
