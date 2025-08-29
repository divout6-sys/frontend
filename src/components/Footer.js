import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left side */}
        <div className="footer-left">
          <img
            src="/images/Company Logo.png"
            alt="Triangle Automobile & Engineering Company Logo"
            className="footer-logo"
          />
          <p className="footer-text">
            <b>
              Our objective is to assist businesses, including Triangle
              Automobile & Engineering Company, a car lights company, in
              increasing their online presence and revenue by advertising their
              products and services via various platforms.
            </b>
          </p>
          <Link to="/about" className="discover-btn">
           DISCOVER MORE
          </Link>
        </div>

        {/* Right side */}
        <div className="footer-right">
          <h3>Quick Links</h3>
          <ul className="footer-pages">
            <li><Link to="/clients">Our Clients</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* QR Code under Quick Links */}
          <div className="footer-qr">
            <h4>Find Us on Google Maps</h4>
            <img 
              src="/images/qr-code-gps.png" 
              alt="Google Map QR Code" 
              className="qr-code"
            />
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>
            Plot# B - 292 & 293, Block - 1, <br />
            Metroville - 1, S.I.T.E.area, <br />
            Pakistan, Karachi.
          </p>
          <p>
            📧 <a href="mailto:mansoor.triangle@hotmail.com">mansoor.triangle@hotmail.com</a><br />
            📧 <a href="mailto:triangleautos@hotmail.com">triangleautos@hotmail.com</a>
          </p>

          {/* WhatsApp Icons Instead of Numbers */}
          <div className="whatsapp-icons" style={{ marginTop: "12px" }}>
            <a
              href="https://wa.me/03362046379"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FaWhatsapp size={24} /> 0336 2046379
            </a>
            <br />
            <a
              href="https://wa.me/03394222922"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FaWhatsapp size={24} /> 0339 4222922
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <p>
          ©{new Date().getFullYear()} Triangle Automobile & Engineering Company.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
