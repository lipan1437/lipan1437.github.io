import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import aboutBanner1 from "../assets/aboutBanner1.jpg";
import aboutBanner2 from "../assets/aboutBanner2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
     

      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a Self-motivated and Aspiring Full Stack Web Developer with
          expertise in creating user-friendly websites. I look forward to an
          opportunity to deploy my skills and hone skills in working with a
          Company.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={aboutBanner2} alt="true" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={aboutBanner1} alt="true" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
