import { styled } from "@mui/system";

export const VideoContainer = styled("div")(({ theme }) => ({
  height: 0,
  width: "100%",
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
  alignItems: "center",
  alignItems: "flex-start",
  flexDirection: "column",

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const VideoDescription = styled("div")(({ theme, desstyle }) => ({
  whiteSpace: "pre-wrap",
  letterSpacing: 0,
  fontFamily: "Roboto",
  fontSize: "14px",
  transition: "all linear 0.25s",
  overflow: "hidden",

  [theme.breakpoints.down("sm")]: {
    width: "100vw",
  },

  ...desstyle,
}));
