import React from "react";
import "../styles/about.css";
import aboutpic from "../assets/about-pic.jpeg"
import { Tilt } from "react-tilt";
import Heading from "../common/Heading";

const About = () => {
  return (
    <div className="about" id="about">
      <div>
        <Heading heading="About Me" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <Tilt>
            <img src={aboutpic} alt="numan" className="about-pic"/>
          </Tilt>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Motivated Software Engineer with a strong foundation in computer
              science and a passion for developing innovative software
              solutions. Eager to bring my skills to your team and contribute
              meaningfully while gaining valuable hands-on experience. I am
              excited about the opportunity to grow within your organization and
              help drive your projects forward.
            </p>
            <p>
              My passion for full stack development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
            <div className="about-skills">
              

              <div className="about-skill" id="js">
                <p>Javascript</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill" id="type">
                <p>TypeScript</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill" id="react">
                <p>React Js</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill" id="next">
                <p>Next Js</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill" id="node">
                <p>Node Js</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill" id="nest">
                <p>Nest Js</p> <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill" id="next">
                <p>Type Orm</p> <hr style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
