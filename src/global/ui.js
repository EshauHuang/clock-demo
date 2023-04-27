import styled from "styled-components";

export const Circle = styled.div`
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

export const Triangle = styled.div`

  --side: ${({ side }) => side}px;
  --border-bottom: calc(0.8660254037844386 * var(--side));

  border-bottom-style: solid;
  border-bottom-width: var(--border-bottom);
  border-bottom-color: black;
  border-left: calc(var(--side) / 2) solid transparent;
  border-right: calc(var(--side) / 2) solid transparent;
  border-top: 0;
  height: 0;
  width: 0;
  transform: translateY(
    calc(-1 * 0.28867513459481287 * var(--border-bottom) * 0.5 - 3px)
  );
`;

export const Square = styled.div`
  --rotate: 0deg;

  position: relative;
  ${({ side }) =>
    side &&
    `
    width: ${side}px;
    height: ${side}px;
  `}
  border-style: solid;
  border-width: 1px;
  border-color: black;
  border-radius: 8px;
  transform-origin: center;
  transform: rotate(var(--rotate));
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
