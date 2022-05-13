import React from "react";
import { Stack, Typography } from "@mui/material";

const PageTitle = ({ title = "Dashboard", count = null }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mb={2}
    >
      <Typography variant="h4" gutterBottom>
        {title} <span>{count}</span>
      </Typography>
    </Stack>
  );
};

export default PageTitle;
