import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import NrmaButton from "../../components/button/NrmaButton";
import Drone from "../../assets/img/Drone.svg";
import "./droneRoofCheck.css";

const DroneRoofCheck = () => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate('/form');
  };

  useEffect(() => {
    const handleScroll = () => {
      const div = document.getElementById('droneRoofCheck');
      if (div) {
        if (window.scrollY > 0) { // Check if the page is scrolled
          div.classList.add('scrolled');
        } else {
          div.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="droneRoofCheck" className="droneRoofCheck">
      <Fade down duration={2000}>
        <img id='droneImg' src={Drone} alt='Drone' className='droneImg'/>
      </Fade>
      <div className="droneTitle">Drone Roof Check</div>
      <div className="droneText">
        Checking your roof is important, but it’s also a pain, that’s why we’re introducing a service that uses drones to check your roof for you. 
        <button className='droneBtn' onClick={() => navigate('/form')}>Register your interest</button>
      </div>
    </div>
  );
};

export default DroneRoofCheck;
