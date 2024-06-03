import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const localStorageKey = 'localstorage-value';
const initialValue = '10';

const storage = createJSONStorage<string>(() => {
  return {
    getItem: (key: string) => {
      if (typeof localStorage === 'undefined') return '';
      return localStorage.getItem(key);
    },
    setItem(key: string, newValue: string) {
      if (typeof localStorage === 'undefined') return;
      localStorage.setItem(key, newValue);
    },
    removeItem(key: string) {
      if (typeof localStorage === 'undefined') return;
      localStorage.removeItem(key);
    },
  }
});
export const localStorageValueAtom = atomWithStorage<string>(localStorageKey, initialValue, storage);