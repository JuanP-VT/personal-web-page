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
  colorMode: string;
};

function NavBar({ setColorMode, colorMode }: Props) {
  useEffect(() => {
    console.log(colorMode);
    const NavBar = document.querySelector("#NavBar") as HTMLDivElement;
    if (colorMode === "") {
      window.addEventListener("scroll", scrollDark);
    }
    if (colorMode === "light") {
      window.addEventListener("scroll", scrollLight);
    }
    return () => {
      window.removeEventListener("scroll", scrollDark);
      window.removeEventListener("scroll", scrollLight);
    };
    function scrollDark() {
      if (window.scrollY > 50) {
        NavBar.classList.remove("static");
        NavBar.classList.remove("light");
        NavBar.classList.add("scrolled");
        NavBar.classList.add("dark");
      }
      if (window.scrollY < 50) {
        NavBar.classList.add("static");
        NavBar.classList.remove("light");

        NavBar.classList.remove("scrolled");
        NavBar.classList.remove("dark");
      }
    }
    function scrollLight() {
      if (window.scrollY > 50) {
        NavBar.classList.remove("dark");

        NavBar.classList.remove("static");
        NavBar.classList.add("scrolled");
        NavBar.classList.add("light");
      }
      if (window.scrollY < 50) {
        NavBar.classList.remove("dark");
        NavBar.classList.add("static");
        NavBar.classList.remove("scrolled");
        NavBar.classList.remove("light");
      }
    }
  }, [colorMode]);
  // Handle color switch
  function handleColorSwitch(e: MouseEvent) {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      setColorMode("");
      return;
    }
    if (target.classList.contains("active") === false) {
      target.classList.add("active");
      setColorMode("light");
      return;
    }
  }
  return (
    <div id="NavBar" className="static">
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
