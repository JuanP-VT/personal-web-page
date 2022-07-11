import React, { useEffect, useState } from "react";
import cvAppVid from "../video/cv-app.mp4";
import sketchVid from "../video/etch-a-sketch.mp4";
import libraryVid from "../video/library.mp4";
import shoppingVid from "../video/shopping-app.mp4";
import toDoListVid from "../video/to-do-list.mp4";
import tvIcn from "../img/tv.png";

function ShowCase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  useEffect(() => {
    function playVideo() {
      const currentVideo = document.querySelector(
        `[data-index="${currentIndex}"]`
      ) as HTMLVideoElement;
      currentVideo.classList.add("videoActive");
      currentVideo.play();
    }
    // Add event to each video to play next one when finished
    const videoSlider = document.querySelector(
      ".videoSlider"
    ) as HTMLDivElement;
    const arrayOfVideos = Array.from(videoSlider.children);
    // Set Max Index in state
    setMaxIndex(arrayOfVideos.length - 1);
    for (let index = 0; index < arrayOfVideos.length; index++) {
      const element = arrayOfVideos[index];
      element.addEventListener("ended", () => {
        element.classList.remove("videoActive");
        if (currentIndex >= maxIndex) {
          setCurrentIndex(0);
          return;
        }
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
      });
    }
    playVideo();
    // Change text titles
    const title = document.querySelector("#projectName") as HTMLDivElement;
    if (currentIndex === 0) {
      title.textContent = "Etch A Sketch";
    }
    if (currentIndex === 1) {
      title.textContent = "Curriculum Creator";
    }
    if (currentIndex === 2) {
      title.textContent = "Fortnite Shop";
    }
    if (currentIndex === 3) {
      title.textContent = "Library App";
    }
    if (currentIndex === 4) {
      title.textContent = "Activity Tracker ";
    }
  }, [currentIndex, maxIndex]);

  return (
    <section id="ShowCase" className="showcase">
      <div className="sectionTitle">
        <p>
          Show
          <span className="alter">Case</span>
        </p>
      </div>
      <div id="carousel">
        <div className="txtContainer">
          <h1 id="projectName">Project Name</h1>
        </div>
        <div id="videoSliderContainer">
          <img src={tvIcn} alt="Tv background"></img>

          <div className="videoSlider">
            {" "}
            <video src={sketchVid} muted={true} data-index={0}></video>
            <video src={cvAppVid} muted={true} data-index={1}></video>
            <video src={shoppingVid} muted={true} data-index={2}></video>
            <video src={libraryVid} muted={true} data-index={3}></video>
            <video src={toDoListVid} muted={true} data-index={4}></video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowCase;
