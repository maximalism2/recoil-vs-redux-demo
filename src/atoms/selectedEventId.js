import { atom } from "recoil";

export const selectedEventId$ = atom({
  key: "@selectedEventId",
  default: "",
});
