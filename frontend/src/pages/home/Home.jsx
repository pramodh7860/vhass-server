import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <div className="section" id="banner">
          <div className="content-fit">
            <div className="title">Vhass Softwares PVT LTD.</div>
          </div>
          <img 
            src="/leaf.png" 
            className="decorate" 
            alt="leaf decoration" 
            style={{ width: "30vw", bottom: 0, left: 0 }} 
          />
        </div>

        <div className="section" id="intro">
          <div className="content-fit">
            <div className="number">01</div>
            <div className="des">
              <div className="title">Intro</div>
              <p className="section-text">
                Cybersecurity is the practice of protecting digital systems, networks, and data from unauthorized access or attacks.
                It includes using technologies, processes, and strategies to ensure online safety and prevent cyber threats.
                An online cybersecurity course teaches the fundamentals of digital security, threat detection, and defense mechanisms.
              </p>
            </div>
          </div>
        </div>

        <div className="section" id="description">
          <div className="content-fit">
            <div className="number">02</div>
            <div className="des">
              <div className="title">Why Us?</div>
              <div className="why-us-container">
              <div className="features-grid">
  {/* Instructors */}
  <div className="feature-card">
    <h3>Instructors</h3>
    <p>Certified & Experienced Instructors</p>
  </div>
  
  <div className="feature-card">
    <h3>Affordable</h3>
    <p>Most affordable & quality content</p>
  </div>

  {/* Recordings */}
  <div className="feature-card">
    <h3>Recordings</h3>
    <p>Lifetime Access To Recorded Sessions</p>
  </div>
  
  <div className="feature-card">
    <h3>Certificate</h3>
    <p>ISO Certificate on completion.</p>
  </div>

  {/* Support */}
  <div className="feature-card">
    <h3>Support</h3>
    <p>Lifetime Support During & Post Training</p>
  </div>
  
  <div className="feature-card">
    <h3>Internship</h3>
    <p>Internship opportunity for Skilled students</p>
  </div>

  {/* Industry */}
  <div className="feature-card">
    <h3>Industry Oriented</h3>
    <p>Get Industry Skills</p>
  </div>
  
  <div className="feature-card">
    <h3>Jobs/Career</h3>
    <p>Jobs/Placement/Career assistance</p>
  </div>
</div>
              </div>

              <div className="why-us-text">
                <p className="section-text">
                  These courses are accessible from anywhere and are ideal for beginners or professionals looking to build or upgrade their skills in cybersecurity.
                  Cybercrime involves criminal activities carried out using computers and the internet.
                  It includes hacking, phishing, identity theft, online scams, and spreading malware, posing a serious threat to individuals, businesses, and governments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section" id="contact">
          <section className="grid grid-3">
            <div className="autoBLur">VHASS</div>
            <div className="autoBLur">SOFTWARES</div>
            <div className="autoBLur">PRIVATE</div>
            <div className="autoBLur">LIMITED</div>
            <div className="autoBLur">
              <Link to="/courses" style={{ textDecoration: "none", color: "black" }}>
                SEE MORE &#8599;
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;