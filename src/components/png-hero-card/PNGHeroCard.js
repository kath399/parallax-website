import React, { useState, useRef } from "react";
import "./PNGHeroCard.css";
import {
    useInView,
    motion,
    useTransform,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { Stage, AnimatedSprite } from "@pixi/react";

const PNGHeroCard = ({
    Id,
    Number,
    Title,
    Animations,
    ImageList,
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
        sectionRef
        // , {margin: "0px 100px -50px 0px",}
    );
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        // , offset: ["start center", "end end"], // target container, target container
    });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setFrame(Math.floor(scrollYProgress.current * (images.length-1)));
    });

    return (
        <div
            className="heroCard-wrapper"
            ref={sectionRef}
            style={{
                border: "solid 2px black",
                height: "300vh",
            }}
        >
            <div className="sticky">
                <motion.div
                    className="heroCard"
                    style={{ backgroundColor: BGColor 
                    }}
                    initial={{
                      width: "90vw",
                      height: "90vh",
                      top: "5vh",
                      borderRadius: "10px",
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
                        <button className="heroBtn" onClick={ButtonOnclick}>
                            {ButtonLabel}
                        </button>
                    </div>

                    <div
                        className={"canvasWrapper"}
                        ref={canvasRef}
                        style={{
                            width: "100vw",
                            height: "100vh",
                            position: "absolute",
                            pointerEvents: "none",
                            overflow: "hidden",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <Stage width={window.innerWidth} height={window.innerHeight} 
                        options={{ 
                            resizeTo: window,
                            sharedTicker: false,
                            backgroundAlpha: 0,
                            antialias: true,
                            resolution: 1,
                            }}>
                            <AnimatedSprite 
                            anchor={0.5} 
                            x={window.innerWidth/2} 
                            y={window.innerHeight/2} 
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

export default PNGHeroCard;
