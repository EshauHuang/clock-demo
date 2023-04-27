import styled from "styled-components";
import PropTypes from "prop-types";

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

const Container = styled(Circle)`
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

const Calendar = ({ years, months, days }) => {
  return (
    <Container>
      <Years>{years}</Years>
      <Months>{months}月</Months>
      <Days>{days}</Days>
    </Container>
  );
};

export default Calendar;

Calendar.propTypes = {
  years: PropTypes.number.isRequired,
  months: PropTypes.number.isRequired,
  days: PropTypes.number.isRequired,
};
