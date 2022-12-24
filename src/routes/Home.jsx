import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import GithubCalendar from "../components/GithubCalendar";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <Work />

     

  
<GithubCalendar />

      <Footer />
    </div>
  );
};

export default Home;
