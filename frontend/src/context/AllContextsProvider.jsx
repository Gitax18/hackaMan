/* eslint-disable react/prop-types */
import HackathonContextProvider from "./contexts/hackathonContextProvider";
import ThemeContextProvider from "./contexts/themeContextProvider";

function AllContextsProvider({ children }) {
  return (
    <HackathonContextProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </HackathonContextProvider>
  );
}

export default AllContextsProvider;
