/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext({
  theme: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const useTheme = () => {
  return useContext(themeContext);
};

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function lightTheme() {
    setTheme("light");
  }

  function darkTheme() {
    setTheme("dark");
  }

  useEffect(() => {
    const html = document.querySelector("html").classList;
    html.remove("light", "dark");
    html.add(theme);
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, lightTheme, darkTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContextProvider;
