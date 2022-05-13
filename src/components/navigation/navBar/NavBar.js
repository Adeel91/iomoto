import React from "react";
import { IconButton } from "@mui/material";
import { Iconify } from "../../iconify";
import { RootStyle, ToolbarStyle } from "./NavBar.styled";

const NavBar = ({ onOpenSidebar }) => {
  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton
          onClick={onOpenSidebar}
          sx={{ mr: 1, color: "text.primary", display: { lg: "none" } }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      </ToolbarStyle>
    </RootStyle>
  );
};

export default NavBar;
