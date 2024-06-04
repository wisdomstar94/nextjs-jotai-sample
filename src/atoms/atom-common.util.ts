export function getStorage(type: "local" | "session") {
  if (type === "local") {
    return {
      getItem: (key: string) => {
        if (typeof localStorage === "undefined") return "";
        return localStorage.getItem(key);
      },
      setItem(key: string, newValue: string) {
        if (typeof localStorage === "undefined") return;
        localStorage.setItem(key, newValue);
      },
      removeItem(key: string) {
        if (typeof localStorage === "undefined") return;
        localStorage.removeItem(key);
      },
    };
  } else {
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
  }
}
