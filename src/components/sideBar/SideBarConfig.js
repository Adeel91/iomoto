import React from "react";
import { Iconify } from "../iconify";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sideBarConfig = [
  {
    title: "dashboard",
    path: "/admin/dashboard",
    icon: getIcon("ic:round-space-dashboard"),
  },
];

export default sideBarConfig;
