import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Carousel from "./views/carousel/Carousel";
import TitleMessage from "./components/title-message/TitleMessage";
import About from "./views/about/About";
import DroneRoofCheck from "./views/droneRoofCheck/DroneRoofCheck";
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

import Form from "./views/form/Form";


function App() {
  const section1Ref = useRef(null);
  const scrollDown = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth' // For smooth scrolling
    });
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
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
              {/* <DroneRoofCheck />
              <HelpNation />
              <PolicyRecap />
              <LifelineCertified />

              <div>
                <Container className="container-box rounded">
                  <Slide left duration={2000}>
                    <hr />
                    <Carousel />
                  </Slide>
                </Container>
              </div> */}
      


              <Skills />

              <HelpfulBreak fading = {false} />

              <div>
                  <Fade bottom duration={2000}>
                    <hr />
                    <Contact />
                  </Fade>
              </div>
              <hr />
              <Footer />
            </>
          }/>
          <Route path="/form" element={<Form Title={'Drone Roof Check'}/>} />
         </Routes>
      </div>
    </Router>
  );
}

export default App;