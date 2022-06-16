import React from "react";
function NavBar() {
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
          <a href="#Showcase">Showcase</a>
        </div>
        <div className="container">
          <span className="material-symbols-outlined">Folder</span>
          <a href="#allProjects">All Projects</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
