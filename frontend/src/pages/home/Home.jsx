import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";


const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
    <section className="banner">
      <div className="content">
        <h1 className="left">VHASS</h1>
        <div className="right">
          <h2>Cyber Security</h2>
          <p>Learn</p>
          <p>
            Full on Ethical Hacking and Penetration Testing
            <br />update interesting Seminars
          </p>
        </div>
        <div className="image">
          <img src="./mouth.png" alt="" />
        </div>
      </div>
    </section>

    <section className="grid grid-1">
      <h2 className="autoShow">Introduce</h2>
    </section>

    <section className="grid grid-2">
      <div className="autoShow">
        <figure>
          <img src="./6.png" alt="" />
        </figure>
        <p>
          An online cybersecurity course teaches the fundamentals of digital security, threat detection, and defense mechanisms. <br />
          These courses are accessible from anywhere and are ideal for beginners or professionals looking to build or upgrade their skills in cybersecurity.
        </p>
      </div>
      <div className="autoShow">
        Cybersecurity is the practice of protecting digital systems, networks, and data from unauthorized access or attacks. <br />
        It includes using technologies, processes, and strategies to ensure online safety and prevent cyber threats.
      </div>

      <div className="autoShow">
        <figure>
          <img src="./2.png" alt="" />
        </figure>
        <p>
          Cybercrime involves criminal activities carried out using computers and the internet. <br />
          It includes hacking, phishing, identity theft, online scams, and spreading malware, posing a serious threat to individuals, businesses, and governments. 
        </p>
      </div>
      <div className="autoShow">
        <figure>
          <img src="./candy.png" alt="" />
        </figure>
      </div>
    </section>

    <section className="grid grid-3">
      <div className="autoBLur">VHASS</div>
      <div className="autoBLur">SOFTWARE</div>
      <div className="autoBLur">PRIVATE</div>
      <div className="autoBLur">LIMITED</div>
      <div className="autoBLur">
        <a href="/courses" style={{textDecoration: "none", color: "black"}}>
          SEE MORE &#8599;
        </a>
      </div>
    </section>
  </main>

  );
};

export default Home;
