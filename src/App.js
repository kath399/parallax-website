import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Carousel from "./views/carousel/Carousel";
import TitleMessage from "./components/title-message/TitleMessage";
import About from "./views/about/About";
import DroneRoofCheck from "./views/droneRoofCheck/DroneRoofCheck";
import Form from "./views/form/Form";
import HelpNation from "./views/helpNation/HelpNation";
import PolicyRecap from "./views/policyRecap/PolicyRecap";
import LifelineCertified from "./views/lifelineCertified/LifelineCertified";
import HelpfulBreak from "./views/helpfulBreak/HelpfulBreak";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";

import Skills from "./views/skills/Skills";
import Blog from "./views/carousel/Carousel";
import Projects from "./views/projects/projects";

import Contact from "./views/contact/Contact";
import Footer from "./components/footer/Footer";
import FullpageWrapper from "./components/fullpage-wrapper/FullpageWrapper";
import ChevronDown from "./assets/icons/Chevron_down.svg";


function App() {
  const section1Ref = useRef(null);
  const scrollDown = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth' // For smooth scrolling
    });
  };

  return (
    <div className="App">
      <NavBar />
      <div className="titleMessage"> 
        <Fade up duration={2000}>
          <div>
            What would A Help Company™ do?
          </div>
        </Fade>
        <button className="iconbutton" onClick={() => scrollDown(section1Ref)}>
        </button>
      </div>
      <div ref={section1Ref} className="launchMessage">
        <Fade right duration={2000}>
          <div>
            It would launch four helpful
            <br/>
            tools and services.
          </div>
        </Fade>
      </div>
      <DroneRoofCheck />
      <HelpNation />
      <PolicyRecap />
      <LifelineCertified />
      
      <div>
        <DroneRoofCheck />
        <HelpNation />
        <PolicyRecap />
        <LifelineCertified />
        <Blog />
        <Skills />
        <HelpfulBreak />


        <div>
          <Container className="container-box rounded">
            <Fade bottom duration={2000}>
              <Contact />
            </Fade>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
