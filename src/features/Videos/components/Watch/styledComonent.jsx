import { styled } from "@mui/system";

export const VideoContainer = styled("div")(({ theme }) => ({
  height: 0,
  paddingBottom: "calc(9/16*100%)",
  position: "relative",

  "& iframe": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

export const VideoTitle = styled("h3")(({ theme }) => ({
  fontSize: "18px",
  letterSpacing: 0,
  fontWeight: 500,

  display: "-webkit-box",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "2",
  overflow: "hidden",

  margin: theme.spacing(2, 0, 0.5, 0),
}));

export const VideoHeading = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const VideoDescription = styled("pre")(({ theme, desstyle }) => ({
  whiteSpace: "pre-wrap",
  letterSpacing: 0,
  fontFamily: "Roboto",
  fontSize: "14px",
  transition: "all linear 0.25s",

  ...desstyle,
}));
