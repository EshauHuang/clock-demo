import { useState } from "react";
import styled from "styled-components";

import Calendar from "./components/Calendar/Calendar";
import EditBlock from "./components/EditBlock/EditBlock";
import ClockField from "./components/ClockField/ClockField";

import useClock from "./hooks/useClock";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  gap: 6%;
  padding: 100px 0;
`;

const initialClockTime = {
  hours: 7,
  minutes: 12,
  seconds: 0,
};

const timeLimitSetting = {
  hours: {
    max: 23,
    min: 0,
  },
  minutes: {
    max: 59,
    min: 0,
  },
  seconds: {
    max: 59,
    min: 0,
  },
};

function App() {
  const currentDate = new Date();

  const [date, setDate] = useState({
    years: currentDate.getFullYear(),
    months: currentDate.getMonth() + 1,
    days: currentDate.getDate(),
  });

  const {
    isSetting,
    clockTime,
    HandleChangeClockTime,
    handleOpenClockEditor,
    handleCloseClockEditor,
    handleSubmitClockTime,
    handleClockTimeAdd,
    handleClockTimeReduce,
  } = useClock({ initialClockTime, timeLimitSetting });

  const { years, months, days } = date;
  const { hours, minutes, seconds } = clockTime;

  const circleRadius = 100;

  const squareSide = 2 * circleRadius;

  const innerTriangleSide = circleRadius * Math.cos((30 * Math.PI) / 180) * 2;
  const innerCircleRadius =
    (innerTriangleSide * Math.tan((30 * Math.PI) / 180)) / 2;

  const secondHandLong = circleRadius * Math.sqrt(2);

  const minuteHandLong = circleRadius;

  const hourHandLong = innerCircleRadius;

  return (
    <Background>
      <Container>
        <Calendar years={years} months={months} days={days} />
        <ClockField
          clockTime={clockTime}
          squareSide={squareSide}
          innerTriangleSide={innerTriangleSide}
          innerCircleRadius={innerCircleRadius}
          secondHandLong={secondHandLong}
          minuteHandLong={minuteHandLong}
          hourHandLong={hourHandLong}
          handleOpenClockEditor={handleOpenClockEditor}
        />
      </Container>
      {isSetting && (
        <EditBlock
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          HandleChangeClockTime={HandleChangeClockTime}
          handleCloseClockEditor={handleCloseClockEditor}
          handleSubmitClockTime={handleSubmitClockTime}
          handleClockTimeAdd={handleClockTimeAdd}
          handleClockTimeReduce={handleClockTimeReduce}
        />
      )}
    </Background>
  );
}

export default App;
