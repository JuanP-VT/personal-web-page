import React, { useEffect, useState } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import ShowCase from "./components/ShowCase";
import AllProjects from "./components/AllProjects";

function App() {
  const [colorMode, setColorMode] = useState("");
  const [currentLang, setCurrentLang] = useState("en");
  useEffect(() => {
    // Alternative LIGHT MODE
    if (colorMode === "light") {
      //SECTIONS TITLE
      const sectionsTitle = Array.from(
        document.querySelectorAll(".sectionTitle")
      );
      sectionsTitle.forEach((element) => {
        const P = element.querySelector("p") as HTMLParagraphElement;
        P.classList.add("lightColor1");
      });
      //NAVBAR SECTION
      const NavBar = document.querySelector("#NavBar") as HTMLDivElement;
      const firstName = NavBar.querySelector("#nameOne") as HTMLSpanElement;
      firstName.classList.add("lightColor1");
      // a links
      const aLinks = Array.from(NavBar.querySelectorAll("a"));
      aLinks.forEach((element) => {
        element.classList.add("lightColor1");
      });
      // HOME SECTION
      const Home = document.querySelector("#Home") as HTMLDivElement;
      Home.classList.add("lightBGC1");
      const info = Home.querySelector(".info") as HTMLDivElement;
      info.classList.add("lightColor1");
      // a links
      const HomeaLinks = Array.from(Home.querySelectorAll("a"));
      HomeaLinks.forEach((element) => {
        element.classList.add("lightColor1");
        //ABOUT section
        const About = document.querySelector("#About") as HTMLDivElement;
        About.classList.add("lightBGC2");
        // Select all P elements inside the about section
        const textContainers = Array.from(
          About.querySelectorAll(".textContainer")
        );
        textContainers.forEach((element) => {
          element.classList.add("lightColor1");
          const pElem = element.querySelectorAll("p");
          pElem.forEach((element) => {
            element.classList.add("lightColor1");
          });
        });
        // SKILLS SECTION
        const Skill = document.querySelector("#Skills") as HTMLDivElement;
        Skill.classList.add("lightBGC1");
        const SkillBoxes = Array.from(Skill.querySelectorAll(".skillBox"));
        SkillBoxes.forEach((element) => {
          element.classList.add("SkillBoxLight");
          const p = element.querySelector("p");
          p?.classList.add("lightColor1");
        });
        //SHOWCASE SECTION
        const ShowCase = document.querySelector("#ShowCase") as HTMLDivElement;
        ShowCase.classList.add("showcaseAltBGC");
        const h1 = ShowCase.querySelector("h1");
        h1?.classList.add("lightColor3");
        // ALL PROJECTS SECTION
        const allProjects = document.querySelector(
          "#AllProjects"
        ) as HTMLDivElement;
        allProjects.classList.add("lightBGC2");
        const pElems = allProjects.querySelectorAll("p");
        pElems.forEach((element) => {
          element.classList.add("lightColor1");
        });
      });
    } // DEFAULT -- DARK MODE
    if (colorMode === "") {
      //SECTIONS TITLE
      const sectionsTitle = Array.from(
        document.querySelectorAll(".sectionTitle")
      );
      sectionsTitle.forEach((element) => {
        const P = element.querySelector("p") as HTMLParagraphElement;
        P.classList.remove("lightColor1");
      });
      //Navbar elements
      const NavBar = document.querySelector("#NavBar") as HTMLDivElement;
      const firstName = NavBar.querySelector("#nameOne") as HTMLSpanElement;
      firstName.classList.remove("lightColor1");
      // a links
      const aLinks = Array.from(NavBar.querySelectorAll("a"));
      aLinks.forEach((element) => {
        element.classList.remove("lightColor1");
      });
      // Home elements
      const Home = document.querySelector("#Home") as HTMLDivElement;
      Home.classList.remove("lightBGC1");
      const info = Home.querySelector(".info") as HTMLDivElement;
      info.classList.remove("lightColor1");
      // a links
      const HomeaLinks = Array.from(Home.querySelectorAll("a"));
      HomeaLinks.forEach((element) => {
        element.classList.remove("lightColor1");
      });
      //ABOUT section
      const About = document.querySelector("#About") as HTMLDivElement;
      About.classList.remove("lightBGC2");
      // Select all P elements inside the about section
      const textContainers = Array.from(
        About.querySelectorAll(".textContainer")
      );
      textContainers.forEach((element) => {
        element.classList.remove("lightColor1");
        const pElem = element.querySelectorAll("p");
        pElem.forEach((element) => {
          element.classList.remove("lightColor1");
        });
        // SKILLS SECTION
        const Skill = document.querySelector("#Skills") as HTMLDivElement;
        Skill.classList.remove("lightBGC1");
        const SkillBoxes = Array.from(Skill.querySelectorAll(".skillBox"));
        SkillBoxes.forEach((element) => {
          element.classList.remove("SkillBoxLight");
          const p = element.querySelector("p");
          p?.classList.remove("lightColor1");
        });
        //SHOWCASE SECTION
        const ShowCase = document.querySelector("#ShowCase") as HTMLDivElement;
        ShowCase.classList.remove("showcaseAltBGC");
        const h1 = ShowCase.querySelector("h1");
        h1?.classList.remove("lightColor3");
      });
      // ALL PROJECTS SECTION
      const allProjects = document.querySelector(
        "#AllProjects"
      ) as HTMLDivElement;
      allProjects.classList.remove("lightBGC2");
      const pElems = allProjects.querySelectorAll("p");
      pElems.forEach((element) => {
        element.classList.remove("lightColor1");
      });
    }
  }, [colorMode]);
  return (
    <div id="App">
      <NavBar
        setColorMode={setColorMode}
        colorMode={colorMode}
        setCurrentLang={setCurrentLang}
        currentLang={currentLang}
      />
      <Home />
      <About />
      <Skills />
      <ShowCase />
      <AllProjects />
    </div>
  );
}

export default App;
