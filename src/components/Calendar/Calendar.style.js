import styled from "styled-components";

import { Circle } from "../../global/ui";

export const Container = styled(Circle)`
  color: ${({ theme }) => theme.colors.primary};
  border: 10px dotted ${({ theme }) => theme.colors.primary};
`;

export const Years = styled.div`
  font-size: 60px;
`;

export const Months = styled.div`
  font-size: 60px;
`;

export const Days = styled.div`
  font-size: 60px;
`;
