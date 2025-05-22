import React from "react";
import "./about.css";
import { 
  FaShieldAlt, 
  FaLightbulb, 
  FaUsers, 
  FaGraduationCap,
  FaLinkedin,
  FaInstagram,
  FaTrophy,
  FaBullseye,
  FaEye,
  FaChartLine
} from "react-icons/fa";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

// Image imports
import founder from "../../assets/images/founder.png";
import coo from "../../assets/images/coo.png";
import s1Poster from "../../assets/images/s1.png";
import s2Poster from "../../assets/images/s2.png";
import s3Poster from "../../assets/images/s3.png";
import genesisCert from "../../assets/images/genesis-cert.png"; // Add your certificate image
import grantCert from "../../assets/images/grant-cert.png"; // Add your grant certificate image

// Add these to your existing video and image imports
import s4Poster from "../../assets/images/s4.png";
import s5Poster from "../../assets/images/s5.png";
import s6Poster from "../../assets/images/s6.png";

import s4Video from "../../assets/videos/s4.mp4";
import s5Video from "../../assets/videos/s5.mp4";
import s6Video from "../../assets/videos/s6.mp4";

// Video imports
import s1Video from "../../assets/videos/s1.mp4";
import s2Video from "../../assets/videos/s2.mp4";
import s3Video from "../../assets/videos/s3.mp4";

