import PropTypes from "prop-types";

import { renderTimeObjToString } from "../../utils/renderTimeString";

import { Container, ClockEdit, EditButton, TimeShow } from "./ClockField.style";

import Clock from "../Clock/Clock";

const ClockField = ({
  clockTime,
  squareSide,
  innerTriangleSide,
  innerCircleRadius,
  secondHandLong,
  minuteHandLong,
  hourHandLong,
  handleOpenClockEditor,
}) => {
  return (
    <Container>
      <Clock
        squareSide={squareSide}
        innerTriangleSide={innerTriangleSide}
        innerCircleRadius={innerCircleRadius}
        secondHandLong={secondHandLong}
        minuteHandLong={minuteHandLong}
        hourHandLong={hourHandLong}
        handleOpenClockEditor={handleOpenClockEditor}
      />
      <ClockEdit onClick={() => handleOpenClockEditor()}>
        <EditButton />
      </ClockEdit>
      <TimeShow>{renderTimeObjToString(clockTime)}</TimeShow>
    </Container>
  );
};

ClockField.propTypes = {
  clockTime: PropTypes.shape({
    seconds: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
  }),
  squareSide: PropTypes.number.isRequired,
  innerTriangleSide: PropTypes.number.isRequired,
  innerCircleRadius: PropTypes.number.isRequired,
  secondHandLong: PropTypes.number.isRequired,
  minuteHandLong: PropTypes.number.isRequired,
  hourHandLong: PropTypes.number.isRequired,
  handleOpenClockEditor: PropTypes.func.isRequired,
};

export default ClockField;
