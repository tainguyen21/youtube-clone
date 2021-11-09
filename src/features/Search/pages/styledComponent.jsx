import { styled } from "@mui/system";
import * as Colors from "assets/styles/colors";

export const SearchPageContainer = styled("div")(({ theme, margin_left }) => ({
  marginTop: "64px",
  backgroundColor: Colors.videosListBackgroundColor,
  overflow: "hidden",

  maxHeight: "calc(100vh - 64px)",
  overflowY: "scroll",
  transition: "all linear 0.25s",

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3, 12),
    marginLeft: margin_left === "true" ? "240px" : 0,
  },
}));

export const SearchResultContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(3, 3),
  borderTop: `1px solid ${Colors.grayBorderColor}`,
}));
