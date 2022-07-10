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
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import esFlag from "../img/es.png";
import enFlag from "../img/en.png";

type Props = {
  setColorMode: React.Dispatch<React.SetStateAction<string>>;
  colorMode: string;
  setCurrentLang: React.Dispatch<React.SetStateAction<string>>;
  currentLang: string;
};

function NavBar({
  setColorMode,
  colorMode,
  setCurrentLang,
  currentLang,
}: Props) {
  //Manage navbar scroll behavior
  useEffect(() => {
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
  }, [colorMode]);
  // Handle color switch
  function handleColorSwitch(e: MouseEvent) {
    const target = document.querySelector("#switchColor") as HTMLDivElement;
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      setColorMode("");
      scrollDark();
      return;
    }
    if (target.classList.contains("active") === false) {
      target.classList.add("active");
      setColorMode("light");
      scrollLight();
      return;
    }
  }
  function scrollDark() {
    const NavBar = document.querySelector("#NavBar") as HTMLDivElement;
    const NavBarList = document.querySelector("#navBarList") as HTMLDivElement;

    if (window.scrollY > 50) {
      NavBar.classList.remove("static");
      NavBar.classList.remove("light");
      NavBar.classList.add("scrolled");
      NavBar.classList.add("dark");
      NavBarList.classList.remove("static");
      NavBarList.classList.remove("light");
      NavBarList.classList.add("scrolled");
      NavBarList.classList.add("dark");
    }
    if (window.scrollY < 50) {
      NavBar.classList.add("static");
      NavBar.classList.remove("light");
      NavBar.classList.remove("scrolled");
      NavBar.classList.remove("dark");
      NavBarList.classList.add("static");
      NavBarList.classList.remove("light");
      NavBarList.classList.remove("scrolled");
      NavBarList.classList.remove("dark");
    }
  }
  function scrollLight() {
    const NavBar = document.querySelector("#NavBar") as HTMLDivElement;
    const NavBarList = document.querySelector("#navBarList") as HTMLDivElement;
    if (window.scrollY > 50) {
      NavBar.classList.remove("dark");
      NavBar.classList.remove("static");
      NavBar.classList.add("scrolled");
      NavBar.classList.add("light");
      NavBarList.classList.remove("dark");
      NavBarList.classList.remove("static");
      NavBarList.classList.add("scrolled");
      NavBarList.classList.add("light");
    }
    if (window.scrollY < 50) {
      NavBar.classList.remove("dark");
      NavBar.classList.add("static");
      NavBar.classList.remove("scrolled");
      NavBar.classList.remove("light");
      NavBarList.classList.remove("dark");
      NavBarList.classList.add("static");
      NavBarList.classList.remove("scrolled");
      NavBarList.classList.remove("light");
    }
  }
  function handleLangBtn() {
    const btn = document.querySelector("#switchLang") as HTMLDivElement;
    btn.classList.toggle("active");
    if (currentLang === "en") {
      setCurrentLang("es");
      return;
    }
    if (currentLang === "es") {
      setCurrentLang("en");
      return;
    }
  }
  function handleHamBtn() {
    const navBarList = document.querySelector("#navBarList") as HTMLDivElement;
    navBarList.classList.toggle("active");
  }
  // Conditional render in Spanish
  if (currentLang === "es") {
    return (
      <div id="NavBar" className="static esNav">
        <div id="navBarName">
          <span id="nameOne">Juan</span> <span id="nameTwo">Pablo</span>
        </div>
        <div id="navBarList">
          <div className="container">
            <FontAwesomeIcon icon={faHome} />

            <a href="#Home">Inicio</a>
          </div>
          <div className="container">
            <FontAwesomeIcon icon={faAddressCard} />
            <a href="#About">Acerca</a>
          </div>
          <div className="container">
            <FontAwesomeIcon icon={faScrewdriverWrench} />

            <a href="#Skills">Habilidades</a>
          </div>
          <div className="container">
            <FontAwesomeIcon icon={faStar} />
            <a href="#ShowCase">Destacados</a>
          </div>
          <div className="container">
            <FontAwesomeIcon icon={faFolder} />
            <a href="#AllProjects">Proyectos</a>
          </div>
          <div id="switchColor" className="switch" onClick={handleColorSwitch}>
            <FontAwesomeIcon icon={faMoon} id="moonIcon" />
            <FontAwesomeIcon icon={faSun} id="sunIcon" />
          </div>
          <div id="switchLang" className="switchLang" onClick={handleLangBtn}>
            <img src={esFlag} id="esFlag" alt="es" />
            <img src={enFlag} id="enFlag" alt="en" />
          </div>
        </div>
        <FontAwesomeIcon icon={faBars} id="hamBtn" onClick={handleHamBtn} />
      </div>
    );
  }
  // Default render in English
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
          <a href="#AllProjects">Projects</a>
        </div>
        <div id="switchColor" className="switch" onClick={handleColorSwitch}>
          <FontAwesomeIcon icon={faMoon} id="moonIcon" />
          <FontAwesomeIcon icon={faSun} id="sunIcon" />
        </div>
        <div id="switchLang" className="switchLang" onClick={handleLangBtn}>
          <img src={esFlag} id="esFlag" alt="es" />
          <img src={enFlag} id="enFlag" alt="en" />
        </div>
      </div>
      <FontAwesomeIcon icon={faBars} id="hamBtn" onClick={handleHamBtn} />
    </div>
  );
}

export default NavBar;
