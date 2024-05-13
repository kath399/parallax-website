import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import CustomCarousel from "./components/carousel/Carousal";
import TitleMessage from "./components/title-message/TitleMessage";
import About from "./views/about/About";
import DroneRoofCheck from "./views/droneRoofCheck/DroneRoofCheck";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Skills from "./views/skills/Skills";
import Blog from "./views/blog-section/BlogSection";
import Projects from "./views/projects/projects";
import Contact from "./views/contact/Contact";
import Footer from "./components/footer/Footer";
import FullpageWrapper from "./components/fullpage-wrapper/FullpageWrapper";
import Arrow from "./assets/icons/Arrow3.png"
function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{height: '100vh'}}>
      <TitleMessage />
      </div>
      <div>
        <div>
          <Container className="container-box rounded">
            <Fade right duration={2000}>
              <Skills />
            </Fade>
          </Container>
        </div>

        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={1000}>
              <hr />
              <Projects />
            </Slide>
          </Container>
        </div>

        <div>
          <Container className="container-box rounded">
            <Slide left duration={2000}>
              <hr />
              <Blog />
            </Slide>
          </Container>
        </div>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade bottom duration={2000}>
            <hr />
            <Contact />
          </Fade>
        </Container>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
