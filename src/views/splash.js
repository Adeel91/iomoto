import React, { useEffect } from "react";
import { Animate } from "react-simple-animate";
import { Logo } from "../components/logo";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const WrapperStyle = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/admin/dashboard");
    }, Math.floor(Math.random() * 5000) + 2000);
  }, []);

  return (
    <WrapperStyle>
      <Animate
        play={true}
        duration={2}
        easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
        end={{ opacity: 1, filter: "blur(0)", transform: "scale(1.5)" }}
        start={{ opacity: 0.75, filter: "blur(1px)", transform: "scale(0.75)" }}
      >
        <Logo />
      </Animate>
    </WrapperStyle>
  );
};

export default Splash;
