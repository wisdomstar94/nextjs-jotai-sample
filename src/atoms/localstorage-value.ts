import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { getStorage } from "./atom-common.util";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const key = "localstorage-value";
const initialValue = "...";

const storage = createJSONStorage<string>(() => getStorage("local"));
const localStorageValueAtom = atomWithStorage<string>(
  key,
  initialValue,
  storage
);

export function useAtomLocalStorageValue() {
  const [isMounted, setIsMounted] = useState(false);
  const [value, setValue] = useAtom(localStorageValueAtom);

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
