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

export const EventView = ({ event, updateEvent }) => (
  <div>
    <TitleInput
      type="text"
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
  </div>
);
