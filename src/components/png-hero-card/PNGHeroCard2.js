import React, { useReducer, useEffect, useRef } from "react";
import "./PNGHeroCard.css";
import { airpodAssetList as assetList } from "./testAssetList.js";
import {
    useInView,
    motion,
    useTransform,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import * as PIXI from "pixi.js";

const app = new PIXI.Application();

await app.init({
    resizeTo: window,
    sharedTicker: false,
    backgroundAlpha: 0,
    antialias: true,
    resolution: 1,
});

const PNGHeroCard2 = ({
    Id,
    Number,
    Title,
    Animations,
    BGColor,
    Text,
    ButtonLabel,
    ButtonOnclick,
}) => {
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);

    let isInView = useInView(
        sectionRef
        // , {margin: "0px 100px -50px 0px",}
    );
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        // ,
        // offset: ["start center", "end end"], // target container, target container
    });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    let animatedSprite;
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // console.log(isInView, scrollYProgress.current);
    });

    const setUpAnimatedSprite = (textureArray) => {
        animatedSprite = new PIXI.AnimatedSprite(textureArray);
        // animatedSprite.textures = textureArray;
        app.stage.addChild(animatedSprite);
    };
    useEffect(() => {
        canvasRef.current.appendChild(app.canvas);
        console.log(canvasRef.current);
        console.log(sectionRef.current);
        console.log(app.canvas);
        // app.start();
        let canvas = app.canvas;
        console.log("====================");
        console.log("CANVAS LAUNCHED : ", canvas.width, canvas.height);
        console.log("====================");

        // app.renderer.background.color = ('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
        //

        PIXI.Assets.addBundle("pngs", assetList);

        // Load the assets and get a resolved promise once both are loaded
        const texturesPromise = PIXI.Assets.loadBundle(["pngs"]);

        texturesPromise.then((resolvedTextures) => {
            console.log("Texture loaded:", resolvedTextures.pngs);
            let textureArray = [];

            assetList.forEach((asset, i) => {
                textureArray.push(resolvedTextures.pngs[asset.alias]);
            });
            // animatedSprite = new PIXI.AnimatedSprite(textureArray);
            // app.stage.addChild(animatedSprite);
            setUpAnimatedSprite(textureArray);

            animatedSprite.anchor.set(0.5);
            animatedSprite.x = canvas.width / 2;
            animatedSprite.y = canvas.height / 2;
        });

        app.ticker.add((ticker) => {
            // scrollYProgress.current : 0 ~ 1.
            let frameNum = Math.floor(
                scrollYProgress.current * assetList.length
            );
            if (frameNum === assetList.length) frameNum -= 1;
            if (animatedSprite) animatedSprite.currentFrame = frameNum;
        });
    }, []);
    const vpLeave = () => {
        console.log("........LEAVE");
    };
    const vpEnter = () => {
        console.log("ENTER...");
    };
    return (
        // wrapper and sticky scroll area with excess height
        <div
            className="heroCard-wrapper"
            ref={sectionRef}
            style={{
                // border: "solid 2px black",
                height: "300vh",
            }}
        >
            {/* moving part. */}
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
                    ></div>
                </motion.div>
            </div>
        </div>
    );
};

export default PNGHeroCard2;
