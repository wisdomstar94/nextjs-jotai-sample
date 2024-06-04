import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { getStorage } from "./atom-common.util";

const key = "sessionstorage-value";
const initialValue = "...";

const storage = createJSONStorage<string>(() => getStorage("session"));
export const sessionStorageValueAtom = atomWithStorage<string>(
  key,
  initialValue,
  storage
);
