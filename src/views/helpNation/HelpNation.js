import React from "react";
import NrmaButton from "../../components/button/NrmaButton";
import "./helpNation.css";
import Fade from "react-awesome-reveal";
import CloudBR from "../../assets/img/CloudBR.svg";
import CloudTL from "../../assets/img/CloudTL.svg";
import CloudTR from "../../assets/img/CloudTR.svg"

const HelpNation = () => {
  window.addEventListener('scroll', function() {
    const div = document.querySelector('.helpNation');
    if (window.scrollY > 0) { // Check if the page is scrolled
        div.classList.add('scroll');
    } else {
        div.classList.remove('scroll');
    }
  });
  return (
    <div id="helpNation" className="helpNation">
      <Fade duration={2000}>
        <img src={CloudTL} alt='Cloud' className='helpImgTL' />
        <img src={CloudTR} alt='Cloud' className='helpImgTR' />
        <img src={CloudBR} alt='Cloud' className='helpImgBR' />
      </Fade>
      <div className="helpTitle">Help Nation</div>
      <div className="helpText">
        In response to the rise in extreme weather events, we’ve teamed up with The Australian Red Cross to run community preparedness events in at risk areas.
        <br/>
        <NrmaButton Label={'Find an event in your area'}/>
      </div>
    </div>
  );
};

export default HelpNation;