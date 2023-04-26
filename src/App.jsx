import { useState } from "react";
import styled from "styled-components";

import Clock from "./components/Clock/Clock";
import TimeInputField from "./components/TimeInputField/TimeInputField";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

import useClock from "./hooks/useClock";

import { renderTimeObjToString } from "./utils/renderTimeString";

import { ReactComponent as EditIcon } from "./assets/edit.svg";

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

const ClockField = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

const CheckButtonWrap = styled.div`
  display: inline-block;
  padding: 0px 10px;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CloseButton = styled(ClearIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const CheckButton = styled(CheckIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const CloseButtonWrap = styled.div`
  display: inline-block;
  padding: 0px 10px;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  gap: 6%;
  padding: 100px 0;
`;

const EditBLockWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
`;

const EditBlock = styled.div`
  width: 400px;
  height: 200px;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
`;

const EditBlockTitle = styled.div`
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const EditBlockTimeList = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
`;

const EditBlockButtonArea = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row-reverse;
  gap: 5px;
  padding: 10px 15px;
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: transparent;
  border: 10px dotted ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Calendar = styled(Circle)`
  color: ${({ theme }) => theme.colors.primary};
`;

const Years = styled.div`
  font-size: 60px;
`;

const Months = styled.div`
  font-size: 60px;
`;

const Days = styled.div`
  font-size: 60px;
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
        <Calendar>
          <Years>{years}</Years>
          <Months>{months}月</Months>
          <Days>{days}</Days>
        </Calendar>
        <ClockField>
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
        </ClockField>
      </Container>
      {isSetting && (
        <EditBLockWrap>
          <EditBlock>
            <EditBlockTitle>時間調整</EditBlockTitle>
            <EditBlockTimeList>
              <TimeInputField
                name="hours"
                value={hours}
                label="時"
                HandleChangeClockTime={HandleChangeClockTime}
                handleClockTimeAdd={handleClockTimeAdd}
                handleClockTimeReduce={handleClockTimeReduce}
              />
              <TimeInputField
                name="minutes"
                value={minutes}
                label="分"
                HandleChangeClockTime={HandleChangeClockTime}
                handleClockTimeAdd={handleClockTimeAdd}
                handleClockTimeReduce={handleClockTimeReduce}
              />
              <TimeInputField
                name="seconds"
                value={seconds}
                label="秒"
                HandleChangeClockTime={HandleChangeClockTime}
                handleClockTimeAdd={handleClockTimeAdd}
                handleClockTimeReduce={handleClockTimeReduce}
              />
            </EditBlockTimeList>
            <EditBlockButtonArea>
              <CheckButtonWrap onClick={() => handleSubmitClockTime()}>
                <CheckButton />
              </CheckButtonWrap>
              <CloseButtonWrap onClick={() => handleCloseClockEditor()}>
                <CloseButton />
              </CloseButtonWrap>
            </EditBlockButtonArea>
          </EditBlock>
        </EditBLockWrap>
      )}
    </Background>
  );
}

export default App;
