import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = ({ sx }) => {
  return (
    <RouterLink data-cy="logo" to="/admin/dashboard">
      <Box
        component="img"
        src="https://start121.de/storage/625/deepblue-iomoto-two_lines-logo_1.png"
        sx={{ ...sx }}
      />
    </RouterLink>
  );
};

export default Logo;
