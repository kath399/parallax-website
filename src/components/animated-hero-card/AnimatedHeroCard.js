import React, { useState, useEffect, useRef } from "react";
import "./AnimatedHeroCard.css";
import {
  useInView,
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Stage, AnimatedSprite } from "@pixi/react";
// import { isMobile } from "react-device-detect";

const AnimatedHeroCard = ({
  Id,
  Number,
  Title,
  Animations,
  ImageList,
  StickyScrollLength,
  BGColor,
  Text,
  ButtonLabel,
  ButtonOnclick,
  Link,
}) => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const [frame, setFrame] = useState(0);
  const [images, setImages] = useState(ImageList);
  const [imageSize, setImageSize] = useState({width: window.innerWidth, height: window.innerHeight});

  const maxImageSize = {width:800, height: 450};
  const imageRatio = 9/16;
//
const [mobileWidth, setMobileWidth] = useState(window.innerWidth <= 500);

const handleWindowSizeChange = () => {
  setMobileWidth(window.innerWidth <= 500);
}

useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
    };
}, []);

//
  let isInView = useInView(
    sectionRef // {margin: "0px 100px -50px 0px",} //keeping for further animation tweak
  );
  const animateHeroNumber = {
    visible: { left: mobileWidth?"0px":"10vw" },
    hidden: { left: mobileWidth?"0px":"5vw" },
  }
  const animateHeroText = {
      visible: {
          left: mobileWidth ? "50%" : "10vw",
          bottom: mobileWidth ? "50px" : "0vh",
      },
      hidden: {
          left: mobileWidth ? "50%" : "5vw",
          bottom: mobileWidth ? "60px" : "0vh",
      },
  };
  const animateParent = {
    visible: { 
        width: "100%",
        height: "100vh",
        top: "0vh",
        borderRadius: "0px",
    },    
    
    hidden: { 
        width: "80%",
        height: "80vh",
        top: "10vh",
        borderRadius: "20px"
    },
  }

  const { scrollYProgress } = useScroll({
    target: sectionRef, // , offset: ["start center", "end end"], // target container, target container
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]); //keeping for further animation tweak

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setFrame(Math.floor(scrollYProgress.current * (images.length - 1)));
  });

  return (
    <div
      className="heroCard-wrapper"
      ref={sectionRef}
      style={{
        // border: "solid 2px black", //debug for scroll
        height: StickyScrollLength,
      }}
    >
      <div className="sticky">
        <motion.div
          className="heroCard"
          style={{ backgroundColor: BGColor }}
          variants={animateParent}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ amount: 0.5 }} // bottom ? top ?
        >
          {Animations}
          <motion.span className="cardNumber" variants={animateHeroNumber}>0{Number}/05</motion.span>
          <h2 className="heroTitle">{Title}</h2>
          <motion.p className="heroText" variants={animateHeroText}>
            {Text}
            <br />
            {ButtonLabel && (
              <a href={Link} target="_blank" rel="noreferrer">
                <button
                  className="primary-button-transparent"
                  onClick={ButtonOnclick}
                >
                  {ButtonLabel}
                </button>
              </a>
            )}
          </motion.p>

          <div className={"canvasWrapper"} ref={canvasRef}>
            <Stage
              width={window.innerWidth}
              height={window.innerHeight}
              options={{
                resizeTo: window,
                sharedTicker: false,
                backgroundAlpha: 0,
                antialias: true,
                resolution: 1,
              }}
            >
              <AnimatedSprite
                anchor={0.5}
                x={window.innerWidth / 2}
                y={window.innerHeight / 2}
                images={images}
                width={window.innerWidth>maxImageSize.width?maxImageSize.width:window.innerWidth}
                height={window.innerWidth>maxImageSize.width?maxImageSize.width*imageRatio:window.innerWidth*imageRatio}
                isPlaying={false}
                currentFrame={frame}
              />
            </Stage>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedHeroCard;
