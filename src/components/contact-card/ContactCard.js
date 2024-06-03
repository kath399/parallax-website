import React from "react";
import "./ContactCard.css";
import Logo from "../../assets/icons/logo1.png";

const ContactCard = () => {
  return (
    <div className={"contact-card py-2"} >
        <h1>Help define the future, become part of the Help Lab.</h1>
        <p>Get early access to all the latest Help Products and have a say on what helpful things a Help Compnay develops next.</p>
        <button className="white-contrast">Join the Help Lab</button>
    </div>
  );
};

export default ContactCard;