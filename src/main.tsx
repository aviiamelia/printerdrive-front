import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Providers } from "./contexts/index.tsx";
import { SignInPage } from "./pages/signin/signIn.tsx";

import { LoginPage } from "./pages/login/login.tsx";
import { DrivePage } from "./pages/drive/drivePage.tsx";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/drive/*",
    element: <DrivePage />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
);
