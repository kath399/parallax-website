import React, { useRef, useEffect, useReducer } from "react";
import { Engine, Bodies, Body, World } from "matter-js";
import * as PIXI from "pixi.js";

// Matter JS physics engine with PIXI
const app = new PIXI.Application();

await app.init({
    resizeTo: window,
    sharedTicker: false,
    backgroundAlpha: 0,
    antialias: true,
    resolution: 1,
});
const Leaves = (props) => {
    //  Setup the Matter engine.
    //
    const scene = useRef();
    const engine = useRef(
        Engine.create({
            gravity: {
                x: 0,
                y: 0,
                scale: 0.001,
            },
        })
    );

    // Scene Container
    // const sceneContainer = document.querySelector(".scene");
    const canvasWidth = app.canvas.width;
    const canvasHeight = app.canvas.height;
    // prev size for resize
    let canvasPrevWidth = canvasWidth;
    let canvasPrevHeight = canvasHeight;

    let leafBodies = [];
    let leaves = [];
    let shadows = [];
    //

    const maxLeaves = props.maxLeaves;
    const blowerIntensity = props.blowerIntensity;
    const blowerRange = props.blowerRange;

    const initialState = { count: 0 };
    const INCREMENT = "increment";

    // leave reducer for further interaction tweak.
    const increment = () => {
        dispatch({ type: INCREMENT });
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case INCREMENT:
                return { count: state.count + 1 / props.maxLeaves };
            default:
                throw new Error();
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // Matter, Setup physical walls (boundaries)

        const wallThickness = 200;

        let walls = [
            // TOP
            Bodies.rectangle(
                canvasWidth / 2,
                -wallThickness / 2,
                canvasWidth,
                wallThickness,
                {
                    isStatic: true,
                }
            ),
            // LEFT
            Bodies.rectangle(
                -wallThickness / 2,
                canvasHeight / 2,
                wallThickness,
                canvasHeight,
                {
                    isStatic: true,
                }
            ),
            // BOTTOM
            Bodies.rectangle(
                canvasWidth / 2,
                canvasHeight + wallThickness / 2,
                canvasWidth,
                wallThickness,
                { isStatic: true }
            ),
            // RIGHT
            Bodies.rectangle(
                canvasWidth + wallThickness / 2,
                canvasHeight / 2,
                wallThickness,
                canvasHeight,
                { isStatic: true }
            ),
        ];

        World.add(engine.current.world, walls);

        Engine.run(engine.current);

        // Pixi
        scene.current.appendChild(app.canvas);

        // app.start();
        let canvas = app.canvas;
        console.log("====================");
        console.log("LEAVES CANVAS LAUNCHED : ", canvas.width, canvas.height);
        console.log("====================");

        let centre = { x: canvas.width * 0.5, y: canvas.height * 0.5 };
        let cursorPixi, cursorMatter;

        // Container
        let _container = new PIXI.Container();
        app.stage.addChild(_container);

        // Transparent background graphic object that works as a hitbox
        let bg = new PIXI.Graphics();
        bg.rect(0, 0, app.canvas.width, app.canvas.height);
        bg.fill(0x1099bb);
        bg.alpha = 0;
        _container.addChild(bg);

        const randRange = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        let leafAssetList = [
            { alias: "leaf01", src: "/images/Leaf_01.png" },
            { alias: "leaf02", src: "/images/Leaf_02.png" },
            { alias: "leaf03", src: "/images/Leaf_03.png" },
            { alias: "leaf04", src: "/images/Leaf_04.png" },
            { alias: "leaf05", src: "/images/Leaf_05.png" },
            { alias: "leaf06", src: "/images/Leaf_06.png" },
            { alias: "leaf07", src: "/images/Leaf_07.png" },
            { alias: "leaf08", src: "/images/Leaf_08.png" },
            { alias: "leaf09", src: "/images/Leaf_09.png" },
            { alias: "leaf10", src: "/images/Leaf_10.png" },
            { alias: "leaf11", src: "/images/Nut_01.png" },
            { alias: "leaf12", src: "/images/Nut_02.png" },
            { alias: "leaf13", src: "/images/Nut_03.png" },
            { alias: "leaf14", src: "/images/Stick_01.png" },
            { alias: "leaf15", src: "/images/Stick_02.png" },
        ];
        let leafAssetAliasList = [...Array(leafAssetList.length).keys()].map(
            (x) => leafAssetList[x].alias
        );

        // Add the assets to load
        PIXI.Assets.addBundle("leaves", leafAssetList);

        // Load the assets and get a resolved promise once both are loaded
        const texturesPromise = PIXI.Assets.loadBundle(["leaves"]);
        texturesPromise.then((resolvedTextures) => {
            console.log("Leaves Texture loaded:", resolvedTextures);

            leaves = [...Array(maxLeaves).keys()].map(
                (x) =>
                    new PIXI.Sprite(
                        resolvedTextures.leaves[
                            leafAssetAliasList[x % leafAssetAliasList.length]
                        ]
                    )
            );

            leaves.forEach((leaf, i) => {
                let leafScale = randRange(8, 12) * 0.1;
                // let leafScale = 1;
                let leafRotation = randRange(-220, 220) * 0.01; // radian
                // let leafRotation = 0;
                let leafInitPos = {
                    x: randRange(140, canvas.width - 140),
                    y: randRange(140, canvas.height - 140),
                };

                leaf.anchor.set(0.5);
                leaf.i = i; //index
                leaf.x = leafInitPos.x;
                leaf.y = leafInitPos.y;
                leaf.landedPos = { x: leafInitPos.x, y: leafInitPos.y };
                leaf.scale.set(leafScale, leafScale);

                leaf.rotation = leafRotation;
                leaf.isBlowingAway = false;
                leaf.isDead = false;

                // Matter.Bodies.circle(x, y, radius, [options], [maxSides])
                let leafBody = Bodies.circle(
                    leaf.x,
                    leaf.y,
                    20, // radius
                    // (leaf.width + leaf.height) * 0.5,
                    {
                        //OPTIONS
                        mass: 2,
                        restitution: 0.8,
                        friction: 0.1,
                        frictionAir: 0.1,
                        frictionStatic: 0,
                        angle: leafRotation,
                        // chamfer: 0.5
                    },
                    10 // max sides
                );
                leafBody.i = i;
                World.addBody(engine.current.world, leafBody);
                leafBodies.push(leafBody);

                // cascading attachment : leaf-shadow-leaf-shadow
                _container.addChild(leaf);
            });

            cursorPixi = new PIXI.Sprite("AAA");
            // cursorPixi = new PIXI.Sprite(leaves[0].texture);
            cursorPixi.x = 100;
            cursorPixi.y = 100;
            cursorPixi.anchor.set(0.5);

            _container.addChild(cursorPixi);

            cursorMatter = Bodies.circle(
                centre.x,
                centre.y,
                blowerRange, //radius
                {
                    mass: 200,
                    restitution: 0,
                    slop: 0.1,
                    // friction: 0.005,
                },
                5
            );
            World.add(engine.current.world, cursorMatter);

            const handleCursor = (e) => {
                cursorPixi.position.copyFrom(e.global);
                cursorMatter.position.x = cursorPixi.position.x;
                cursorMatter.position.y = cursorPixi.position.y;
            };
            bg.eventMode = "static";
            bg.on("mousemove", handleCursor);

            // Resize Listener
            window.addEventListener("resize", function (event) {
                // Save the new canvas width
                const canvasWidth = canvas.width;
                const canvasHeight = canvas.height;

                // Reposition and scale all the walls.
                // TOP
                Body.setPosition(walls[0], {
                    x: canvasWidth / 2,
                    y: -wallThickness / 2,
                });
                Body.scale(walls[0], canvasWidth / canvasPrevWidth, 1);
                // LEFT
                Body.setPosition(walls[1], {
                    x: -wallThickness / 2,
                    y: canvasHeight / 2,
                });
                Body.scale(walls[1], 1, canvasHeight / canvasPrevHeight);
                // BOTTOM
                Body.setPosition(walls[2], {
                    x: canvasWidth / 2,
                    y: canvasHeight + wallThickness / 2,
                });
                Body.scale(walls[2], canvasWidth / canvasPrevWidth, 1);
                // RIGHT
                Body.setPosition(walls[3], {
                    x: canvasWidth + wallThickness / 2,
                    y: canvasHeight / 2,
                });
                Body.scale(walls[3], 1, canvasHeight / canvasPrevHeight);

                // Set the new canvas dimensions as the previous.
                canvasPrevWidth = canvasWidth;
                canvasPrevHeight = canvasHeight;
            });
        }); //Asset Load promise

        app.ticker.add((ticker) => {
            leaves.forEach((leaf, i) => {
                let leafBody = leafBodies[leaf.i];
                leaf.position = leafBody.position;
                leaf.rotation = leafBody.angle;
            });
        });

        return () => {
            // On unload stop the application
            app.stop();

            // Matter
            World.clear(engine.current.world);
            Engine.clear(engine.current);
        };
    }, []); // UseEffect End

    return (
        <div
            style={{
                position: "absolute",
                display: "block",
                width: "100%",
                height: "100vw",
                top: 0,

                right: 0,
                pointerEvents: "none",
            }}
        >
            <div
                ref={scene}
                className={"scene"}
                style={{
                    position: "absolute",
                    display: "block",
                    width: "100%",
                    height: "100vw",
                    top: 0,
                    right: 0,
                }}
            />
        </div>
    );
};

export default Leaves;
