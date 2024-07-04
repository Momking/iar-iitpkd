import React from "react";
import Navbar from "./../Navbar";
import Cards from "./../Cards";
import Footer from "./../Footer";

const About = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Navbar />
      <div style={{ marginLeft: "15vh", marginRight: "15vh" }}>
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default About;
