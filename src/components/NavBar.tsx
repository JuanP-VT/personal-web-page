import React, { useEffect } from "react";
function NavBar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        const navBar = document.querySelector("#NavBar") as HTMLDivElement;
        navBar.classList.add("scrolled");
      }
      if (window.scrollY < 50) {
        const navBar = document.querySelector("#NavBar") as HTMLDivElement;
        navBar.classList.remove("scrolled");
      }
    });
  }, []);
  return (
    <div id="NavBar">
      <div id="navBarName">Juan Pablo</div>
      <div id="navBarList">
        <div className="container">
          <span className="material-symbols-outlined">home</span>

          <a href="#Home">Home</a>
        </div>
        <div className="container">
          <span className="material-symbols-outlined">person</span>
          <a href="#About">About</a>
        </div>
        <div className="container">
          <span className="material-symbols-outlined">construction</span>
          <a href="#Skills">Skills</a>
        </div>
        <div className="container">
          <span className="material-symbols-outlined">
            temp_preferences_custom
          </span>
          <a href="#ShowCase">Showcase</a>
        </div>
        <div className="container">
          <span className="material-symbols-outlined">Folder</span>
          <a href="#AllProjects">All Projects</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
