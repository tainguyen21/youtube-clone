import { styled } from "@mui/system";
import * as Colors from "assets/styles/colors";

export const SideBarContainer = styled("div")(({ theme, show, modal }) => ({
  width: "240px",
  overflowY: "auto",
  padding: theme.spacing(1),

  position: "fixed",
  left: show === "true" ? 0 : "-240px",
  bottom: 0,
  top: modal === "true" ? 0 : "64px",
  zIndex: 99,
  transition: "all linear 0.25s",

  backgroundColor: Colors.whiteColor,
}));
