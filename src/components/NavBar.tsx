import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faScrewdriverWrench,
  faStar,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
function NavBar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navBar = document.querySelector("#NavBar") as HTMLDivElement;
      const alterName = document.querySelector("#alter") as HTMLSpanElement;
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
        Juan <span id="alter">Pablo</span>
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
      </div>
    </div>
  );
}

export default NavBar;
