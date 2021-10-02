import styled from "@emotion/styled";

import { keyframes } from "@emotion/css";

const blinking = keyframes`
  from {
    opacity: .2;
  }
  to {
    opacity: 1;
  }
`;

const StyledPendingIndicator = styled.span`
  position: absolute;
  top: -1em;
  color: #ff1800;
  left: 0;

  animation: ${blinking} 0.5s linear infinite alternate;
`;

export const PendingIndicator = () => (
  <StyledPendingIndicator>Sync pending...</StyledPendingIndicator>
);
