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
          <div className="main text-center mb-3" style={{color: '#010C66'}}>
            <span> 
              <strong>What would A Help Company™ do?</strong>
            </span>
          </div>
          <div style={{width: '730px', margin: '48px auto', fontSize: '24px'}}>
            <Button variant='dark'>
              Simplify
            </Button>
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
  
  export default TitleMessage;
  