import React, { useEffect } from "react";
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
          <span className="material-symbols-outlined">home</span>

          <a href="#Home">Home</a>
        </div>
        <div className="container">
          <span className="material-symbols-outlined">person</span>
          <a href="#About">About</a>
        </div>
        <div className="container">
          <span id="stars" className="material-symbols-outlined">
            construction
          </span>
          <a href="#Skills">Skills</a>
        </div>
        <div className="container">
          <span className="material-symbols-outlined star">
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
