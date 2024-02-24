import React from "react";
import "./about.css";

function About() {
  return (
    <div
      className="about_container"
      id="about"
      style={{
        backgroundImage: 'url("/assets/circuit.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="about_title">
        <h2 class="glitch layers" data-text="About"><span>About</span></h2>
      </div>
      <div>
        <div className="card_about">
          <div className="main">
            <h2 style={{ color: "#fff" }}>ACM CEG</h2>
            <p className="description" style={{ fontSize: "1.2rem" }}>
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

        <div className="card_about">
          <div className="main">
            <h2 style={{ color: "#fff" }}>Codher</h2>
            <p className="description" style={{ fontSize: "1.2rem" }}>
              Codher is an all-women hackathon conducted by ACM-CEG. Codher
              serves as a platform for young women developers and coding
              enthusiasts to network, upskill, bring their ideas to life and
              exhibit their creativity, ingenuity and competence. Past versions
              of Codher had a footfall of around 200+ female hackers. This is
              the 10th edition of Codher. It is going to be a 24-hrs Hackathon
              conducted in online mode, tentatively on March9thand10th
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default About;
