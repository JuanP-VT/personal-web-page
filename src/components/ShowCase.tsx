import React, { useEffect } from "react";
import cvAppVid from "../video/cv-app.mp4";
import sketchVid from "../video/etch-a-sketch.mp4";
import libraryVid from "../video/library.mp4";
import shoppingVid from "../video/shopping-app.mp4";
import toDoListVid from "../video/to-do-list.mp4";
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
          <h1>Project Name</h1>
          <h3>Descripion</h3>
        </div>
        <div id="videoSlider">
          <video
            height="500"
            src={libraryVid}
            autoPlay={true}
            muted={true}
          ></video>
        </div>
      </div>
    </section>
  );
}

export default ShowCase;
