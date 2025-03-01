import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AllContextsProvider from "./context/AllContextsProvider";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import RefreshHandler from "./components/authorization/RefreshHandler";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <RefreshHandler />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllContextsProvider>
      <RouterProvider router={router}>
        <RefreshHandler />
      </RouterProvider>
    </AllContextsProvider>
  </StrictMode>
);
