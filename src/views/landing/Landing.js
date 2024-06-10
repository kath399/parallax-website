import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

import "./Landing.css";
import "../../assets/styles/nrma-scheme.css";
import NavBar from "../../components/navBar/NavBar";
// import HeroCard from "../../components/hero-card/HeroCard";
import AnimatedHeroCard from "../../components/animated-hero-card/AnimatedHeroCard.js";
import { drone, airpods } from "../../assets/AnimatedImageList.js";
import Carousel from "../carousel/Carousel";
import PillSection from "../pillSection/PillSection";
import HelpfulTip from "../helpfulTip/HelpfulTip";
import Footer from "../../components/footer/Footer";

import Intro from "../intro/Intro";

import Drone from "../../assets/img/Drone.svg";
import CloudBR from "../../assets/img/CloudBR.svg";
import CloudTL from "../../assets/img/CloudTL.svg";
import CloudTR from "../../assets/img/CloudTR.svg";
import TeacupSpoon from "../../assets/img/TeacupSpoon.svg";

const Landing = () => {
  const [windowSize, setWindowSize] = useState(undefined);
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/form");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        console.log(window.innerWidth);
        setWindowSize({
          width: window.innerWidth,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Intro />
      {/* Disabled for testing.
      
      
      <HeroCard
        Id="droneRoofCheck"
        Number="1"
        Title="Drone Roof Check"
        Animations={
          <Fade down duration={2000}>
            <img
              id="droneImg"
              src={Drone}
              alt="Drone"
              className="cardImg"
              style={{ top: "-296px", left: "296px" }}
            />
          </Fade>
        }
        BGColor="#E0DF6B"
        Text="Checking your roof is important, but it’s also a pain, that’s why we’re introducing a service that uses drones to check your roof for you."
        ButtonOnclick={goTo}
        ButtonLabel="Register your interest"
      />

      <HeroCard
        Id="helpNation"
        Number="2"
        Title="Help Nation"
        Animations={
          <Fade duration={2000}>
            <img
              src={CloudTL}
              alt="Cloud"
              className="cardImg"
              style={{ top: "100px", left: "0" }}
            />
            <img
              src={CloudTR}
              alt="Cloud"
              className="cardImg"
              style={{ top: "0", right: "0" }}
            />
            <img
              src={CloudBR}
              alt="Cloud"
              className="cardImg"
              style={{ bottom: "0", right: "0" }}
            />
          </Fade>
        }
        BGColor="#F9AE97"
        Text="In response to the rise in extreme weather events, we’ve teamed up with The Australian Red Cross to run community preparedness events in at risk areas."
        ButtonLabel="See if we’re running an event in your area"
      />

      <HeroCard
        Id="policyRecap"
        Number="3"
        Title="Claims Tracker"
        Animations
        BGColor="#91BF9E"
        Text="We track keep you up to date with exactly what stage you claim is at. And what steps are remaining before payout. "
        ButtonLabel="Use the Claims Tracker"
      />

      <HeroCard
        Id="lifelineCertified"
        Number="4"
        Title="Lifeline Certified"
        Animations={
          <Fade down duration={2000}>
            <img
              src={TeacupSpoon}
              alt="Lifeline Certified"
              className="cardImg"
              style={{ top: "36px" }}
            />
          </Fade>
        }
        BGColor="#E0DF6B"
        Text="Checking your roof is important, but it’s also a pain, that’s why we’re introducing a service that uses drones to check your roof for you."
        ButtonLabel="Register your interest"
      /> */}

      <AnimatedHeroCard
        Id="helpLab1"
        key={"1"}
        Number="1"
        Title="Drone Roof Check"
        Animations
        ImageList={airpods}
        StickyScrollLength={"200vh"}
        BGColor="#D7D667"
        Text="Checking your roof is important, but it’s also a pain, that’s why we’re introducing a service that uses drones to check your roof for you."
        ButtonLabel="Register your interest"
      />
      <AnimatedHeroCard
        Id="helpLab2"
        key={"2"}
        Number="2"
        Title="Help Nation"
        Animations
        ImageList={airpods}
        StickyScrollLength={"300vh"}
        BGColor="#F9AE97"
        Text="In response to the rise in extreme weather events, we’ve teamed up with The Australian Red Cross to run community preparedness events in at risk areas."
        ButtonLabel={
          windowSize
            ? "See an event in your area"
            : "See if we’re running an event in your area"
        }
        Link="https://articles.nrma.com.au/helpnation/"
      />
      <AnimatedHeroCard
        Id="helpLab3"
        key={"3"}
        Number="3"
        Title="Claims Tracker"
        Animations
        ImageList={airpods}
        StickyScrollLength={"400vh"}
        BGColor="#91BF9E"
        Text="We track keep you up to date with exactly what stage you claim is at. And what steps are remaining before payout. "
        ButtonLabel="Use the Claims Tracker"
        Link="https://www.nrma.com.au/claims"
      />
      <AnimatedHeroCard
        Id="helpLab4"
        key={"4"}
        Number="4"
        Title="Lifeline Certified"
        Animations
        ImageList={airpods}
        StickyScrollLength={"500vh"}
        BGColor="#D7D667"
        Text="We have had all our staff trained by Lifeline so they’re able to deal with any situation."
        ButtonLabel=""
      />
      <div id="Help_Lab">
        <AnimatedHeroCard
          Id="Help_Lab"
          key={"5"}
          Number="5"
          Title="Help Lab"
          Animations
          ImageList={airpods}
          StickyScrollLength={"600vh"}
          BGColor="#F9AE97"
          Text="A Help Company™ would want your ideas to define its future.​ Get early access to all the latest Help Products and have a say on what helpful things a Help Company™ develops next. "
          ButtonLabel="Register for interest"
          Link="https://aus-fapp02.azurewebsites.net/api/survey-renderer?phash=3d27e773-ef46-4d10-82c9-b70793857b2d_19&P=22576=1"
        />
      </div>
      <Carousel />
      {/* Disabled for testing. */}
      <PillSection />
      {!isMobile && <HelpfulTip fading={false} />}
      <Footer />
    </div>
  );
};

export default Landing;
