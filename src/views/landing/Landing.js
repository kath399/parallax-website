import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

import "./Landing.css";
import "../../assets/styles/nrma-scheme.css";
import NavBar from "../../components/navBar/NavBar";
import HeroCard from "../../components/hero-card/HeroCard";
import Carousel from "../carousel/Carousel";
import PillSection from "../pillSection/PillSection";
import HelpfulTip from "../helpfulTip/HelpfulTip";
import Footer from "../../components/footer/Footer";
import Fade from "react-awesome-reveal";
import Intro from "../intro/Intro";

import Drone from "../../assets/img/Drone.svg";
import CloudBR from "../../assets/img/CloudBR.svg";
import CloudTL from "../../assets/img/CloudTL.svg";
import CloudTR from "../../assets/img/CloudTR.svg";
import TeacupSpoon from "../../assets/img/TeacupSpoon.svg";

const Landing = () => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/form");
  };

  return (
    <div className="App">
      <NavBar />

      <Intro />

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
        ButtonLabel="Find an event in your area"
      />

      <HeroCard
        Id="policyRecap"
        Number="3"
        Title="Policy Recap"
        Animations
        BGColor="#91BF9E"
        Text="You shouldn’t need legal training to understand what you are and are not covered for. Which is why we created the Policy Translator. A useful tool that scans your PDS document and turns it into a fast, easy to read experience that makes everything important in your policy obvious and unmissable."
        ButtonLabel="Find an event in your area"
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
      />

      <HeroCard
        Id="helpLab"
        Number="5"
        Title="Help Lab"
        Animations
        BGColor="#F9AE97"
        Text="A Help Company™ would want your ideas to define its future.​ Get early access to all the latest Help Products and have a say on what helpful things a Help Company™ develops next."
        ButtonLabel="Find an event in your area"
      />

      <Carousel />

      <PillSection />

      {!isMobile && <HelpfulTip fading={false} />}

      <Footer />
    </div>
  );
};

export default Landing;
