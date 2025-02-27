import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full flex flex-col gap-2">
        <SidebarTrigger className="cursor-pointer bg-secondary rounded-full border-1 m-1 border-gray-500" />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default MainLayout;
