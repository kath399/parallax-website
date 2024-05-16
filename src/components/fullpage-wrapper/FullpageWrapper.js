import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Fade from "react-reveal/Fade";
import DroneRoofCheck from '../../views/droneRoofCheck/DroneRoofCheck';
import HelpNation from '../../views/helpNation/HelpNation';
import LifelineCertified from '../../views/lifelineCertified/LifelineCertified';
import Lifeline2 from '../../views/lineline2/Lineline2';

const FullpageWrapper = () => {
  return (
    <ReactFullpage
      // Navigation
      navigation
      navigationTooltips={['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5']}

      // Sections
      sectionsColor={['#d3d3d3', '#d3d3d3', '#d3d3d3', '#d3d3d3', '#d3d3d3']}

      // Anchors
      anchors={['section1', 'section2', 'section3', 'section4', 'section5']}

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Fade left duration={2000}>
                <DroneRoofCheck />
              </Fade>
            </div>
            <div className="section">
              <Fade left duration={2000}>
                <HelpNation />
              </Fade>
            </div>
            <div className="section">
              <Fade right duration={2000}>
                <LifelineCertified />
              </Fade>
            </div>
            <div className="section">
              <Fade right duration={2000}>
                <Lifeline2 />
              </Fade>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default FullpageWrapper;
