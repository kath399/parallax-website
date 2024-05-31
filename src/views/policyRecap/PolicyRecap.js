import React from "react";
import Fade from "react-awesome-reveal";
import NrmaButton from "../../components/button/NrmaButton";
import "./policyRecap.css";

const PolicyRecap = () => {
  window.addEventListener('scroll', function() {
    const div = document.querySelector('.policyRecap');
    if (window.scrollY > 0) { // Check if the page is scrolled
        div.classList.add('scrolled');
    } else {
        div.classList.remove('scrolled');
    }
  });
  return (
    <div id="policyRecap" className="policyRecap">
      <Fade down duration={2000}>
        <img alt='Policy Recap' className=''/>
      </Fade>
      <div className="policyTitle">Policy Recap</div>
      <div className="policyText">
      You shouldn’t need legal training to understand what you are and are not covered for. Which is why we created the Policy Translator. A useful tool that scans your PDS document and turns it into a fast, easy to read experience that makes everything important in your policy obvious and unmissable.
        <NrmaButton Label={'Use the Policy Recap'}/>
      </div>
    </div>
  );
};

export default PolicyRecap;