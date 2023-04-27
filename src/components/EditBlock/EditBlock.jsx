import styled from "styled-components";
import PropTypes from "prop-types";

import TimeInputField from "../../components/TimeInputField/TimeInputField";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

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

const Body = styled.div`
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

const EditBlock = ({
  hours,
  minutes,
  seconds,
  HandleChangeClockTime,
  handleCloseClockEditor,
  handleSubmitClockTime,
  handleClockTimeAdd,
  handleClockTimeReduce,
}) => {
  return (
    <EditBLockWrap>
      <Body>
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
      </Body>
    </EditBLockWrap>
  );
};

export default EditBlock;

EditBlock.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  HandleChangeClockTime: PropTypes.func.isRequired,
  handleClockTimeAdd: PropTypes.func.isRequired,
  handleClockTimeReduce: PropTypes.func.isRequired,
  handleCloseClockEditor: PropTypes.func.isRequired,
  handleSubmitClockTime: PropTypes.func.isRequired,
};

