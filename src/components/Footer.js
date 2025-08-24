import React from "react";
import "./Footer.css";

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
          <a href="#" className="discover-btn">
            DISCOVER MORE
          </a>
        </div>

        {/* Right side */}
        <div className="footer-right">
          <ul className="footer-pages">
            <li><a href="#">Our Clients</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
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
            📧 <a href="mailto:mansoor.triangle@hotmail.com">mansoor.triangle@hotmail.com</a>
            <br />
            📧 <a href="mailto:triangleautos@hotmail.com">triangleautos@hotmail.com</a>
            <br />
            📧 <a href="mailto:osman-mansoor@live.com">osman-mansoor@live.com</a>
          </p>
          <p style={{ marginTop: "10px" }}>
            📞  +92 336 2046379 <br />
            📞  +92 339 4222922
          </p>
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
