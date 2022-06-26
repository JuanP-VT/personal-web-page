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
  useEffect(() => {
    if (colorMode === "light") {
      //Navbar elements
      const NavBar = document.querySelector("#NavBar") as HTMLDivElement;
      const firstName = NavBar.querySelector("#nameOne") as HTMLSpanElement;
      firstName.classList.add("lightColor1");
      // a links
      const aLinks = Array.from(NavBar.querySelectorAll("a"));
      aLinks.forEach((element) => {
        element.classList.add("lightColor1");
      });
      // Home elements
      const Home = document.querySelector("#Home") as HTMLDivElement;
      Home.classList.add("lightBGC1");
      const info = Home.querySelector(".info") as HTMLDivElement;
      info.classList.add("lightColor1");
      // a links
      const HomeaLinks = Array.from(Home.querySelectorAll("a"));
      HomeaLinks.forEach((element) => {
        element.classList.add("lightColor1");
      });
    }
    if (colorMode === "") {
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
    }
  }, [colorMode]);
  return (
    <div id="App">
      <NavBar setColorMode={setColorMode} colorMode={colorMode} />
      <Home />
      <About />
      <Skills />
      <ShowCase />
      <AllProjects />
    </div>
  );
}

export default App;
