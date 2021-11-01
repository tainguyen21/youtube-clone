import { styled } from "@mui/system";
import * as Colors from "assets/styles/colors";

export const WatchPageContainer = styled("div")(({ theme }) => ({
  marginTop: "64px",
  backgroundColor: Colors.videosListBackgroundColor,
  padding: theme.spacing(3, 6),
}));

export const VideoContainer = styled("div")(({ theme }) => ({
  width: "100%",
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
