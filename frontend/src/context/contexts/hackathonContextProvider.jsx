import { Code } from "lucide-react";
import { createContext, useContext, useState } from "react";

const HackathonContext = createContext();

export const useHackathons = () => {
  return useContext(HackathonContext);
};

// eslint-disable-next-line react/prop-types
const HackathonContextProvider = function ({ children }) {
  const [hackathons, setHackathons] = useState([
    {
      id: "12fa4",
      title: "AceHack",
      icon: Code,
      date: { from: new Date().toISOString(), to: new Date().toISOString() },
    },
    {
      id: "3256",
      title: "WebForge",
      icon: Code,
      date: { from: new Date().toISOString(), to: new Date().toISOString() },
    },
    {
      id: "12fa4d",
      title: "AceHack",
      icon: Code,
      date: { from: new Date().toISOString(), to: new Date().toISOString() },
    },
    {
      id: "32d56",
      title: "WebForge",
      icon: Code,
      date: { from: new Date().toISOString(), to: new Date().toISOString() },
    },
    {
      id: "12efa4",
      title: "AceHack",
      icon: Code,
      date: { from: new Date().toISOString(), to: new Date().toISOString() },
    },
    {
      id: "32a56",
      title: "WebForge",
      icon: Code,
      date: { from: new Date().toISOString(), to: new Date().toISOString() },
    },
  ]);
  return (
    <HackathonContext.Provider value={{ hackathons, setHackathons }}>
      {children}
    </HackathonContext.Provider>
  );
};

export default HackathonContextProvider;
