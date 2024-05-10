import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./helpNation.css";
import Profile from "../../assets/img/profile/3D_object.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const HelpNation = () => {
  return (
    <div id="about">
      <div className="about">
        <Container>
          <Row className="pb-5 align-items-center">
            <Col>
              <h1 className="pt-3 text-left pb-4">
                Help Nation
              </h1>
              <div classname="w-570 text-base">
                In response to the rise in extreme weather events, we’ve teamed up with The Australian Red Cross to run community preparedness events in at risk areas.  
              </div>
              <div style={{marginTop: '48px'}}>
                <Button className="m-2" variant="dark">
                  Find an event in your area
                </Button>
              </div>
            </Col>
            <Col>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HelpNation;