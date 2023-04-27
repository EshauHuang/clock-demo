import styled from "styled-components";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";

export const EditButton = styled(EditIcon)`
  width: 100%;
  height: 100%;
  path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const ClockEdit = styled.div`
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

export const TimeShow = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
