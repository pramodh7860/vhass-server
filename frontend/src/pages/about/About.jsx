import React from "react";
import "./about.css";
import { 
  FaShieldAlt, 
  FaLightbulb, 
  FaUsers, 
  FaGraduationCap,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaGlobe,
  FaAlignCenter
} from "react-icons/fa";

// Image imports
import founder from "../../assets/images/founder.png";
import coo from "../../assets/images/coo.png";
import s1Poster from "../../assets/images/s1.png";
import s2Poster from "../../assets/images/s2.png";
import s3Poster from "../../assets/images/s3.png";

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
            <p>Founded in 2023, VHASS Cybersecurity Pvt. Ltd. began as a small team of security professionals passionate about bridging the cybersecurity skills gap. Today, we've grown into a leading provider of cybersecurity education, serving thousands of students and professionals worldwide.</p>
            <p>Our mission is to empower individuals and organizations with the knowledge and skills needed to defend against evolving cyber threats. We believe that education is the most powerful tool in creating a more secure digital world.</p>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="VHASS Team" 
              className="about-image"
            />
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
              <h3>Online Platform Launch</h3>
              <p>Introduced comprehensive e-learning platform with interactive labs</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2028</div>
            <div className="timeline-content">
              <h3>Global Recognition</h3>
              <p>Awarded "Best Cybersecurity Education Provider" by Global Tech Awards</p>
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
                  { icon: <FaLinkedin />, url: "#" },
                  { icon: <FaTwitter />, url: "#" },
                  { icon: <FaGlobe />, url: "#" }
                ]
              },
              {
                img: coo,
                name: "Uday Venkat Charkanam",
                position: "Ethical Hacker & COO",
                bio: "Security architect specializing in cloud security and threat intelligence",
                links: [
                  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/uday-venkat-22274131a/" },
                  { icon: <FaGithub />, url: "#" },
                  { icon: <FaGlobe />, url: "#" }
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

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Students Say</h2>
          <div className="testimonial-grid">
            {[
              { video: s1Video, poster: s1Poster, name: "Himavanth Singh", role: "SRM AP STUDENT" },
              { video: s2Video, poster: s2Poster, name: "RAGHAVENDRA", role: "SRM AP STUDENT" },
              { video: s3Video, poster: s3Poster, name: "RISHI", role: "FREELANCER" }
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