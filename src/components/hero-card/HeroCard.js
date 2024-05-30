import React from "react";
import "./HeroCard.css";

const HeroCard = ({
  Id,
  Number,
  Title,
  Animations,
  BGColor,
  Text,
  ButtonLabel,
  ButtonOnclick,
}) => {
  return (
    <section id={Id} className="heroCard" style={{ backgroundColor: BGColor }}>
      {Animations}
      <div className="cardNumber">0{Number}/04</div>
      <div className="heroTitle">{Title}</div>
      <div className="heroText">
        {Text}
        <br />
        <button className="heroBtn" onClick={ButtonOnclick}>
          {ButtonLabel}
        </button>
      </div>
    </section>
  );
};

export default HeroCard;
