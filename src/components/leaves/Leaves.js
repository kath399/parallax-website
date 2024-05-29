import React, { useRef, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import * as PIXI from "pixi.js";
// import "./leaves.css";

const app = new PIXI.Application();

await app.init({
  // autoStart: true,
  resizeTo: window,
  sharedTicker: true,
  backgroundAlpha: 0,
  // backgroundColor: '#1099bb',
  antialias: true,
  // resolution: 1,
});

const Leaves = (props) => {
  const ref = useRef();
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
    // On first render add app to DOM
    ref.current.appendChild(app.canvas);
    // app.start();
    app.stage.interactive = true;
    let canvas = app.canvas;
    console.log("====================");
    console.log(
      "CANVAS LAUNCHED : ",
      canvas.width,
      canvas.height,
      window.innerWidth,
      window.innerHeight
    );
    console.log("app.canvas : ", canvas.width, canvas.height);
    console.log("window : ", window.innerWidth, window.innerHeight);
    console.log("app.screen : ", app.screen.width, app.screen.height);
    console.log("====================");


        // //init mouse track
        let mousePos = {x:window.innerWidth * 0.5, y:window.innerHeight * 0.5};
        let isMouseIn = false;
        let mouseHistory = new Array(100)
            .fill()
            .map((v, i) => ({ x: mousePos.x, y: mousePos.y }));
        // push : element(s) to add to the end of the array.
        // shift: removes the first element from an array and returns that removed element.


    let centre = { x: canvas.width * 0.5, y: canvas.height * 0.5 };
    let step = { x: 0, y: 0 };

    // Container

    let _container = new PIXI.Container();
    app.stage.addChild(_container);
    let leaves = [];
    let shadows = [];

    const randRange = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let leafAssetList = [
      { alias: "leaf01", src: "/images/Leaf01.png" },
      { alias: "leaf02", src: "/images/Leaf02.png" },
      { alias: "leaf03", src: "/images/Leaf03.png" },
    ];
    let leafAssetAliasList = [...Array(leafAssetList.length).keys()].map(
      (x) => leafAssetList[x].alias
    );

    let shadowAssetList = [
      { alias: "shadow01", src: "/images/Shadow01.png" },
      { alias: "shadow02", src: "/images/Shadow02.png" },
      { alias: "shadow03", src: "/images/Shadow03.png" },
    ];
    let shadowAssetAliasList = [...Array(shadowAssetList.length).keys()].map(
      (x) => shadowAssetList[x].alias
    );
    // Add the assets to load
    PIXI.Assets.addBundle("leaves", leafAssetList);
    PIXI.Assets.addBundle("shadows", shadowAssetList);

    // Load the assets and get a resolved promise once both are loaded
    const texturesPromise = PIXI.Assets.loadBundle(["leaves", "shadows"]);

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
              shadowAssetAliasList[x % shadowAssetAliasList.length]
            ]
          )
      );

      const onLeafOver = (e) => {
        let leaf = e.target;
        if (!leaf.isBlowingAway && !leaf.isDead) {
          leaf.isBlowingAway = true;
        }
      };

      leaves.forEach((leaf, i) => {
        let leafScale = randRange(8, 12) * 0.1;
        let leafRotation = randRange(-20, 20);
        let leafInitPos = {
          x: randRange(0, canvas.width),
          y: randRange(0, canvas.height),
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

        //blow away option
        let directionDegree = randRange(0, 360);
        leaf.directionRadian = directionDegree * (Math.PI / 180);
        leaf.spinSpeed = ((randRange(0, 1) - 0.5) * blowerIntensity) / 400;
        leaf.intensity = randRange(
          blowerIntensity * 0.7,
          blowerIntensity * 1.3
        );
        leaf.wind = {
          x: leaf.intensity * Math.cos(leaf.directionRadian),
          y: leaf.intensity * Math.sin(leaf.directionRadian),
          z: leaf.intensity * 0.5,
        };

        let shadow = shadows[i];

        shadow.anchor.set(0.5);
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

        // Make the leaf interactive : 
        // Mouse & touch events
        // leaf.eventMode = "static";
        // leaf.on("pointerover", onLeafOver);
      });


      const onContainerOver = (e) => {
        mousePos.x = e.clientX;  // Horizontal
        mousePos.y = e.clientY;  // Vertical

        leaves.forEach((leaf, i) => {
        if (!leaf.isBlowingAway && !leaf.isDead) {
            if (Math.abs(mousePos.x - leaf.x) < blowerRange && Math.abs(mousePos.y - leaf.y) < blowerRange) {
                leaf.isBlowingAway = true;
            }
        }
    });


      };
      _container.eventMode = "static";
      _container.on("globalmousemove", onContainerOver);

    });

    app.ticker.add((ticker) => {

      leaves.forEach((leaf, i) => {
        if (!leaf.isDead) {
          if (leaf.isBlowingAway) {
            let delta = ticker.deltaMS * 0.001;
            let zSpeed = leaf.wind.z * 4 * delta;

            leaf.x += leaf.wind.x * delta;
            leaf.y += leaf.wind.y * delta + zSpeed;
            leaf.rotation += leaf.spinSpeed * delta;
            leaf.alpha -= 0.1;

            let shadow = shadows[leaf.i];
            shadow.x = leaf.x + shadow.shadowOffset.x;
            shadow.y = leaf.y + shadow.shadowOffset.y - zSpeed;
            shadow.rotation = leaf.rotation;
            shadow.alpha = leaf.alpha;

            if (
              leaf.x < -2000 ||
              leaf.x > canvas.width + 2000 ||
              leaf.y < -2000 ||
              leaf.y > canvas.height + 2000
            ) {
              console.log("removing leaf no." + leaf.i);
              leaf.isDead = true;
              increment();


            }
          }
        }
      });
    });

    return () => {
      // On unload stop the application
      app.stop();
    };
  }, []);
  ////

  return (
    <div className="leaves_canvas_wrapper"
        style={{
            zIndex: 1999,
            mixBlendMode: "none",
            pointerEvents: "none",

        }}
    >
      {state.count <= 0.999 && (
        <div
          ref={ref}
          style={{
            // zIndex: -1,
            position: "absolute",
            display: "block",
            width: "100%",
            height: "100vw",
            top: 0,
            right: 0,
          }}
        />
      )}
    </div>
  );
};

export default Leaves;
