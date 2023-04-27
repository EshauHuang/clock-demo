import PropTypes from "prop-types";

import {
  Container,
  StyledSquare,
  ClockItems,
  OuterCircle,
  OuterTriangle,
  OuterCircleWrap,
  TimeMark,
  TriangleWrap,
  InnerTriangle,
  InnerCircleWrap,
  InnerCircle,
  SecondHand,
  MinuteHand,
  HourHand,
} from "./Clock.style";

const Clock = ({
  squareSide,
  innerTriangleSide,
  innerCircleRadius,
  secondHandLong,
  minuteHandLong,
  hourHandLong,
}) => {
  const timeMarkArray = Array.from({ length: 60 }, (_, i) => i * 6);

  return (
    <Container>
      <StyledSquare className="square" side={squareSide} />
      <ClockItems>
        <OuterCircleWrap>
          <OuterCircle></OuterCircle>
          {timeMarkArray.map((deg, i) => (
            <TimeMark key={i} deg={deg} />
          ))}
        </OuterCircleWrap>
        <TriangleWrap className="triangle">
          <OuterTriangle side={innerTriangleSide} />
          <InnerTriangle side={innerTriangleSide - 8} />
        </TriangleWrap>
        <InnerCircleWrap>
          <InnerCircle
            className="innerCircle"
            radius={innerCircleRadius}
          ></InnerCircle>
        </InnerCircleWrap>
        <SecondHand className="second" long={secondHandLong} />
        <MinuteHand className="minute" long={minuteHandLong} />
        <HourHand className="hour" long={hourHandLong} />
      </ClockItems>
    </Container>
  );
};

Clock.propTypes = {
  squareSide: PropTypes.number,
  innerTriangleSide: PropTypes.number,
  innerCircleRadius: PropTypes.number,
  secondHandLong: PropTypes.number,
  minuteHandLong: PropTypes.number,
  hourHandLong: PropTypes.number,
};

export default Clock;
