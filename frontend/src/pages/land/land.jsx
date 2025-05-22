import React from "react";
import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import "./land.css";
import gradient from "../../assets/images/gradient.png";

const Land = () => {
  return (
    <div className="landing-page">
      <img className="image-gradient" src={gradient} alt="gradient" />
      <div className="layer-blur"></div>


      <div className="container">
        <main>
          <div className="content">
            <div className="tag-box">
              <div className="tag">INTRODUCING</div>
            </div>
            <h1>LEARN FROM <br />VHASS</h1>
            <p className="description">VHASS Softwares Private Limited is a leading ed-tech company specializing in cybersecurity training, dedicated to addressing real-time problems, especially in the areas of privacy and security. Our courses are designed to equip learners with in-demand skills through interactive live sessions, personalized mentorship from industry experts, and hands-on experience in key areas such as ethical hacking, penetration testing, threat detection, and more.
      <br />
      <br />
At VHASS, we don’t just teach—we focus on solving real-world challenges, empowering students to become industry-ready professionals who can safeguard digital systems in today’s evolving cyber landscape.</p>
            <br />
            <div className="buttons">
              <Link to="/home" className="btn-signing-main">
                Get Started &gt;
              </Link>
            </div>
          </div>
        </main>
        <div className="robot-3d">
          <Spline 
            scene="https://prod.spline.design/Vo2LtVr884vxCyA9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Land;