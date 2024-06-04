import React, { useEffect, useState } from "react";
import "./HeroCard.css";
import { motion, useScroll, useTransform } from "framer-motion";
//import { Slide } from "react-awesome-reveal";

const HeroCard = ({ Id, Number, Title, Animations, BGColor, Text, ButtonLabel, ButtonOnclick }) => {

  const { scrollYProgress } = useScroll();

  const width = useTransform(scrollYProgress, [0, 1], ['100vw', '80vw']);
  const height = useTransform(scrollYProgress, [0, 1], ['100vh', '80vh']);

  //const [y, setY] = useState(0);
  
  /*useEffect(() => {
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
  }, []); // Empty dependency array means this effect runs once after the initial render*/

  return (
      <motion.div 
        className='heroCard-wrapper'
        whileInView={{scale: [1, 0.85]}}
        transition={{
          ease: "linear",
          duration: 2,
        }}
      >
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
      </motion.div>
  );
};

export default HeroCard;
