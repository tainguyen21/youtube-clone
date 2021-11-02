import { styled } from "@mui/system";
import * as Colors from "assets/styles/colors";

export const WatchPageContainer = styled("div")(({ theme }) => ({
  marginTop: "64px",
  backgroundColor: Colors.videosListBackgroundColor,
  padding: theme.spacing(3, 6),
}));

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