const About = () => {
  return (
    <div className="about">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1>About VHASS Cybersecurity</h1>
          <p>Protecting digital frontiers through education and innovation</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-cards">
          {[["20+", "Students Trained"], ["5+", "Expert Instructors"], 
           ["6", "Courses Available"], ["95%", "Satisfaction Rate"]].map(([number, label]) => (
            <div className="stat-card" key={label}>
              <div className="stat-number">{number}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>Founded in 2023, VHASS Softwares Pvt. Ltd. began as a small team of security professionals passionate about bridging the cybersecurity skills gap. Today, we've grown into a leading provider of cybersecurity education, serving thousands of students and professionals worldwide.</p>
            <p>Our mission is to empower individuals and organizations with the knowledge and skills needed to defend against evolving cyber threats. We believe that education is the most powerful tool in creating a more secure digital world.</p>
            <img 
              src="/a1.png" 
              alt="VHASS Team" 
              className="about-image"
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Achievements</h2>
          </div>
          
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-content">
                <FaTrophy className="achievement-icon" />
                <h3>MeitY GENESIS EiR Program</h3>
                <p>Selected for the prestigious MeitY GENESIS EiR Program at Hatchlab Research Centre, SRM University AP</p>
                <img src={genesisCert} alt="GENESIS Certificate" className="achievement-image" />
              </div>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-content">
                <FaTrophy className="achievement-icon" />
                <h3>₹5,00,000 Grant Award</h3>
                <p>Received in recognition of our efforts toward creating safer and smarter communities through technology</p>
                <img src={grantCert} alt="Grant Certificate" className="achievement-image" />
              </div>
            </div>
          </div>
          
          <div className="achievement-text">
            <p>These milestones validate our work in the domains of child safety, women safety, and cybersecurity innovation. They mark significant steps in our journey to build impactful solutions that protect and empower vulnerable groups in society.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission-card">
              <div className="mv-icon">
                <FaBullseye />
              </div>
              <h3>Our Mission</h3>
              <p>To leverage technology in building secure, inclusive, and empowering ecosystems for children and women, while equipping young minds with the skills to innovate and protect.</p>
            </div>
            
            <div className="mv-card vision-card">
              <div className="mv-icon">
                <FaEye />
              </div>
              <h3>Our Vision</h3>
              <p>To become a leading national force in child and women safety, digital empowerment, and ethical cybersecurity — shaping a future where every individual, regardless of age or gender, can thrive safely and confidently in both physical and digital spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Goals Section */}
      <section className="goals-section">
        <div className="container">
          <div className="section-title">
            <h2>2025 Target Goals</h2>
            <p>We are not just building technology — we are building a safer society.</p>
          </div>
          
          <div className="goals-grid">
            <div className="goal-card">
              <div className="goal-icon">
                <FaUsers />
              </div>
              <h3>Empower 1000+</h3>
              <p>Ethical hackers to become digital guardians.</p>
            </div>
            
            <div className="goal-card">
              <div className="goal-icon">
                <FaChartLine />
              </div>
              <h3>Launch 50+</h3>
              <p>social-impact ventures addressing core issues like safety, mental health, digital abuse, and community support</p>
            </div>
            
            <div className="goal-card">
              <div className="goal-icon">
                <FaLightbulb />
              </div>
              <h3>Build a Movement</h3>
              <p>a strong, tech-driven movement combining awareness, action, and innovation to create lasting impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <div className="milestones">
        <div className="section-title">
          <h2 style={{ color: "#000" }}>Our Milestones</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h3>Company Founded</h3>
              <p>VHASS Cybersecurity was established with a vision to revolutionize cybersecurity education</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Online Platform Launch</h3>
              <p>Introduced comprehensive e-learning platform with interactive labs</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2025</div>
            <div className="timeline-content">
              <h3>GENESIS Program Selection</h3>
              <p>Selected for MeitY GENESIS EiR Program and received ₹5,00,000 grant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 style={{textAlign:"center"}}>Meet Our Leadership</h2>
          <div className="team-grid">
            {[
              {
                img: founder,
                name: "Pagadala Hemanth Krishna Vardhan",
                position: "Founder & CEO",
                bio: "Cybersecurity expert with years of experience in ethical hacking and penetration testing",
                links: [
                  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/hemanth-krishna-vardhan-pagadala-a796aa339/" },
                  { icon: <FaInstagram />, url: "https://www.instagram.com/hemanthkrishnavardhan.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                ]
              },
              {
                img: coo,
                name: "Uday Venkat Charkanam",
                position: "Ethical Hacker & COO",
                bio: "Security architect specializing in cloud security and threat intelligence",
                links: [
                  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/uday-venkat-22274131a/" },
                  { icon: <FaInstagram />, url: "https://www.instagram.com/hemanthkrishnavardhan.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                ]
              }
            ].map((member) => (
              <div className="team-member" key={member.name}>
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
                <div className="social-links">
                  {member.links.map((link, i) => (
                    <a href={link.url} key={i} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-title">
          <h2 style={{ color: "#000" }}>Our Core Values</h2>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <FaShieldAlt className="value-icon" />
            <h3>Security First</h3>
            <p>We prioritize security in everything we do, setting the standard for our students.</p>
          </div>
          <div className="value-card">
            <FaLightbulb className="value-icon" />
            <h3>Innovation</h3>
            <p>We continuously evolve our methods to stay ahead of emerging threats.</p>
          </div>
          <div className="value-card">
            <FaUsers className="value-icon" />
            <h3>Community</h3>
            <p>We foster a supportive learning community for cybersecurity professionals.</p>
          </div>
          <div className="value-card">
            <FaGraduationCap className="value-icon" />
            <h3>Excellence</h3>
            <p>We maintain the highest standards in our training and certifications.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
<section className="services-section">
  <div className="container">
    <div className="section-title">
      <h2>Services We Deliver</h2>
    </div>
    <div className="services-grid">
      <div className="service-column">
        <h3>Training Solutions</h3>
        <ul className="service-list">
          <li>Corporate Training</li>
          <li>Online Live Training</li>
          <li>Courses & Certifications</li>
          <li>1-On-1 Training</li>
        </ul>
      </div>
      <div className="service-column">
        <h3>Security & Development</h3>
        <ul className="service-list">
          <li>Penetration Testing</li>
          <li>Workshops & Webinars</li>
          <li>Career Mentorship</li>
          <li>Web App Development</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
<section className="testimonials">
  <div className="container">
    <h2>Few Of Our Students Say's</h2>
    <div className="testimonial-grid">
      {[
        { video: s1Video, poster: s1Poster, name: "Himavanth Singh", role: "SRM AP STUDENT" },
        { video: s2Video, poster: s2Poster, name: "RAGHAVENDRA", role: "SRM AP STUDENT" },
        { video: s3Video, poster: s3Poster, name: "RISHI", role: "FREELANCER" },
        // New testimonials
        { video: s4Video, poster: s4Poster, name: "Vegi Bharath", role: "XIth Grade Student" },
        { video: s5Video, poster: s5Poster, name: "Sarvin", role: "SRM Student" },
        { video: s6Video, poster: s6Poster, name: "Praneeth", role: "Computer Science Student" }
      ].map((testimonial) => (
        <div className="testimonial-card" key={testimonial.name}>
          <div className="video-wrapper">
            <video controls poster={testimonial.poster}>
              <source src={testimonial.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="testimonial-author">
            <h4>{testimonial.name}</h4>
            <p>{testimonial.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default About;