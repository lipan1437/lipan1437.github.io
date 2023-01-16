import "./FooterStyles.css";
import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Balangir,</p>
              <p>Odisha</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              9938498376
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              lipanpadhan1432@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Connect with me </h4>
          <div className="social">
            <a href="https://twitter.com/LipanPadhan3" target="_blank">
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <p>Twitter</p>
            </a>
            <a
              href="https://www.linkedin.com/in/lipan-padhan-a0bb381a5/"
              target="_blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <p>LinkdIn</p>
            </a>

            <a href="https://github.com/lipan1437" target="_blank">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <p>Github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
