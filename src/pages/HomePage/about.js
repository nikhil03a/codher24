import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about_container">
      <div className="about_title">
        <span style={{ color: "#fff" }}>About ACM</span>
      </div>
      <div className="cardContainer">
        <div className="card_about">
          <div className="main">
            <h2 style={{ color: "#fff", textDecoration: "underline" }}>
              ACM CEG
            </h2>
            <p className="description" style={{fontSize: "1.2rem"}}>
              The ACM-CEG Student Chapter, initiated in 2004, aims to instill an
              unwavering enthusiasm for computer science in students. The club
              provides a plethora of networking opportunities and helps to seek
              advice from the top experts in the field. The club has been
              steadily working to inculcate an unalloyed interest in Computer
              Science in students and consequently, stimulating the advancement
              of computer science as a whole. We aim to motivate students to
              embark on a journey of learning and developing the tools of
              computer science and instilling in them a passion for computer
              science. We serve to clear the clutter and provide guidance to
              help them to achieve their goals.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default About;
