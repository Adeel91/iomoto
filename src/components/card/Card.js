import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Card, Grid, Typography, CardContent } from "@mui/material";
import { SvgIconStyle } from "../svgicon";
import {
  AvatarStyle,
  CardMediaStyle,
  CoverImgStyle,
  TitleStyle,
} from "./Card.styled";
import { useTranslation } from "react-i18next";

const BaseCard = ({ card, index }) => {
  const { t } = useTranslation();
  const { cover, title, author, alphaCode, createdAt } = card;

  return (
    <Grid key={index} item xs={12} md={6} lg={4} xl={3}>
      <Card sx={{ position: "relative" }}>
        <Link
          to={`/admin/country/${card.id}/`}
          state={card}
          component={RouterLink}
        >
          <CardMediaStyle>
            <SvgIconStyle
              color="paper"
              src="https://minimal-kit-react.vercel.app/static/icons/shape-avatar.svg"
              sx={{
                width: 80,
                height: 36,
                zIndex: 9,
                bottom: -15,
                position: "absolute",
              }}
            />
            <AvatarStyle alt={author?.name} src={author?.avatarUrl} />

            <CoverImgStyle alt={title} src={cover} loading="lazy" />
          </CardMediaStyle>
        </Link>

        <CardContent>
          <Typography gutterBottom variant="caption">
            {createdAt?.toLocaleString()}
          </Typography>

          <TitleStyle
            to={`/admin/country/${card.id}`}
            state={card}
            color="inherit"
            variant="h6"
            underline="hover"
            component={RouterLink}
          >
            {title}
          </TitleStyle>

          <Typography gutterBottom variant="subtitle2">
            {t("alpha_code")} {alphaCode}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BaseCard;
