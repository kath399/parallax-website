import React, { useRef } from "react";
import "./Landing.css";
import NavBar from "../../components/navBar/NavBar";
import Carousel from "../carousel/Carousel";
import HelpfulBreak from "../helpfulBreak/HelpfulBreak";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import Footer from "../../components/footer/Footer";
import HeroCard from "../../components/hero-card/HeroCard";

import Drone from "../../assets/img/Drone.svg";
import CloudBR from "../../assets/img/CloudBR.svg";
import CloudTL from "../../assets/img/CloudTL.svg";
import CloudTR from "../../assets/img/CloudTR.svg"
import TeacupSpoon from "../../assets/img/TeacupSpoon.svg"

import ChevronDown from "../../assets/icons/Chevron_down.svg";

const Landing = () => {
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
          <img src={ChevronDown} alt='Go down'/>
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

      <HeroCard 
        Id='droneRoofCheck' 
        Number='1'
        Title='Drone Roof Check' 
        Animations={
          <Fade down duration={2000}>
            <img id='droneImg' src={Drone} alt='Drone' className='droneImg'/>
          </Fade>
        }
        BGColor='#E0DF6B'
        Text='Checking your roof is important, but it’s also a pain, that’s why we’re introducing a service that uses drones to check your roof for you.'
        ButtonLabel='Register your interest'
      />

      <HeroCard 
        Id='helpNation' 
        Number='2'
        Title='Help Nation' 
        Animations={
          <Fade duration={2000}>
            <img src={CloudTL} alt='Cloud' className='helpImgTL' />
            <img src={CloudTR} alt='Cloud' className='helpImgTR' />
            <img src={CloudBR} alt='Cloud' className='helpImgBR' />
          </Fade>
        }
        BGColor='#F9AE97'
        Text='In response to the rise in extreme weather events, we’ve teamed up with The Australian Red Cross to run community preparedness events in at risk areas.'
        ButtonLabel='Find an event in your area'
      />

      <HeroCard 
        Id='policyRecap' 
        Number='3'
        Title='Policy Recap' 
        Animations
        BGColor='#91BF9E'
        Text='You shouldn’t need legal training to understand what you are and are not covered for. Which is why we created the Policy Translator. A useful tool that scans your PDS document and turns it into a fast, easy to read experience that makes everything important in your policy obvious and unmissable.'
        ButtonLabel='Find an event in your area'
      />

      <HeroCard 
        Id='lifelineCertified' 
        Number='4'
        Title='Lifeline Certified' 
        Animations={
          <Fade down duration={2000}>
            <img src={TeacupSpoon} alt='Lifeline Certified' className='lifelineImg'/>
          </Fade>
        }
        BGColor='#E0DF6B'
        Text='Checking your roof is important, but it’s also a pain, that’s why we’re introducing a service that uses drones to check your roof for you.'
        ButtonLabel='Register your interest'
      />

      <div>
        <Container className="container-box rounded">
          <Slide left duration={2000}>
            <hr />
            <Carousel />
          </Slide>
        </Container>
      </div>

      <Skills />

      <HelpfulBreak />

      <div>
        <Fade bottom duration={2000}>
          <hr />
          <Contact />
        </Fade>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default Landing;