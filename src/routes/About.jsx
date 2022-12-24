import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutContent from "../components/AboutContent";
import MyProfile from "../components/MyProfile";

const About = () => {
  return (
    <div>
      <Navbar />
      <MyProfile />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
