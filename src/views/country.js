import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import { PageTitle } from "../components/pageTitle";
import { useLocation } from "react-router-dom";
import {
  AvatarDetailStyle,
  CoverDetailImgStyle,
} from "../components/card/Card.styled";
import { useTranslation } from "react-i18next";

const Country = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { state } = location;

  return (
    <Container>
      <PageTitle title={`Country Overview: ${state?.title}`} />

      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <CoverDetailImgStyle
            alt={state?.title}
            src={state?.cover}
            loading="lazy"
          />
        </Grid>

        <Grid item xs={12} lg={12}>
          <AvatarDetailStyle
            alt={state?.author?.name}
            src={state?.author?.avatarUrl}
          />
          <Typography gutterBottom variant="h2">
            {state?.title}
          </Typography>

          <Typography gutterBottom variant="h5">
            {t("alpha_code")} {state?.alphaCode}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Country;
