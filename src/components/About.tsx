import React from "react";
import iEngineer from "../img/IEngineer.jpg";
import iDeveloper from "../img/IDeveloper.webp";
import selfDriven from "../img/self-driven.png";
import resilient from "../img/resilient.png";
import relational from "../img/relational.jpg";
import writing from "../img/writing.png";
function About() {
  return (
    <section id="About">
      <div className="sectionTitle">
        <p>
          <span className="alter">About</span> Me
        </p>
      </div>
      <div className="container">
        <div className="c1">
          <div className="title">Background As A Industrial Engineer</div>
          <div className="imgContainer">
            <img src={iEngineer} alt="IndustrialEngineer" className="img" />
          </div>

          <div className="textContainer">
            <p>
              In the summer of 2014 a young man had to choose a path for his
              professional career, I always were a tech geek so naturally I was
              leaning towards <span>Software Engineering</span> or a related
              field but I also had huge desire to become like my older brother,
              I did not know much about the world or even much about myself at
              that age so, partially blinded I went with my brother's advice to
              become a<span className="highlight">Industrial Engineer</span>.
            </p>
            <br />
            <p>
              Although at some points I felt many topics were not very
              interesting my <span>discipline</span> kept me strong and boosted
              through my education. By the end of 2018 I got my{" "}
              <span>Bachelors degree</span>, flew to Tijuana(one of the biggest
              industrial cities in the country) and worked there for nearly two
              years.
            </p>
            <br />
            <p>
              Despite doing fine I felt very unfulfilled by my professional life
              and the overall environment of the manufacturing industry, the
              next few months my life felt very gray, the choice that a
              unexperienced sprout took many years back, felt like chains that
              would keep me bound to that situation.
            </p>
            <br />
            <p>But Im resilient and knew I had to do something about it...</p>
          </div>
        </div>
        <div className="c2">
          <div className="title">Becoming A Web Developer</div>
          <div className="imgContainer">
            {" "}
            <img
              src={iDeveloper}
              alt="Developer computer and coffee"
              className="img"
            />
          </div>
          <div className="textContainer">
            <p>
              During that time one of my closest friends lived a very similar
              situation, he was working as a plant maintenance engineer and felt
              very unsatisfied, he later switched fields and became a software
              tester.
            </p>
            <br />
            <p>
              His new situation and work environment put him in a good mood so
              he tried to convince me to leave the manufacturing field and
              become a <span>developer</span>, at that time I wasn't ready to
              drop nearly 7 years of education and experience.
            </p>
            <p>
              <br />
              But the idea stood with me, I come from a
              <span>
                <em>techie</em> background
              </span>
              , always were interested in videogames, technology, computers and
              even had some <span>coding</span>
              experience with C (school education) and Lua (I used code in
              Minecraft's computercraft mod and I loved it), after a few months
              of research,talks and analysis it was clear, that idea became a
              light ray that ignited my ambition for my professional life.
            </p>
            <br />
            <p>
              It was settle <span>I would become a Developer.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="c3">
          <div className="title">Personal Traits</div>
          <div id="AllTraits">
            {" "}
            <div className="traitContainer">
              <div className="imgContainer">
                <img src={selfDriven} alt="SelfDriven Character" />
              </div>
              <div className="textContainer">
                <span>Self-Driven</span>: I taught myself web development thanks
                to the amazing effort of all the
                <span>dev community</span> creating superb teaching content but
                at the end of the day it was me who kept pushing to make this
                dream a reality,
                <br /> I have trained myself to become very
                <span>disciplined</span>, this have helped my a lot in my life,
                when I set a goal all my effort and intention goes towards it.
              </div>
            </div>
            <div className="traitContainer">
              <div className="imgContainer">
                <img src={resilient} alt="SelfDriven Character" />
              </div>
              <div className="textContainer">
                <span>Resilient</span>: This is something that i have developed
                for my personal life and greatly enhanced my professional
                performance too, basically resilient means to be able to
                withstand difficult conditions while staying <span>aware</span>,
                frustration, stress and conflict are situations we encounter
                daily and having the <span>emotional strength</span> to deal
                with, really made me mature greatly.
              </div>
            </div>
            <div className="traitContainer">
              <div className="imgContainer">
                <img src={relational} alt="SelfDriven Character" />
              </div>
              <div className="textContainer">
                <span>Relational</span>: How to treat people is another amazing
                topic, I have spend time learning about human interaction and
                trying to improve my social skills (i were very introvert).
                <br /> This have proven to be on of the best skills i could
                develope , understand that the people I work are complex human
                being with emotions made me be more <span>empathic</span>, take
                offenses/criticism <span>less personal</span> and overall made
                me someone nicer to be around with.
              </div>
            </div>
            <div className="traitContainer">
              <div className="imgContainer">
                <img src={writing} alt="SelfDriven Character" />
              </div>
              <div className="textContainer">
                <span>Communication And Writing Skills</span>: As a industrial
                engineer one of my main activities were writing status reports
                and a lot of process/quality <span>documentation</span>. I had
                to be very concise and brief when reporting to a manager or
                explain with great <span>detail</span> to an
                operator/technician.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
