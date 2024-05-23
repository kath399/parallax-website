import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import NrmaButton from "../../components/button/NrmaButton";
import Drone from "../../assets/img/Drone.svg";
import "./HeroCard.css";

const HeroCard = ({Id, Number, Title, Animations, BGColor, Text, ButtonLabel, ButtonOnclick}) => {

  const navigate = useNavigate();
  const goTo = () => {
    navigate('/form');
  };

  return (
    <div id={Id} className="heroCard" style={{backgroundColor: BGColor}}>
      {Animations}
      <div className="cardNumber">
        0{Number}/04
      </div>
      <div className="heroTitle">{Title}</div>
      <div className="heroText">
        {Text} 
        <br/>
        <button className='heroBtn' onClick={goTo}>{ButtonLabel}</button>
      </div>
    </div>
  );
};

export default HeroCard;
