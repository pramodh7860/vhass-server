import React from 'react';
import './workshop.css';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaLaptopCode, FaChalkboardTeacher } from 'react-icons/fa';

const Workshop = () => {
  return (
    <main className="WorkshopsPage">
      {/* Hero Banner */}
      <section className="workshop-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Cybersecurity Workshops & Seminars</h1>
            <p>Hands-on training sessions and expert-led seminars to boost your cybersecurity skills</p>
            <a href="#upcoming-events" className="btn-primary">View Upcoming Events</a>
          </div>
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="featured-workshops">
        <div className="container">
          <div className="section-header">
            <h2>Featured Workshops</h2>
            <p>Interactive sessions with industry professionals to gain practical cybersecurity knowledge</p>
          </div>
          
          <div className="workshop-grid">
            {/* Workshop 1 */}
            <div className="workshop-card">
              <div className="workshop-badge">Popular</div>
              <div className="workshop-image">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Ethical Hacking Workshop" />
              </div>
              <div className="workshop-content">
                <span className="workshop-category">Hands-on Training</span>
                <h3>Ethical Hacking Workshop</h3>
                <div className="workshop-meta">
                  <span><FaCalendarAlt /> June 15, 2025</span>
                  <span><FaClock /> 10:00 AM - 4:00 PM</span>
                </div>
                <p className="workshop-description">Learn penetration testing techniques and tools in this intensive hands-on session with our certified ethical hackers.</p>
                <div className="workshop-footer">
                  <div className="workshop-price">
                    <span className="price">₹999</span>
                    <span className="original-price">₹1999</span>
                    <span className="discount">50% OFF</span>
                  </div>
                  <a href="#" className="workshop-btn">Register Now</a>
                </div>
              </div>
            </div>
            
            {/* Workshop 2 */}
            <div className="workshop-card">
              <div className="workshop-badge">New</div>
              <div className="workshop-image">
                <img src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Cloud Security Seminar" />
              </div>
              <div className="workshop-content">
                <span className="workshop-category">Expert Seminar</span>
                <h3>Cloud Security Masterclass</h3>
                <div className="workshop-meta">
                  <span><FaCalendarAlt /> June 22, 2025</span>
                  <span><FaClock /> 2:00 PM - 6:00 PM</span>
                </div>
                <p className="workshop-description">Learn from industry leaders about securing cloud infrastructure and protecting data in AWS, Azure, and GCP environments.</p>
                <div className="workshop-footer">
                  <div className="workshop-price">
                    <span className="price">Free</span>
                  </div>
                  <a href="#" className="workshop-btn">Reserve Seat</a>
                </div>
              </div>
            </div>
            
            {/* Workshop 3 */}
            <div className="workshop-card">
              <div className="workshop-image">
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Incident Response Workshop" />
              </div>
              <div className="workshop-content">
                <span className="workshop-category">Interactive Workshop</span>
                <h3>Incident Response Bootcamp</h3>
                <div className="workshop-meta">
                  <span><FaCalendarAlt /> July 5, 2025</span>
                  <span><FaClock /> 9:00 AM - 5:00 PM</span>
                </div>
                <p className="workshop-description">Simulated cyber attack scenarios with guided response exercises to prepare you for real-world security incidents.</p>
                <div className="workshop-footer">
                  <div className="workshop-price">
                    <span className="price">₹1499</span>
                    <span className="original-price">₹2999</span>
                    <span className="discount">50% OFF</span>
                  </div>
                  <a href="#" className="workshop-btn">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events" id="upcoming-events">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <p>Join our cybersecurity community for these valuable learning opportunities</p>
          </div>
          
          <div className="events-timeline">
            {/* Event 1 */}
            <div className="event-item">
              <div className="event-date">
                <span className="day">10</span>
                <span className="month">JUN</span>
              </div>
              <div className="event-content">
                <h3>Cyber Threat Intelligence Seminar</h3>
                <div className="event-meta">
                  <span><FaClock /> 3:00 PM - 5:00 PM</span>
                  <span><FaMapMarkerAlt /> Online (Zoom)</span>
                </div>
                <p>Learn how to collect, analyze, and use threat intelligence to protect your organization from emerging cyber threats.</p>
                <a href="#" className="event-btn">Learn More</a>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="event-item">
              <div className="event-date">
                <span className="day">18</span>
                <span className="month">JUN</span>
              </div>
              <div className="event-content">
                <h3>Secure Coding Workshop</h3>
                <div className="event-meta">
                  <span><FaClock /> 10:00 AM - 2:00 PM</span>
                  <span><FaMapMarkerAlt /> Online</span>
                </div>
                <p>Hands-on training for developers to write secure code and prevent common vulnerabilities in web applications.</p>
                <a href="#" className="event-btn">Learn More</a>
              </div>
            </div>
            
            {/* Event 3 */}
            <div className="event-item">
              <div className="event-date">
                <span className="day">25</span>
                <span className="month">JUN</span>
              </div>
              <div className="event-content">
                <h3>Women in Cybersecurity Panel</h3>
                <div className="event-meta">
                  <span><FaClock /> 6:00 PM - 8:00 PM</span>
                  <span><FaMapMarkerAlt /> Online (Live Stream)</span>
                </div>
                <p>Hear from leading women in cybersecurity about their career journeys and the future of the industry.</p>
                <a href="#" className="event-btn">Learn More</a>
              </div>
            </div>
            
            {/* Event 4 */}
            <div className="event-item">
              <div className="event-date">
                <span className="day">02</span>
                <span className="month">JUL</span>
              </div>
              <div className="event-content">
                <h3>Digital Forensics Workshop</h3>
                <div className="event-meta">
                  <span><FaClock /> 9:00 AM - 4:00 PM</span>
                  <span><FaMapMarkerAlt /> Online</span>
                </div>
                <p>Practical training on investigating cyber incidents, recovering digital evidence, and using forensic tools.</p>
                <a href="#" className="event-btn">Learn More</a>
              </div>
            </div>
          </div>
          
          <div className="view-all">
            <a href="#" className="btn-secondary">View All Events</a>
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="workshop-benefits">
        <div className="container">
          <div className="section-header">
            <h2>Why Attend Our Workshops?</h2>
            <p>Get more than just theoretical knowledge from our interactive sessions</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <FaLaptopCode className="benefit-icon" />
              <h3>Hands-on Labs</h3>
              <p>Practical exercises with real-world scenarios to apply what you learn immediately.</p>
            </div>
            
            <div className="benefit-card">
              <FaChalkboardTeacher className="benefit-icon" />
              <h3>Expert Instructors</h3>
              <p>Learn from certified professionals with years of industry experience.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Workshop;
