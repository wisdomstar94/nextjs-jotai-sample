import { WritableAtom, useAtom } from "jotai";
import { RESET } from "jotai/utils";
import { useEffect, useState } from "react";

export function useAtomWithStorage<T>(
  atom: WritableAtom<
    T,
    [T | typeof RESET | ((prev: T) => T | typeof RESET)], // === [SetStateActionWithReset<Value>]
    void
  >
) {
  const [isMounted, setIsMounted] = useState(false);
  const [value, setValue] = useAtom(atom);

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
