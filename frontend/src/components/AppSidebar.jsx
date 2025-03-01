/* eslint-disable no-unused-vars */
import { Code, Icon, LogOut, Settings, SunMoon } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "./ui/sidebar";
import { useContext, useState } from "react";
import { useHackathons } from "@/context/contexts/hackathonContextProvider";
import { useTheme } from "@/context/contexts/themeContextProvider";

function SidebarGroupHackathons() {
  const { hackathons } = useHackathons();
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel className="text-[16px]">
          Your Hackathons
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {hackathons.map((hackathon) => (
              <SidebarMenuItem key={hackathon.id}>
                <SidebarMenuButton>
                  <NavLink
                    to="/"
                    className={(isActive) =>
                      `flex justify-center items-center gap-2 font-bold ${
                        isActive ? "text-blue-500" : "text-primary"
                      }`
                    }
                  >
                    <hackathon.icon size={16} />
                    <span>{hackathon.title}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
}

function SidebarGroupSettings() {
  const { theme, lightTheme, darkTheme } = useTheme();

  function changeTheme() {
    if (theme === "light") darkTheme();
    else lightTheme();
  }

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel className="text-[16px]">
          Application Settings
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Link
                  to="#"
                  className="flex justify-center items-center gap-2 font-bold"
                >
                  <Settings size={16} />
                  <span>Setting</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Link
                  onClick={changeTheme}
                  className={`flex justify-center items-center gap-2 font-bold `}
                >
                  <SunMoon size={16} />
                  <span>Theme</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
}

function AppSidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader>
        <h2 className="text-2xl font-extrabold text-center">HackaMan</h2>
        <hr className="border-2 border-gray-400 rounded-2xl" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupHackathons />
        <SidebarGroupSettings />
      </SidebarContent>
      <SidebarFooter>
        <hr className="border-2 border-gray-400 rounded-2xl" />
        <SidebarMenu className="flex items-center justify-center">
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout}>
              <LogOut size={16} />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
