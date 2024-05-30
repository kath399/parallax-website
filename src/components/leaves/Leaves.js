import React, { useRef, useEffect, useReducer } from "react";
import { Engine, Bodies, Body, World } from "matter-js";
import * as PIXI from "pixi.js";

// Matter JS physics engine with PIXI
const app = new PIXI.Application();

await app.init({
    resizeTo: window,
    sharedTicker: true,
    backgroundAlpha: 0,
    // backgroundColor: '#1099bb',
    antialias: true,
    // resolution: 1,
});
const Leaves = (props) => {
    /*--------------------------
  Setup the Matter engine.
  --------------------------*/
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
        // Matter, Setup Walls
        // boundaries
        World.add(engine.current.world, [
            Bodies.rectangle(canvasWidth / 2, -10, canvasWidth, 20, {
                isStatic: true,
            }),
            Bodies.rectangle(-10, canvasHeight / 2, 20, canvasHeight, {
                isStatic: true,
            }),
            Bodies.rectangle(
                canvasWidth / 2,
                canvasHeight + 10,
                canvasWidth,
                20,
                { isStatic: true }
            ),
            Bodies.rectangle(
                canvasWidth + 10,
                canvasHeight / 2,
                20,
                canvasHeight,
                { isStatic: true }
            ),
        ]);

        Engine.run(engine.current);

        // Pixi
        scene.current.appendChild(app.canvas);

        /*
    // On first render add app to DOM
        pixiref.current.appendChild(app.canvas);
*/
        // app.start();

        // app.stage.interactive = true;
        let canvas = app.canvas;
        console.log("====================");
        console.log("CANVAS LAUNCHED : ");
        console.log("app.canvas : ", canvas.width, canvas.height);
        console.log("window : ", window.innerWidth, window.innerHeight);
        console.log("app.screen : ", app.screen.width, app.screen.height);
        console.log("scene.offset", scene.offsetWidth, scene.offsetHeight);
        console.log("====================");

        let centre = { x: canvas.width * 0.5, y: canvas.height * 0.5 };
        let cursorPixi;

        // Container
        let _container = new PIXI.Container();
        app.stage.addChild(_container);

        const randRange = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        let leafAssetList = [
            { alias: "leaf01", src: "/images/circ100.png" },
            { alias: "leaf02", src: "/images/circ100.png" },
            { alias: "leaf03", src: "/images/circ100.png" },
        ];
        let leafAssetAliasList = [...Array(leafAssetList.length).keys()].map(
            (x) => leafAssetList[x].alias
        );

        let shadowAssetList = [
            { alias: "shadow01", src: "/images/Shadow01.png" },
            { alias: "shadow02", src: "/images/Shadow02.png" },
            { alias: "shadow03", src: "/images/Shadow03.png" },
        ];
        let shadowAssetAliasList = [
            ...Array(shadowAssetList.length).keys(),
        ].map((x) => shadowAssetList[x].alias);

        // Add the assets to load
        PIXI.Assets.addBundle("leaves", leafAssetList);
        PIXI.Assets.addBundle("shadows", shadowAssetList);

        // Load the assets and get a resolved promise once both are loaded
        const texturesPromise = PIXI.Assets.loadBundle([
            "leaves",
            "shadows",
            "curs",
        ]);
        texturesPromise.then((resolvedTextures) => {
            console.log("Texture loaded:", texturesPromise);
            console.log("Texture loaded:", resolvedTextures);

            leaves = [...Array(maxLeaves).keys()].map(
                (x) =>
                    new PIXI.Sprite(
                        resolvedTextures.leaves[
                            leafAssetAliasList[x % leafAssetAliasList.length]
                        ]
                    )
            );
            shadows = [...Array(maxLeaves).keys()].map(
                (x) =>
                    new PIXI.Sprite(
                        resolvedTextures.shadows[
                            shadowAssetAliasList[
                                x % shadowAssetAliasList.length
                            ]
                        ]
                    )
            );

            leaves.forEach((leaf, i) => {
                // let leafScale = randRange(8, 12) * 0.1;
                let leafScale = 1;
                // let leafRotation = randRange(-20, 20);
                let leafRotation = 0;
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
                        restitution: 0.2,
                    },
                    3 //MASS
                );
                leafBody.i = i;
                World.addBody(engine.current.world, leafBody);
                leafBodies.push(leafBody);

                //

                let shadow = shadows[i];

                shadow.anchor.set(0.5);
                shadow.alpha = 0.01;
                shadow.i = i; //index
                shadow.shadowOffset = { x: 20, y: 20 };
                shadow.x = leafInitPos.x + shadow.shadowOffset.x;
                shadow.y = leafInitPos.y + shadow.shadowOffset.y;
                shadow.landedPos = { x: leafInitPos.x, y: leafInitPos.y };
                shadow.scale.set(leafScale, leafScale);
                shadow.rotation = leafRotation;

                // cascading attachment : leaf-shadow-leaf-shadow
                _container.addChild(shadow);
                _container.addChild(leaf);
            });

            cursorPixi = new PIXI.Sprite("aaa");
            cursorPixi.x = 100;
            cursorPixi.y = 100;
            cursorPixi.anchor.set(0.5);

            _container.addChild(cursorPixi);
            console.log(cursorPixi);

            let cursorMatter = Bodies.circle(
                centre.x,
                centre.y,
                blowerRange, //radius
                {
                    mass: 200,
                    restitution: 0.9,
                    friction: 0.005,
                    render: {
                        fillStyle: "#0000ff",
                    },
                }
            );
            World.add(engine.current.world, cursorMatter);

            const handleCursor = (e) => {
                cursorPixi.position.copyFrom(e.global);

                // cursorPixi.x = e.clientX;
                // cursorPixi.y = e.clientY;

                // cursorMatter.position.x = e.clientX;
                // cursorMatter.position.y = e.clientY;

                cursorMatter.position.x = cursorPixi.position.x;
                cursorMatter.position.y = cursorPixi.position.y;
            };
            _container.eventMode = "static";
            _container.on("mousemove", handleCursor);
        }); //Asset Load promise

        app.ticker.add((ticker) => {
            leaves.forEach((leaf, i) => {
                let leafBody = leafBodies[leaf.i];
                leaf.position = leafBody.position;
                leaf.rotation = leafBody.angle;

                let shadow = shadows[leaf.i];
                shadow.position = leaf.position;
                shadow.rotation = leaf.rotation;
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
