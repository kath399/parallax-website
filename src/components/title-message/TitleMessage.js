import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: black;
    
    font-weight: 100;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            <span> 
              <strong>NRMA Insurance 
              <br />
              is now A Help Company™.</strong>
              </span>
          </div>
          <div style={{width: '730px', margin: '48px auto', fontSize: '24px'}}>
            <Typewriter
              options={{
                strings: ["Why? Well because everyone could use a bit more help. Help making the opaque world of insurance simpler. Help dealing with the rise in extreme weather events. Help doing all those important buy annoying jobs, like checking your roof or cleaning your gutters. More help with everything. Even navigating this website. If you’re in a rush and just want the highlights hit the simplify button. "],
                autoStart: true,
                loop: false,
                delay: 50
              }}
            />
            <Button variant='dark'>
              Simplify
            </Button>
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
  
  export default TitleMessage;
  