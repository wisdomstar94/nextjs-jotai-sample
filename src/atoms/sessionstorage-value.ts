import { atomWithStorage, createJSONStorage } from "jotai/utils";

const key = "sessionstorage-value";
const initialValue = "...";

const storage = createJSONStorage<string>(() => {
  return {
    getItem: (key: string) => {
      if (typeof sessionStorage === "undefined") return "";
      return sessionStorage.getItem(key);
    },
    setItem(key: string, newValue: string) {
      if (typeof sessionStorage === "undefined") return;
      sessionStorage.setItem(key, newValue);
    },
    removeItem(key: string) {
      if (typeof sessionStorage === "undefined") return;
      sessionStorage.removeItem(key);
    },
  };
});
export const sessionStorageValueAtom = atomWithStorage<string>(
  key,
  initialValue,
  storage
);
