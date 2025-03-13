import React from "react";
import "./Resume.css";
import resume from "./Abhay's Resume.pdf";
const Resume = () => {
  return (
    <a
      href={resume}
      className="anchor-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      My resume
    </a>
  );
};

export default Resume;
