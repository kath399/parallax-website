import React from "react";
import Fade from "react-reveal/Fade";
import NrmaButton from "../../components/button/NrmaButton";
import Drone from "../../assets/img/Drone.svg";
import "./droneRoofCheck.css";

const DroneRoofCheck = () => {
  window.addEventListener('scroll', function() {
    const div = document.querySelector('.droneRoofCheck');
    if (window.scrollY > 0) { // Check if the page is scrolled
        div.classList.add('scrolled');
    } else {
        div.classList.remove('scrolled');
    }
  });
  return (
    <div id="droneRoofCheck" className="droneRoofCheck">
      <Fade down duration={2000}>
        <img id='droneImg' src={Drone} alt='Drone' className='droneImg'/>
      </Fade>
      <div className="droneTitle">Drone Roof Check</div>
      <div className="droneText">
        Checking your roof is important, but it’s also a pain, that’s why we’re introducing a service that uses drones to check your roof for you. 
        <NrmaButton Label={'Register your interest'}/>
      </div>
    </div>
  );
};

export default DroneRoofCheck;