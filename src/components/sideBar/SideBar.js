import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Drawer, Typography, Stack } from "@mui/material";

import sideBarConfig from "./SideBarConfig";
import { NavSection } from "../navigation";
import { Logo } from "../logo";
import { Scrollbar } from "../scrollbar";
import useResponsive from "../../hooks/useResponsive";
import { DRAWER_WIDTH, LocaleSwitcherStyle, RootStyle } from "./SideBar.styled";
import { getAppMode, setAppMode } from "../../helpers/modeSwitch";
import i18n from "i18next";
import { SearchContext } from "../../contexts/Search";

const SideBar = ({ isOpenSidebar, onCloseSidebar }) => {
  const [, dispatch] = useContext(SearchContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isDesktop = useResponsive("up", "lg");
  const appMode = getAppMode() === "demo" ? "live" : "demo";

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const onModeSwitch = () => {
    dispatch(
      {
        type: "SEARCH_TEXT",
        payload: {
          countries: "",
        },
      },
      {
        type: "FILTERED_RESULTS",
        payload: {
          countries: [],
        },
      }
    );

    if (getAppMode() === "demo") {
      setAppMode("live");
    } else {
      setAppMode("demo");
    }
    navigate("/admin/dashboard");
  };

  const onChangeLocale = (locale) => {
    i18n.changeLanguage(locale);
  };

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <Logo />
      </Box>

      <NavSection navConfig={sideBarConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 8 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{ pt: 2, pb: 2, borderRadius: 2, position: "relative" }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h6">
              {`Locale switcher`}
            </Typography>
          </Box>
          <LocaleSwitcherStyle>
            <Button onClick={() => onChangeLocale("en")} variant="contained">
              {`EN`}
            </Button>
            <Button onClick={() => onChangeLocale("de")} variant="contained">
              {`DE`}
            </Button>
          </LocaleSwitcherStyle>
        </Stack>

        <hr />

        <Stack
          alignItems="center"
          spacing={3}
          sx={{ pt: 2, borderRadius: 2, position: "relative" }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h6">
              {`Switch to ${appMode} mode`}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {`Click below button to see the ${appMode} content`}
            </Typography>
          </Box>

          <Button onClick={onModeSwitch} variant="contained">
            {`Switch to ${appMode}`}
          </Button>
        </Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
};

export default SideBar;
