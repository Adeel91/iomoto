import React from "react";
import { RootStyle } from "./TopNotification.styled";
import { getAppMode } from "../../helpers/modeSwitch";

const TopNotification = () => {
  const appMode = getAppMode();

  return (
    <RootStyle>
      {`💥💥 Thank you for trying our ${appMode} mode 💥💥`}
    </RootStyle>
  );
};

export default TopNotification;
