import { styled } from "@mui/system";

export const BoxContent = styled("div")(({ theme, show_sidebar }) => ({
  marginLeft: 0,
  marginTop: "64px",
  transition: "all linear 0.25s",

  [theme.breakpoints.up("md")]: {
    marginLeft: show_sidebar === "true" ? "240px" : 0,
  },
}));
