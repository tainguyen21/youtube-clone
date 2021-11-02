import { styled } from "@mui/system";
import * as Colors from "assets/styles/colors";

export const WatchPageContainer = styled("div")(({ theme }) => ({
  marginTop: "64px",
  backgroundColor: Colors.videosListBackgroundColor,
  padding: theme.spacing(3, 6),
  overflow: "hidden",

  maxHeight: "calc(100vh - 64px)",
  overflowY: "scroll",
}));
