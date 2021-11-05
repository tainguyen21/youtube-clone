import { styled } from "@mui/system";

export const ChannelPageContainer = styled("div")(({ theme, show }) => ({
  marginTop: "64px",
  marginLeft: show === "true" ? "240px" : 0,

  transition: "all linear 0.25s",
}));
