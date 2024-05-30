import React from "react";
import Fade from "react-reveal/Fade";

import "./helpfulBreak.css";
import Leaves from "../../components/leaves/Leaves";
import FadingLeaves from "../../components/leaves/FadingLeaves";
import { isMobile, MobileView } from 'react-device-detect';

const HelpfulBreak = () => {


  const leafSetting = {
    maxLeaves : 200,
    blowerIntensity: 1000,
    blowerRange: 200,
  };

  return (
    <div className="helpfulBreak"> 

      <Fade down duration={2000}>
      </Fade>
      <Fade up duration={2000}>
        <div>
          A helpful break
          <div style={{paddingTop: '36px', width:'800px', fontSize: '24px', textAlign: 'center'}}>
            Reduce your fire risk by clearing up any dry leaves and debris around your home and in your gutters. 
          </div>
        </div>
      </Fade>
          {!isMobile && <Leaves {...leafSetting}></Leaves>}

    </div>
  );
};

export default HelpfulBreak;