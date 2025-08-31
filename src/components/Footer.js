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
            “Built on engineering. Driven by innovation. Trusted for quality.”
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
            <a
              href="https://www.google.com/maps?q=24.93075,66.99791"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/images/qr-code-gps.png" 
                alt="Google Map QR Code" 
                className="qr-code"
              />
            </a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>
            Plot# B - 292 & 293, Block - 1, <br />
            Metroville - 1, S.I.T.E, <br />
            Pakistan, Karachi.
          </p>
          <p>
            📧{" "}
            <a
              href="https://outlook.live.com/owa/?path=/mail/action/compose&to=triangleautos@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              triangleautos@hotmail.com
            </a>
          </p>

          {/* WhatsApp Icons Instead of Numbers */}
          <div className="whatsapp-icons" style={{ marginTop: "12px" }}>
            <a
              href="https://wa.me/923362046379"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FaWhatsapp size={24} /> +92 336 2046379
            </a>
            <br />
            <a
              href="https://wa.me/923394222922"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FaWhatsapp size={24} /> +92 339 4222922
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
