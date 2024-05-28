import React from "react";
import Fade from "react-reveal/Fade";
import LeafBottom from "../../assets/img/LeafBottom.png";
import LeafLeft from "../../assets/img/LeafLeft.png";
import LeafRight from "../../assets/img/LeafRight.png";
import LeafTop from "../../assets/img/LeafTop.png";
import "./helpfulBreak.css";
import Leaves from "../../components/leaves/Leaves";
import { isMobile, MobileView } from 'react-device-detect';

const HelpfulBreak = () => {


  const leafSetting = {
    maxLeaves : 40,
    blowerIntensity: 1000,
  };

  return (
    <div className="helpfulBreak"> 
      <Fade down duration={2000}>
        {/* <img src={LeafTop} alt='' className="leafTopImg"/>
        <img src={LeafLeft} alt='' className="leafLeftImg"/>
        <img src={LeafRight} alt='' className="leafRightImg"/>
        <img src={LeafBottom} alt='' className="leafBottomImg"/> */}
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