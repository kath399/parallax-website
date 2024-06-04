import React, { useEffect, useRef } from "react";
import "./PNGHeroCard.css";
import { useInView } from "framer-motion";
import {
    motion,
    useScroll,
    useMotionValue,
    useMotionValueEvent,
} from "framer-motion";

const PNGHeroCard = ({
    Id,
    Number,
    Title,
    Animations,
    BGColor,
    Text,
    ButtonLabel,
    ButtonOnclick,
    PNGFrames,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        isInView && console.log("Page scroll: ", latest, scrollYProgress);
    });

    return (
        <div className="heroCard-wrapper" ref={ref}>
            <div className="canvasWrapper"
                style={{
                    position: "absolute",
                    display: "block",
                    width: "100%",
                    height: "100%",
                    right: 0,
                    pointerEvents: "none",
                    background: "green",
                }}
            >
              <canvas/>
            </div>
            <div
                id={Id}
                className="heroCard"
                style={{ backgroundColor: BGColor }}
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
            </div>
        </div>
    );
};

export default PNGHeroCard;
