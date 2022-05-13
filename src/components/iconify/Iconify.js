import React from "react";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";

const Iconify = ({ icon, sx, ...rest }) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...rest} />;
};

export default Iconify;
