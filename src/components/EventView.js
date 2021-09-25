import format from "date-fns/format";
import styled from "@emotion/styled";

import { EventStatus } from "./EventStatus";
import { Field } from "./Field";
import { toggleStatus } from "../utils";
import { INPUT_DATE_FORMAT } from "../consts";

const TitleInput = styled.input`
  font-size: 2em;
  border: 1px solid transparent;
  background: none;
  transition: 0.1s;
  display: block;
  margin-bottom: 1em;

  &:hover,
  &:focus {
    border-color: #aaa;
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.12);
  }
`;

export const EventView = ({ bet, updateBet: updateEvent }) => (
  <div>
    <TitleInput type="text" defaultValue={bet.title} />

    <Field label="Status">
      <EventStatus
        status={bet.status}
        onClick={() => updateEvent({ status: toggleStatus(bet.status) })}
      />
    </Field>

    <Field label="Start date">
      <input
        type="date"
        value={format(bet.startDate, INPUT_DATE_FORMAT)}
        onChange={(e) =>
          updateEvent({ startDate: e.currentTarget.valueAsDate })
        }
      />
    </Field>
  </div>
);
