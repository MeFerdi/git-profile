import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { lightTheme } from "../theme";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div
      onClick={toggleTheme}
      className="theme-toggle"
      style={{
        color: theme === lightTheme ? "#ffd700" : "#ffffff",
      }}
    >
      {theme === lightTheme ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default ThemeToggle;