import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MySkills from "../components/MySkills";
import Heroimg2 from '../components/Heroimg2'
const Skills = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="Skills." text="These are the technologies, I have worked with and used in my projects."/>
      <MySkills/>
      <Footer />
    </div>
  );
};

export default Skills;

