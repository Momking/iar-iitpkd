import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ImageSwap from "../ImageSwap";
import VideoPlayer from "../VideoPlayer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Navbar />
      <div style={{ marginLeft: "15vh", marginRight: "15vh" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{ paddingRight: "2vh", paddingTop: "20px", minWidth: "75%" }}
          >
            <ImageSwap />
          </div>
          <div style={{ paddingLeft: "10px" }}>
            <br />
            <h1
              style={{
                fontSize: "1.7rem",
                fontWeight: "600",
                paddingBottom: "10px",
                borderBottom: "3px solid #f9ac1d",
              }}
            >
              International Alumni and Relations
            </h1>
            <br />
            <div style={{ fontSize: "15px" }}>
              <p>
                <strong>Indian Institute Of Technology Palakkad</strong> and the{" "}
                <strong>Alumni Association</strong> have joined efforts in order
                to help overseas alumni stay connected with us through
                activities, celebrations and online correspondence.
              </p>
              <p>
                The International Network helps to connected with the
                University, with IIT PKD alumni and with fellow members of the
                community around the globe. The Office of International Alumni
                and Relations and the IIT Palakkad encourage you to become
                involved in this Network in your region or country!
              </p>
            </div>
          </div>
        </div>
        <div>
          <VideoPlayer embedId="6JVEJhOqZTo" />
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
