import { styled } from "@mui/system";
import * as Colors from "assets/styles/colors";

export const WatchPageContainer = styled("div")(({ theme }) => ({
  marginTop: "64px",
  backgroundColor: Colors.videosListBackgroundColor,
  padding: theme.spacing(0.5),
  overflow: "scroll",

  maxHeight: "calc(100vh - 64px)",

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3, 6),
  },
}));
