import React from "react";
import DarkModeSwitcher from "./DarkModeSwitcher";

const NavBar = () => {
  return (
    <header className="py-[20px] md:py-[24px]">
      <div className="px-[20px] max-w-[1440px] mx-auto flex justify-between items-center md:px-[40px] lg:px-[72px]">
        <div className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
          <span className="text-gray-400">dark</span>mode.
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <DarkModeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
