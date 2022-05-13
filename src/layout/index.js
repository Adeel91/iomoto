import React, { useState } from "react";
import { SideBar } from "../components/sideBar";
import { NavBar } from "../components/navigation";
import { Outlet } from "react-router-dom";
import { MainStyle, RootStyle } from "./Layout.styled";
import { TopNotification } from "../components/topNotification";

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <TopNotification />
      <NavBar onOpenSidebar={() => setOpen(true)} />
      <SideBar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
};

export default Layout;
