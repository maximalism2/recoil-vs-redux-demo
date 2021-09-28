import { useState } from "react";
import styled from "@emotion/styled";
import { EventView } from "./EventView";
import { generateEmptyEvent } from "../utils";

const SaveButton = styled.button`
  font-size: 1.3em;
  margin-top: 1em;
  border-radius: 0.1em;
  background: rgb(44, 125, 91);
  color: white;
  border: none;
  padding: 0.5em 0.7em;
  cursor: pointer;
  transition: 0.2s;

  &:hover,
  &:focus {
    box-shadow: 0 2px 5px rgba(30, 84, 61, 0.5);
  }

  &:active {
    box-shadow: inset 0 2px 5px rgba(30, 84, 61, 0.5);
  }
`;

const Title = styled.h1`
  margin-top: 0;
`;

export function CreateEventView({ saveNewEvent }) {
  const [newEvent, setNewEvent] = useState(generateEmptyEvent);

  return (
    <>
      <Title>Create new event</Title>
      <EventView
        event={newEvent}
        updateEvent={(slice) =>
          setNewEvent((event) => ({ ...event, ...slice }))
        }
      />
      <SaveButton onClick={() => saveNewEvent(newEvent)}>Save event</SaveButton>
    </>
  );
}
