"use client";

import { useEffect, useState } from "react";

const useLocalStorage = (key: string, defaultTheme: string) => {
  const [storage, setStorage] = useState(defaultTheme);
  useEffect(() => {
    const storageItem = localStorage.getItem(key);
    if (storageItem === null) {
      localStorage.setItem(key, defaultTheme);
    } else {
      setStorage(storageItem);
    }
  }, [key, defaultTheme]);
  return [storage, setStorage] as const;
};

export default useLocalStorage;
