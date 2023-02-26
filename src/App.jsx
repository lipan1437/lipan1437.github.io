import "./App.css";
import Hero from "./pages/Hero";
import NavSmall from "./routes/NavSmall";
import About from "./pages/About";
import NavbarS from "./routes/Navbar";
import Project from "./pages/Project";
import SocialHandle from "./pages/SocialHandle";

import { useState } from "react";
import Contact from "./pages/Contact";

import GithubComp from "./pages/GithubComp";
import Skills from "./pages/Skills";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsSun } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

function App() {
  let [condition, setcondition] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Hero />

      <About />

      <Project />
      <Skills />

      <Contact />

      <NavSmall />
      <NavbarS />
      <SocialHandle />
      <IconButton
        fontSize="35px"
        position={"fixed"}
        top={{ base: 3, md: 5, lg: 100 }}
        right={{ base: 3, md: 5, lg: 10 }}
        borderRadius={50}
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <MdDarkMode /> : <BsSun />}
      />
    </div>
  );
}

export default App;

// npm install react-scroll

// npm i aos --save

// npm i react-simple-typewriter
// react-parallax-tilt
// react-github-calendar
// npm install -g gh-pages

// git push origin master

// >>>

{
  /* 

npm install gh-pages --save-dev 

  "homepage": "https://sufi7867.github.io",

  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

*/
}

// npm i emailjs-com
