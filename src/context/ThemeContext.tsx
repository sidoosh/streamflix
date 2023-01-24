import React, { useState, useContext } from "react";
//@ts-ignore
const ThemeContext = React.createContext();
//@ts-ignore
const ThemeUpdateContext = React.createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
//@ts-ignore
export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
