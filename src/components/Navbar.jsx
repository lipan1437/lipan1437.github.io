import styles from "./Navbar.module.css";
import "./NavbarStyles.css";

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import resume from "../assets/Lipan_Padhan_Resume.pdf";

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About Me" },
  { path: "/skills", title: "Skills" },
  { path: "/project", title: "Project" },
  { path: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1GVua_3kW2MZGUMdGNApSG-m6lu-fDwXW/view?usp=share_link"
    );
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Lipan Padhan</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li> */}
        <li>
          {links.map((link) => (
            <NavLink
              className={({ isActive }) => {
                return isActive ? styles.active : styles.default;
              }}
              key={link.path}
              to={link.path}
              end
            >
              {link.title}
            </NavLink>
          ))}

          <a
            href={resume}
            target="_blank"
            rel="noreferrer noopener"
            className="dwn"
            onClick={handleResumeDownload}
            download
          >
            {" "}
            <AiOutlineDownload /> Resume
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
