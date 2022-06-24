import React, { useEffect } from "react";
import cvAppVid from "../video/cv-app.mp4";
import sketchVid from "../video/etch-a-sketch.mp4";
import libraryVid from "../video/library.mp4";
import shoppingVid from "../video/shopping-app.mp4";
import toDoListVid from "../video/to-do-list.mp4";
import tvIcn from "../img/tv.png";
function ShowCase() {
  useEffect(() => {});
  return (
    <section id="ShowCase">
      <div className="sectionTitle">
        <p>
          Show
          <span className="alter">Case</span>
        </p>
      </div>
      <div id="carousel">
        <div className="txtContainer">
          <h1 id="projectName">Project Name</h1>
          <h3 id="projectDesc">Description</h3>
        </div>
        <div id="videoSliderContainer">
          <img src={tvIcn}></img>
          <div className="videoSlider">
            {" "}
            <video src={sketchVid} muted={true}></video>
            <video src={cvAppVid} muted={true}></video>
            <video src={shoppingVid} muted={true}></video>
            <video src={libraryVid} muted={true}></video>
            <video src={toDoListVid} muted={true}></video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowCase;
