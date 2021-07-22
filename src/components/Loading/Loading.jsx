import React from "react";
import ReactLoading from "react-loading";
import "./styles.css";

const Loading = () => (
  <>
    <div className="loading-div">
      <ReactLoading type={"spin"} color="rgb(91, 88, 105)" />
    </div>
  </>
);

export default Loading;
