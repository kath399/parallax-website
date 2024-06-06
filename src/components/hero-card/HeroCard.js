import React, { useEffect, useState, useRef } from "react";
import "./HeroCard.css";
import { motion, useScroll, useTransform } from "framer-motion";
//import { Slide } from "react-awesome-reveal";

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center center', 'end 0.95']
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])

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
      className="heroCard-wrapper"
      ref={ref}
      style={{
        scale: scale
      }}
    >
      <div id={Id} ref={ref} className="heroCard" style={{ backgroundColor: BGColor }}>
        {Animations}
        <div className="cardNumber">0{Number}/05</div>

        <div className="heroTitle">{Title}</div>
        <div className="heroText">
          <p>{Text}</p>
          {ButtonLabel ? (
            <button
              className="primary-button-transparent"
              onClick={ButtonOnclick}
              type="button"
            >
              {ButtonLabel}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCard;
