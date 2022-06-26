import React, { useEffect, MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faScrewdriverWrench,
  faStar,
  faFolder,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
type Props = {
  setColorMode: React.Dispatch<React.SetStateAction<string>>;
};
function NavBar({ setColorMode }: Props) {
  // Handle color switch
  function handleColorSwitch(e: MouseEvent) {
    const target = e.target as HTMLDivElement;

    console.log(target);

    if (target.classList.contains("active")) {
      target.classList.remove("active");
      setColorMode("");
      console.log(target);

      return;
    }
    if (target.classList.contains("active") === false) {
      target.classList.add("active");
      setColorMode("light");
      console.log(target);

      return;
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navBar = document.querySelector("#NavBar") as HTMLDivElement;
      const alterName = document.querySelector("#nameOne") as HTMLSpanElement;
      if (window.scrollY > 50) {
        navBar.classList.add("scrolled");
        alterName.classList.add("alter");
      }
      if (window.scrollY < 50) {
        navBar.classList.remove("scrolled");
        alterName.classList.remove("alter");
      }
    });
  }, []);
  return (
    <div id="NavBar">
      <div id="navBarName">
        <span id="nameOne">Juan</span> <span id="nameTwo">Pablo</span>
      </div>
      <div id="navBarList">
        <div className="container">
          <FontAwesomeIcon icon={faHome} />

          <a href="#Home">Home</a>
        </div>
        <div className="container">
          <FontAwesomeIcon icon={faAddressCard} />
          <a href="#About">About</a>
        </div>
        <div className="container">
          <FontAwesomeIcon icon={faScrewdriverWrench} />

          <a href="#Skills">Skills</a>
        </div>
        <div className="container">
          <FontAwesomeIcon icon={faStar} />
          <a href="#ShowCase">Showcase</a>
        </div>
        <div className="container">
          <FontAwesomeIcon icon={faFolder} />
          <a href="#AllProjects">All Projects</a>
        </div>
        <div id="switchColor" className="switch" onClick={handleColorSwitch}>
          <FontAwesomeIcon icon={faMoon} id="moonIcon" />
          <FontAwesomeIcon icon={faSun} id="sunIcon" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
