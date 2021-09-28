import add from "date-fns/add";
import { uniqueID } from "../utils";

export const EEventStatus = {
  Active: "__active__",
  Suspended: "__suspended__",
};

export const START_DATE_FORMAT = "dd MMM yyyy";
export const INPUT_DATE_FORMAT = "yyyy-MM-dd";

const tomorrow = add(new Date(), { days: 1 });
const inThreeDays = add(new Date(), { days: 3 });

export const mockEvents = [
  {
    id: uniqueID(),
    title: "Dortmund vs Sporting Lissabon",
    status: EEventStatus.Active,
    startDate: new Date(),
  },
  {
    id: uniqueID(),
    title: "FC Porto vs Liverpool",
    status: EEventStatus.Suspended,
    startDate: tomorrow,
  },
  {
    id: uniqueID(),
    title: "Milan vs Atletico Madrid",
    status: EEventStatus.Suspended,
    startDate: inThreeDays,
  },
];
