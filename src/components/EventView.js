import format from "date-fns/format";
import styled from "@emotion/styled";

import { EventStatus } from "./EventStatus";
import { Field } from "./Field";
import { toggleStatus } from "../utils";
import { INPUT_DATE_FORMAT } from "../consts";

const TitleInput = styled.input`
  font-size: 1.75em;
  border: 1px solid transparent;
  background: none;
  transition: 0.1s;
  display: block;
  padding: 0.25em;
  margin: 0 0 0.5em -0.25em;
  border-radius: 0.1em;

  &:hover,
  &:focus,
  &:placeholder-shown {
    border-color: #aaa;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.12);
  }
`;

const RemoveButton = styled.button`
  border: 1px solid #dd1818;
  color: #dd1818;
  border-radius: 0.2em;
  padding: 0.5em;
  background: transparent;
  cursor: pointer;
  opacity: 0.5;
  margin-top: 2em;
  transition: 0.15s;

  &:hover,
  &:focus {
    opacity: 1;
    box-shadow: 0 2px 5px #dd181833;
  }

  &:active {
    box-shadow: inset 0 2px 5px #dd181833;
  }
`;

export const EventView = ({ event, updateEvent, removeEvent }) => (
  <div>
    <TitleInput
      type="text"
      required
      placeholder="FC Karpaty vs FC Chelsea"
      value={event.title}
      onChange={(e) => updateEvent({ title: e.currentTarget.value })}
    />

    <Field label="Status">
      <EventStatus
        status={event.status}
        onClick={() => updateEvent({ status: toggleStatus(event.status) })}
      />
    </Field>

    <Field label="Start date">
      <input
        type="date"
        value={format(event.startDate, INPUT_DATE_FORMAT)}
        onChange={(e) =>
          updateEvent({ startDate: e.currentTarget.valueAsDate })
        }
      />
    </Field>

    {typeof removeEvent === "function" && (
      <RemoveButton type="button" onClick={() => removeEvent(event.id)}>
        Remove event
      </RemoveButton>
    )}
  </div>
);
