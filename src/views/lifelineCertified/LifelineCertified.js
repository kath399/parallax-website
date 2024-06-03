import React from "react";
import Fade from "react-awesome-reveal/Fade";
import "./lifelineCertified.css";
import TeacupSpoon from "../../assets/img/TeacupSpoon.svg"

const LifelineCertified = () => {
  window.addEventListener('scroll', function() {
    const div = document.querySelector('.lifelineCertified');
    if (window.scrollY > 0) { // Check if the page is scrolled
        div.classList.add('scrolled');
    } else {
        div.classList.remove('scrolled');
    }
  });
  return (
    <Fade duration={1000}>
      <div id="lifelineCertified" className="lifelineCertified">
        <Fade down duration={2000}>
          <img src={TeacupSpoon} alt='Lifeline Certified' className='lifelineImg'/>
        </Fade>
        <div className="lifelineTitle">Lifeline Certified</div>
        <div className="lifelineText">
          We have had all our staff trained by Lifeline so they’re able to deal with any situation.
        </div>
      </div>
    </Fade>
  );
};

export default LifelineCertified;