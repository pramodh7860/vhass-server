import React from "react";
import "./entrepreneur.css";
import { FaLightbulb, FaChartLine, FaNetworkWired, FaHandshake } from "react-icons/fa";

const Entrepreneur = () => {
  return (
    <div className="entrepreneur-page">
      <section className="entrepreneur-hero">
        <h1>Entrepreneurship Program</h1>
        <p>Turn your Idea into a successful business with our comprehensive entrepreneur program designed for aspiring security professionals.</p>
        <a href="#apply" className="btn-primary">Apply Now</a>
      </section>

      {/* Program Highlights */}
      <section className="program-highlights">
        <div className="highlight-card">
          <FaLightbulb className="highlight-icon" />
          <h3>Idea Incubation</h3>
          <p>Get expert guidance to refine your business idea and develop a viable product or service.</p>
        </div>
        
        <div className="highlight-card">
          <FaChartLine className="highlight-icon" />
          <h3>Business Training</h3>
          <p>Learn essential business skills including marketing, finance, and operations specifically for industry ventures.</p>
        </div>
        
        <div className="highlight-card">
          <FaNetworkWired className="highlight-icon" />
          <h3>Mentorship</h3>
          <p>Connect with successful entrepreneurs and industry experts for personalized guidance.</p>
        </div>
        
        <div className="highlight-card">
          <FaHandshake className="highlight-icon" />
          <h3>Investor Network</h3>
          <p>Access our network of investors interested in funding promising startups.</p>
        </div>
      </section>

      {/* Program Structure */}
      <section className="program-structure">
        <h2 style={{ textAlign: 'center', color: '#1e3c72', marginBottom: '40px' }}>Program Structure</h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">Phase 1: Foundation (Weeks 1-4)</div>
              <p>
                • Business fundamentals for entrepreneurs<br />
                • Market research and validation<br />
                • Developing your unique value proposition
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">Phase 2: Development (Weeks 5-8)</div>
              <p>
                • Product/service development strategies<br />
                • Business models<br />
                • Intellectual property protection
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">Phase 3: Growth (Weeks 9-12)</div>
              <p>
                • Marketing and sales for security services<br />
                • Financial planning and funding options<br />
                • Building your team and culture
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">Phase 4: Launch (Weeks 13-16)</div>
              <p>
                • Preparing for investor pitches<br />
                • Legal and compliance considerations<br />
                • Graduation and demo day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <h2 style={{ color: '#1e3c72', marginBottom: '20px' }}>Success Stories</h2>
        <p>Hear from our alumni who turned their expertise into thriving businesses</p>
        
        <div className="story-card">
          <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Sarah Johnson" />
          <h3>Priya Sharma</h3>
          <p><em>Founder, SecureSphere Consulting</em></p>
          <p>"The VHASS entrepreneur program gave me the tools and confidence to launch my cybersecurity consulting firm. Within a year, we've grown to serve 15 clients and have a team of 5 security professionals."</p>
        </div>
        
        <div className="story-card">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Raj Patel" />
          <h3>Raj Patel</h3>
          <p><em>CEO, ThreatGuard Solutions</em></p>
          <p>"Through the program, I connected with investors who believed in my vision for an AI-powered threat detection platform. We've now secured $2M in seed funding and are protecting businesses across India."</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="apply">
        <h2>Ready to Launch Your Cybersecurity Venture?</h2>
        <p>Applications for our next cohort are now open. Limited spots available.</p>
        
        <div className="cta-buttons">
          <a href="/login" className="btn-primary">Apply Now</a>
          <a href="/courses" className="btn-outline">Program Details</a>
        </div>
      </section>
    </div>
  );
};

export default Entrepreneur;