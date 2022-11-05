import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";
// import Resume from "./routes/Resume";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </>
  );
}

export default App;
