import React from "react";
import "./footer.css";
import Logo from "../../assets/icons/logo1.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="py-2 footer-style">
      <img src={Logo} alt='Logo' className="footer-logo"/>
      <div className="footer-text">©NRMA Insurance 2024 and other associated mandatory footer items</div>
      <div className="footer-text">Privacy Policy</div>
    </div>
  );
};

export default Footer;