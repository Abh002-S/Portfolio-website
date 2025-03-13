import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Port_image3 from "../../assets/Port_image3.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={Port_image3} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a fullstack developer, I've gained hands-on experience by
              building numerous clone websites and working on a variety of
              projects. This practical approach has honed my skills in HTML,
              CSS, JavaScript, and modern frameworks, preparing me to tackle
              real-world challenges and contribute effectively to any
              development team.
            </p>
            <p>
              My passion for web development stems from the thrill of
              transforming ideas into interactive, visually appealing websites.
              I love the creative and technical challenges it presents, from
              crafting responsive designs to optimizing user experiences. This
              passion drives me to continuously learn and innovate, staying
              up-to-date with the latest industry trends.
            </p>
          </div>
          <div className="about-skills">
            <div className="skill">
              <p>HTML & CSS </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="skill">
              <p>JavaScript </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="skill">
              <p>Next js </p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>6+</h1>
          <p>MONTH OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>12+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>50+</h1>
          <p>FUTURE GOALS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
