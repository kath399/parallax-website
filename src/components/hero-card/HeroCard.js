import React, { useEffect } from "react";
import "./HeroCard.css";
import { Slide } from "react-awesome-reveal";

const HeroCard = ({ Id, Number, Title, Animations, BGColor, Text, ButtonLabel, ButtonOnclick }) => {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const card = entry.target.querySelector('.heroCard');
        if (entry.isIntersecting) {
          card.classList.add('heroCard-animation');
          return;
        }
        card.classList.remove('heroCard-animation');
      });
    });

    const heroCardWrapper = document.querySelector('.heroCard-wrapper');
    if (heroCardWrapper) {
      observer.observe(heroCardWrapper);
    }

    // Cleanup function to disconnect observer on component unmount
    return () => {
      if (heroCardWrapper) {
        observer.unobserve(heroCardWrapper);
      }
      observer.disconnect();
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
      <div className='heroCard-wrapper'>
        <div id={Id} className="heroCard" style={{ backgroundColor: BGColor }}>
          {Animations}
          <div className="cardNumber">
            0{Number}/04
          </div>
          <div className="heroTitle">{Title}</div>
          <div className="heroText">
            {Text}
            <br />
            <button className='heroBtn' onClick={ButtonOnclick}>{ButtonLabel}</button>
          </div>
        </div>
      </div>
  );
};

export default HeroCard;
