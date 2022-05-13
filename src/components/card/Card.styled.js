import { styled } from "@mui/material/styles";
import { Link, Avatar } from "@mui/material";

export const CardMediaStyle = styled("div")({
  position: "relative",
  paddingTop: "calc(100% * 3 / 4)",
});

export const TitleStyle = styled(Link)({
  overflow: "hidden",
  WebkitLineClamp: 2,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
});

export const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: "absolute",
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

export const CoverImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

export const CoverDetailImgStyle = styled("img")({
  width: "100%",
  height: "400px",
  objectFit: "cover",
  border: "1px solid",
  borderRadius: "10px",
});

export const AvatarDetailStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 50,
  height: 50,
}));
