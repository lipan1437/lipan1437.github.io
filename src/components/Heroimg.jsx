import "./HeroimgStyles.css";
import Introimg from "../assets/intro.jpg";
import React from "react";
import { Link } from "react-router-dom";
import pp from "../assets/myPp.jpg"
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={Introimg} alt="intro-img" className="intro-img" />
      </div>
      <div className="content">
      <div className="profile">
        <img src={pp} alt="" />
      </div>
        <p>hi , i'm <span>Lipan Padhan</span> a passionate </p>
        <h1>Full-Stack Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
          Contact
          </Link>
          <button className="btn btn-light">
          <a href="https://drive.google.com/file/d/1GVua_3kW2MZGUMdGNApSG-m6lu-fDwXW/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
