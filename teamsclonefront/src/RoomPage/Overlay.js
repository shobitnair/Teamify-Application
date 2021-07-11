import React from "react";
import "../resources/css/Overlay.css"

//Loader animation overlay before video meeting begins.
//controlled using a ASYNC function

const Overlay = () => {
  return (
    <div className="overlay_container">
      <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube"></div>
      <div className="sk-cube2 sk-cube"></div>
      <div className="sk-cube4 sk-cube"></div>
      <div className="sk-cube3 sk-cube"></div>
    </div>
    </div>
  );
};

export default Overlay;
