import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./droneRoofCheck.css";
import Profile from "../../assets/img/profile/3D_object.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const DroneRoofCheck = () => {
  return (
    <div id="about">
      <div className="about">
        <Container>
          <Row className="pb-5 align-items-center">
            <Col>
              <h1 className="pt-3 text-left pb-4">
                Drone Roof Check
              </h1>
              <div classname="w-570 text-base">
                Checking your roof is important, but it’s also a pain, that’s why we’re introducing a service that uses drones to check your roof for you. 
              </div>
              <div style={{marginTop: '48px'}}>
                <Button className="m-2" variant="dark">
                  Register your interest
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

export default DroneRoofCheck;