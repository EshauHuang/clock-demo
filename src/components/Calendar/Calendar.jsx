import PropTypes from "prop-types";

import { Container, Years, Months, Days } from "./Calendar.style";

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
