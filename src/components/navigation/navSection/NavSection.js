import React from "react";
import { matchPath, useLocation } from "react-router-dom";
import { Box, List } from "@mui/material";
import NavItem from "../navItem/NavItem";

const NavSection = ({ navConfig, ...other }) => {
  const { pathname } = useLocation();
  const match = (path) =>
    path ? !!matchPath({ path, end: false }, pathname) : false;

  return (
    <Box {...other}>
      <List data-cy="nav-items" disablePadding>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
};

export default NavSection;
