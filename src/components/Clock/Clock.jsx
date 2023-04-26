import styled from "styled-components";
import PropTypes from "prop-types";

const ClockWrap = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`;

const Body = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClockItems = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:after {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Square = styled.div`
  --rotate: 0deg;

  position: relative;
  ${({ side }) =>
    side &&
    `
    width: ${side}px;
    height: ${side}px;
  `}
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  transform-origin: center;
  transform: rotate(var(--rotate));
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const TriangleWrap = styled.div`
  --rotate: 0deg;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(var(--rotate));
`;

const OuterTriangle = styled.div`
  position: absolute;

  --side: ${({ side }) => side}px;
  --border-bottom: calc(0.8660254037844386 * var(--side));
  border-bottom: var(--border-bottom) solid
    ${({ theme }) => theme.colors.primary};
  border-left: calc(var(--side) / 2) solid transparent;
  border-right: calc(var(--side) / 2) solid transparent;
  border-top: 0;
  height: 0;
  width: 0;
  transform: translateY(
    calc(-1 * 0.28867513459481287 * var(--border-bottom) * 0.5 - 4px)
  );
`;

const InnerTriangle = styled.div`
  position: absolute;

  --side: ${({ side }) => side - 8}px;
  --border-bottom: calc(0.8660254037844386 * var(--side));
  border-bottom: var(--border-bottom) solid ${({ theme }) => theme.colors.bg};
  border-left: calc(var(--side) / 2) solid transparent;
  border-right: calc(var(--side) / 2) solid transparent;
  border-top: 0;
  height: 0;
  width: 0;
  transform: translateY(
    calc(-1 * 0.28867513459481287 * var(--border-bottom) * 0.5 - 4px)
  );
`;

const OuterCircleWrap = styled.div`
  position: relative;
`;

const OuterCircle = styled(Circle)`
  width: 200px;
  height: 200px;
`;

const TimeMark = styled.div`
  position: absolute;
  top: 0;
  width: 2px;
  height: 100px;
  background: transparent;
  left: 50%;
  transform-origin: bottom;
  transform: ${({ deg }) => `translateX(-50%) rotate(${deg}deg)`};

  &::before {
    position: absolute;
    content: "";
    width: 2px;
    height: 5px;
    background: ${({ theme }) => theme.colors.primary};
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &:nth-child(5n - 3)::before {
    height: 8px;
    width: 4px;
  }
`;

const InnerCircleWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
`;

const InnerCircle = styled(Circle)`
  --rotate: 0deg;

  transform: rotate(var(--rotate));

  ${({ radius }) =>
    radius &&
    `
    width: ${radius * 2}px;
    height: ${radius * 2}px;
  `}
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const SecondHand = styled.div`
  --rotate: 0deg;

  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: bottom;

  transform: translate(-50%, -100%) rotate(var(--rotate));
  width: 5px;
  height: ${({ long }) => long && long - 3}px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-top: 0;
`;

const MinuteHand = styled.div`
  --rotate: 0deg;

  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: bottom;

  transform: translate(-50%, -100%) rotate(var(--rotate));
  width: 5px;
  height: ${({ long }) => long && long + 0.5}px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-top: 0;
`;

const HourHand = styled.div`
  --rotate: 0deg;

  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: bottom;

  transform: translate(-50%, -100%) rotate(var(--rotate)) scale(0.9);
  width: 5px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-top: 0;
`;

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
    <ClockWrap>
      <Body>
        <Square className="square" side={squareSide} />
        <ClockItems>
          <OuterCircleWrap>
            <OuterCircle></OuterCircle>
            {timeMarkArray.map((deg, i) => (
              <TimeMark key={i} deg={deg} />
            ))}
          </OuterCircleWrap>
          <TriangleWrap className="triangle">
            <OuterTriangle side={innerTriangleSide} />
            <InnerTriangle side={innerTriangleSide} />
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
      </Body>
    </ClockWrap>
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
