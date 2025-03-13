import React from "react";
import "./Hero.css";
import Port_image from "../../assets/Port_image.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from "../Resume/Resume";
const Hero = () => {
  return (
    <div id="home" className="Hero">
      <img src={Port_image} alt="" className="profile" />
      <h1>
        {" "}
        <span>I'm Abhay Shukla,</span> fullstack devloper
      </h1>
      <p>
        I am fullstack devloper from India,Currnetly i am fresher and doing a
        lot of practice to became master
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me{" "}
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <Resume></Resume>
        </div>
      </div>
    </div>
  );
};

export default Hero;
