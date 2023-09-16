"use client";

import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useLocalStorage from "../hooks/useLocalStorage";

const DarkModeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const [isDarkMode, setDarkMode] = useState(false);

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    setDarkMode(theme === "dark" ? true : false);
    localStorage.setItem("theme", theme);
  }, [colorTheme, theme]);

  const toggleDarkMode = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    setDarkMode((prevState) => !prevState);
  };

  return (
    <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={28} />
  );
};

export default DarkModeSwitcher;
