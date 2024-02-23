import React from 'react';
import "./about.css";

function About() {
    return (
        <div className='about_container'>
            <div className="about_title">
                <span style={{color:"#fff"}}>About ACM</span>
            </div>
            <div className='cardContainer'>
                <div className="card">
                    <div className="main">
                        <h2 style={{ color: "#fff", textDecoration: "underline" }}>
                            ACM CEG
                        </h2>
                        <p className="description">We aim to motivate students to embark on a journey of learning and developing the tools of computer science and instilling in them a passion for computer science. We serve to clear the clutter and provide guidance to help them to achieve their goals.</p>
                    </div>
                    <div>
                        {/* You can add CSS-specific classes or inline styles here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
