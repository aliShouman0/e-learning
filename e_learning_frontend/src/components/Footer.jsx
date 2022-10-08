import React from "react";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-center">
        <p>Learn With Us</p>
        <p> 📙📘📗📖📕📔📚🧾</p>
      </div>
      <div className="footer-info">
        <p>hello@learn.com</p>
        <p>0096183/123456</p>
        <p>Beirut lebanon</p>
      </div>
    </footer>
  );
}

export default Footer;
