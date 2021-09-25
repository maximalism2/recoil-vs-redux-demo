import styled from "@emotion/styled";
import formatDate from "date-fns/format";
import { START_DATE_FORMAT } from "../consts";
import { EventStatus } from "./EventStatus";

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Link = styled.a`
  display: block;
  transition: 0.1s;
  padding: 0.7em 0.5em;
  border-bottom: 1px solid #aaa;
  color: inherit;
  text-decoration: none;

  &:hover {
    background: #fafafa;
  }
`;

const BetTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const StartTime = styled.span`
  font-size: 0.8em;
  color: #aaa;
`;

const CreateButton = styled.button`
  border: none;
  background: 0;
  color: #aaa;
  width: 100%;
  padding: 0.7em 0.5em;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #333333;
  }

  &::before {
    content: "+";
    font-size: 2em;
    margin-right: 0.4em;
    opacity: 0.6;
    height: 1em;
    line-height: 0.9em;
  }
`;

export const EventsList = ({ bets, onEventClick, onCreateClick }) => (
  <List>
    {bets.map((bet) => (
      <ListItem key={bet.id}>
        <Link href="#" onClick={() => onEventClick(bet)}>
          <BetTitle>{bet.title}</BetTitle>
          <EventStatus status={bet.status} />
          <StartTime>{formatDate(bet.startDate, START_DATE_FORMAT)}</StartTime>
        </Link>
      </ListItem>
    ))}
    <ListItem>
      <CreateButton type="button" onClick={onCreateClick}>
        Add new event
      </CreateButton>
    </ListItem>
  </List>
);
