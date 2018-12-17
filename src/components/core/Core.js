import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Body from '../body/Body';
import Visualizer from '../controls/visualizer/Visualizer';
// this is our sub main component
// it renders the body and all the part containing
// the dynamic informations of our application
export const Core = ({
  dayCount,
  isStarted,
  ovulation,
  ovulationActive,
  preOvulationActive,
  postOvulationActive,
  reloadPage,
  handleOvulation,
  handlePostOvulation,
  handlePreOvulation,
  handleStart,
  handleStop,
  postOvulation,
  preOvulation,
  secreteLhFsh,
  secreteOestro,
  secreteProgest,
  t,
}) => (
  <div className="core-container">
    <Row>
      <Col sm="8">
        <Body />
      </Col>
      <Col sm="4">
        <Visualizer
          dayCount={dayCount}
          isStarted={isStarted}
          handleOvulation={handleOvulation}
          handlePostOvulation={handlePostOvulation}
          handlePreOvulation={handlePreOvulation}
          reloadPage={reloadPage}
          handleStart={handleStart}
          handleStop={handleStop}
          ovulation={ovulation}
          ovulationActive={ovulationActive}
          preOvulationActive={preOvulationActive}
          postOvulationActive={postOvulationActive}
          postOvulation={postOvulation}
          preOvulation={preOvulation}
          secreteLhFsh={secreteLhFsh}
          secreteOestro={secreteOestro}
          secreteProgest={secreteProgest}
          t={t}
        />
      </Col>
    </Row>
  </div>
);

Core.propTypes = {
  dayCount: PropTypes.number.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  handleOvulation: PropTypes.func.isRequired,
  handlePostOvulation: PropTypes.func.isRequired,
  handlePreOvulation: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  reloadPage: PropTypes.func.isRequired,
  isStarted: PropTypes.bool.isRequired,
  ovulation: PropTypes.bool.isRequired,
  ovulationActive: PropTypes.bool.isRequired,
  postOvulationActive: PropTypes.bool.isRequired,
  preOvulationActive: PropTypes.bool.isRequired,
  postOvulation: PropTypes.bool.isRequired,
  preOvulation: PropTypes.bool.isRequired,
  secreteLhFsh: PropTypes.bool.isRequired,
  secreteOestro: PropTypes.bool.isRequired,
  secreteProgest: PropTypes.bool.isRequired,
};
export default (Core);
