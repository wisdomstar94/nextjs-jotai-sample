import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { getStorage } from "./atom-common.util";

const key = "localstorage-value";
const initialValue = "...";

const storage = createJSONStorage<string>(() => getStorage("local"));
export const localStorageValueAtom = atomWithStorage<string>(
  key,
  initialValue,
  storage
);
