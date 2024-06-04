import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { getStorage } from "./atom-common.util";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";

const key = "sessionstorage-value";
const initialValue = "...";

const storage = createJSONStorage<string>(() => getStorage("session"));
const sessionStorageValueAtom = atomWithStorage<string>(
  key,
  initialValue,
  storage
);

export function useAtomSessionStorageValue() {
  const [isMounted, setIsMounted] = useState(false);
  const [value, setValue] = useAtom(sessionStorageValueAtom);

  useEffect(() => {
    if (typeof localStorage === "undefined") return;
    setIsMounted(true);
  }, []);

  return {
    value,
    setValue,
    isMounted,
  };
}
