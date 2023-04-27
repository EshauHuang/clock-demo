import styled from "styled-components";
import PropTypes from "prop-types";

const TimeInput = styled.input`
  height: 50px;
  width: 50px;
  padding: 0 6px 0 8px;
  font-size: 28px;
  line-height: 20px;
  border: 0;
  outline: 0;
  background-color: transparent;
  text-align: center;
  color: rgba(78, 7, 7, 1);

  &:focus {
    border: 0;
  }
`;

const TimeLabel = styled.label`
  color: rgba(78, 7, 7, 1);
  margin-left: 6px;
`;

const BodyWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Body = styled.div`
  display: inline-flex;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 6px;
  padding-right: 10px;
`;

const UpButton = styled.div`
  position: relative;

  --side: 14px;
  --border-bottom: calc(0.8660254037844386 * var(--side));
  border-bottom: var(--border-bottom) solid rgba(78, 7, 7, 1);
  border-left: calc(var(--side) / 2) solid transparent;
  border-right: calc(var(--side) / 2) solid transparent;
  border-top: 0;
  height: 0;
  width: 0;
  cursor: pointer;
`;

const DownButton = styled.div`
  position: relative;

  --side: 14px;
  --border-bottom: calc(0.8660254037844386 * var(--side));
  border-bottom: var(--border-bottom) solid rgba(78, 7, 7, 1);
  border-left: calc(var(--side) / 2) solid transparent;
  border-right: calc(var(--side) / 2) solid transparent;
  border-top: 0;
  height: 0;
  width: 0;
  cursor: pointer;
  rotate: -180deg;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const TimeInputField = ({
  name,
  value,
  label,
  HandleChangeClockTime,
  handleClockTimeAdd,
  handleClockTimeReduce,
}) => {

  return (
    <BodyWrap>
      <Body>
        <TimeInput
          value={value}
          name={name}
          onChange={(e) => HandleChangeClockTime(e)}
        ></TimeInput>
        <ButtonArea>
          <UpButton onClick={() => handleClockTimeAdd(name)} />
          <DownButton onClick={() => handleClockTimeReduce(name)} />
        </ButtonArea>
      </Body>
      <TimeLabel>{label}</TimeLabel>
    </BodyWrap>
  );
};

TimeInputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string,
  HandleChangeClockTime: PropTypes.func.isRequired,
  handleClockTimeAdd: PropTypes.func.isRequired,
  handleClockTimeReduce: PropTypes.func.isRequired,
};

export default TimeInputField;
