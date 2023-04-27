import styled from "styled-components";

import { Circle } from "../../global/ui";
import { Triangle } from "../../global/ui";
import { Square } from "../../global/ui";

export const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClockItems = styled.div`
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

export const StyledSquare = styled(Square)`
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const TriangleWrap = styled.div`
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

export const OuterTriangle = styled(Triangle)`
  position: absolute;

  border-bottom-color: ${({ theme }) => theme.colors.primary};
`;

export const InnerTriangle = styled(Triangle)`
  position: absolute;

  border-bottom-color: ${({ theme }) => theme.colors.bg};
`;

export const OuterCircleWrap = styled.div`
  position: relative;
`;

export const OuterCircle = styled(Circle)`
  width: 200px;
  height: 200px;
`;

export const TimeMark = styled.div`
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

export const InnerCircleWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
`;

export const InnerCircle = styled(Circle)`
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

export const SecondHand = styled.div`
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

export const MinuteHand = styled.div`
  --rotate: 0deg;

  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: bottom;

  transform: translate(-50%, -100%) rotate(var(--rotate));
  width: 5px;
  height: ${({ long }) => long && long - 1}px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-top: 0;
`;

export const HourHand = styled.div`
  --rotate: 0deg;

  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: bottom;

  transform: translate(-50%, -100%) rotate(var(--rotate)) scale(0.9);
  width: 5px;
  height: ${({ long }) => long && long}px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-top: 0;
`;
