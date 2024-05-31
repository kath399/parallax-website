import React from "react";
import "../../assets/styles/button.css";
import "./contact.css";

const Contact = () => {
  const handleClick = () => {
    window.location.href =
      "https://aus-fapp02.azurewebsites.net/api/survey-renderer?phash=68bd8b0c-5dc5-43df-a718-931123540aba_19&P=22576=1";
  };

  return (
    <div id="contact">
      <div className={"contact-card py-2"}>
        <h1>Help define the future, become part of the Help Lab.</h1>
        <p>
          Get early access to all the latest Help Products and have a say on
          what helpful things a Help Company develops next.
        </p>
        <button class="primary-button-white" onClick={handleClick}>
          Join the Help Lab
        </button>
      </div>
    </div>
  );
};

export default Contact;
