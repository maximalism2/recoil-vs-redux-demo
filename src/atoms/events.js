import { atom, atomFamily, selector } from "recoil";

export const eventIds$ = atom({
  key: "@eventIds",
  default: [],
});

export const eventsFamily$ = atomFamily({
  key: "@event",
});

export const eventsSelector$ = selector({
  key: "@eventsSelector",
  get({ get }) {
    const eventIds = get(eventIds$);
    return eventIds.map((id) => get(eventsFamily$(id)));
  },
});
