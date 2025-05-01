import React from "react";
import "./footer.css";
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronRight } from "react-icons/fa";
import { 
  AiFillFacebook, 
  AiFillTwitterSquare, 
  AiFillLinkedin, 
  AiFillYoutube, 
  AiFillInstagram 
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <img src="./vhass-logo.png" alt="VHASS Cybersecurity" className="footer-logo" />
              <p className="footer-description">
                Empowering the digital world with cutting-edge cybersecurity education and solutions.
              </p>
              <div className="footer-newsletter">
                <h5>Subscribe to our newsletter</h5>
                <form className="newsletter-form">
                  <input type="email" placeholder="Your email address" required />
                  <button type="submit"><FaPaperPlane /></button>
                </form>
              </div>
            </div>
            
            <div className="footer-links-container">
              <div className="footer-links-col">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-links">
                  <li><Link to="/"><FaChevronRight /> Home</Link></li>
                  <li><Link to="/courses"><FaChevronRight /> Courses</Link></li>
                  <li><Link to="/workshop"><FaChevronRight /> WorkShop</Link></li>
                  <li><Link to="/entrepreneur"><FaChevronRight /> Entrepreneur</Link></li>
                  <li><Link to="/about"><FaChevronRight /> About Us</Link></li>
                  <li><Link to="/contacts"><FaChevronRight /> HelpDesk</Link></li>
                </ul>
              </div>
              
              <div className="footer-links-col">
                <h4 className="footer-title">Courses</h4>
                <ul className="footer-links">
                  <li><Link to="/courses"><FaChevronRight /> Ethical Hacking</Link></li>
                  <li><Link to="/courses"><FaChevronRight /> Penetration Testing</Link></li>
                  <li><Link to="/courses"><FaChevronRight /> Network Security</Link></li>
                  <li><Link to="/courses"><FaChevronRight /> Cryptography</Link></li>
                  <li><Link to="/courses"><FaChevronRight /> Incident Response</Link></li>
                </ul>
              </div>
              
              <div className="footer-links-col">
                <h4 className="footer-title">Contact Us</h4>
                <ul className="footer-contact">
                  <li><FaMapMarkerAlt /> <span>#2-1-70, Brilliants School Area,<br />Ibrahimpatnam Krishna - 521 456,<br />Andhra Pradesh</span></li>
                  <li><FaPhone /> +91 9182890236</li>
                  <li><FaEnvelope /> vhass0310@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-social">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><AiFillFacebook /></a>
              <a href="#" aria-label="Twitter"><AiFillTwitterSquare /></a>
              <a href="#" aria-label="LinkedIn"><AiFillLinkedin /></a>
              <a href="#" aria-label="YouTube"><AiFillYoutube /></a>
              <a href="#" aria-label="Instagram"><AiFillInstagram /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {new Date().getFullYear()} VHASS Cybersecurity Pvt. Ltd. All rights reserved.</p>
            <div className="legal-links">
              <Link to="#">Privacy Policy</Link>
              <span>|</span>
              <Link to="#">Terms of Service</Link>
              <span>|</span>
              <Link to="#">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;