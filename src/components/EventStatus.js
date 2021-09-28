import styled from "@emotion/styled";
import { EEventStatus } from "../consts";

const betStatusMap = {
  [EEventStatus.Active]: "A",
  [EEventStatus.Suspended]: "S",
};

const StyledEventStatus = styled.span`
  border-radius: 0.2em;
  color: #fff;
  width: 1.1em;
  height: 1.1em;
  font-size: 0.9em;
  line-height: 1em;
  display: inline-block;
  text-align: center;
  margin-right: 0.5em;
  padding: 0;

  ${({ as }) =>
    as === "button" &&
    `
    cursor: pointer;
  `}

  ${({ status }) => {
    const color = status === EEventStatus.Active ? "#88bb88" : "#bb8888";
    return `
        background: ${color};
        border: 1px solid ${color};
    `;
  }}
`;

export const EventStatus = ({ status, onClick }) => (
  <StyledEventStatus
    as={typeof onClick === "function" ? "button" : "span"}
    status={status}
    onClick={onClick}
  >
    {betStatusMap[status]}
  </StyledEventStatus>
);
