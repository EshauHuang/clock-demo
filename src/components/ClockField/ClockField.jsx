import styled from "styled-components";
import PropTypes from "prop-types";

import { renderTimeObjToString } from "../../utils/renderTimeString";

import { ReactComponent as EditIcon } from "../../assets/edit.svg";

import Clock from "../Clock/Clock";

const EditButton = styled(EditIcon)`
  width: 100%;
  height: 100%;
  path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const ClockEdit = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const TimeShow = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

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
  clockTime: PropTypes.objectOf({
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
