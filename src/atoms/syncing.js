import { useEffect, useRef } from "react";
import { atom, useRecoilCallback } from "recoil";

export const syncing$ = atom({
  key: "@syncing",
  default: false,
});

export const useSyncEventState = () =>
  useRecoilCallback(({ set }) => async () => {
    set(syncing$, true);
    await syncEventState();
    set(syncing$, false);
  });

export const useSyncEventStateEffect = (eventIds) => {
  const syncEvents = useSyncEventState();
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    syncEvents();
  }, [eventIds, syncEvents]);
};

function syncEventState() {
  const randomDuration = Math.floor(Math.random() * 500 + 500);
  return new Promise((res) => setTimeout(res, randomDuration));
}
