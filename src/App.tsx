import React, { useState } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import ShowCase from "./components/ShowCase";
import AllProjects from "./components/AllProjects";

function App() {
  const [colorMode, setColorMode] = useState("");
  return (
    <div id="App">
      <NavBar setColorMode={setColorMode} />
      <Home />
      <About />
      <Skills />
      <ShowCase />
      <AllProjects />
    </div>
  );
}

export default App;
