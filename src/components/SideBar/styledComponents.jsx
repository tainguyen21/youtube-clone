import { styled } from "@mui/system";

export const SideBarContainer = styled("div")(({ theme, show }) => ({
  width: "240px",
  overflowY: "auto",
  position: "fixed",
  left: show ? 0 : "-240px",
  bottom: 0,
  top: "64px",
  transition: "all linear 0.25s",
}));
