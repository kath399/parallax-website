import React, { useState, useRef } from "react";
import "./AnimatedHeroCard.css";
import {
  useInView,
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Stage, AnimatedSprite } from "@pixi/react";

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
}) => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  const [frame, setFrame] = useState(0);
  const [images, setImages] = useState(ImageList);

  let isInView = useInView(
    sectionRef // {margin: "0px 100px -50px 0px",} //keeping for further animation tweak
  );
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
          initial={{
            width: "70vw",
            height: "70vh",
            top: "15vh",
            borderRadius: "20px",
          }}
          whileInView={{
            width: "100vw",
            height: "100vh",
            top: "0vh",
            borderRadius: "0px",
          }}
          viewport={{ amount: 0.5 }} // bottom ? top ?
        >
          {Animations}
          <div className="cardNumber">0{Number}/04</div>
          <div className="heroTitle">{Title}</div>
          <div className="heroText">
            {Text}
            <br />
            <button
              className="primary-button-transparent"
              onClick={ButtonOnclick}
            >
              {ButtonLabel}
            </button>
          </div>

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
