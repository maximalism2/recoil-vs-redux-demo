import styled from "@emotion/styled";
import { PendingIndicator } from "./PendingIndicator";

const StyledContentWrapper = styled.div`
  position: relative;
  pointer-events: ${({ syncPending }) => (syncPending ? "none" : "initial")};
  opacity: ${({ syncPending }) => (syncPending ? "0.5" : "1")};
`;

export const ContentWrapper = ({ children, syncPending }) => (
  <StyledContentWrapper syncPending={syncPending}>
    {syncPending && <PendingIndicator />}
    {children}
  </StyledContentWrapper>
);
