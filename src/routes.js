import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./views/dashboard";
import Country from "./views/country";
import Splash from "./views/splash";

const Routes = () => {
  return useRoutes([
    {
      path: "/admin",
      element: <Layout />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "country/:id/", element: <Country /> },
      ],
    },
    {
      path: "/",
      children: [{ path: "", element: <Splash /> }],
    },
    { path: "*", element: <Navigate to="/admin/dashboard" replace /> },
  ]);
};

export default Routes;
