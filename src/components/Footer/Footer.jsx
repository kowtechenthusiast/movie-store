import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./footer.css"; // Import CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Movie Store</div>

        <p className="footer-text">
          © {new Date().getFullYear()} MovieStore. All rights reserved.
        </p>

        <div className="footer-social">
          <a href="#" className="social-icon">
            <FaFacebook />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
