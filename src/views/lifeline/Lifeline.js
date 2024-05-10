import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./lifeline.css";
import Profile from "../../assets/img/profile/3D_object.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Lifeline = () => {
  return (
    <div id="about">
      <div className="about">
        <Container>
          <Row className="pb-5 align-items-center">
            <Col>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} />
              </Row>
            </Col>
            <Col>
              <h1 className="pt-3 text-left pb-4">
                Lifeline
              </h1>
              <div classname="w-570 text-base">
                  We’re having all of our staff trained by Lifeline so that they know how to talk to people who’ve lost everything.  
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Lifeline;