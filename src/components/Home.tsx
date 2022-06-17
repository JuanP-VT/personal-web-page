import React from "react";

function Home() {
  return (
    <section id="Home">
      <div className="container">
        <div className="wrapper">
          <div className="static-txt">Hi !, I'm a</div>
          <ul className="dynamic-txts">
            <li>
              <span>Former Industrial Engineer</span>
            </li>
            <li>
              <span>Web Developer</span>
            </li>
            <li>
              <span>Coder</span>
            </li>
            <li>
              <span>Enthusiast</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
