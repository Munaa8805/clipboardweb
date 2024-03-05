import React, { useState, useEffect } from "react";

const DarkToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => {
        setDarkMode(!darkMode);
      }}
      className="hidden absolute right-10 top-10 bg-slate-800 text-white px-5 py-3 rounded dark:bg-white dark:text-slate-800  hover:cursor-pointer  md:block"
    >
      {darkMode ? "Dark mode" : "Light mode"}
    </button>
  );
};

export default DarkToggle;
