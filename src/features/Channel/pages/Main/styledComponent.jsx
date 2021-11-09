import { styled } from "@mui/system";

export const ChannelPageContainer = styled("div")(({ theme, show }) => ({
  marginTop: "64px",

  [theme.breakpoints.up("md")]: {
    marginLeft: show === "true" ? "240px" : 0,
  },

  transition: "all linear 0.25s",
}));

export const ChannelHeading = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3, 2),
  backgroundColor: "#F9F9F9",
}));

export const ChannelVideoTitle = styled("h4")(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 500,
  margin: `0 0 ${theme.spacing(1)} 0`,

  display: "-webkit-box",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "2",
  overflow: "hidden",
}));
