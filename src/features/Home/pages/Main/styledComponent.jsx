import { styled } from "@mui/system";

export const BoxContent = styled("div")(({ theme, isShowSideBar }) => ({
  marginLeft: isShowSideBar === "true" ? "240px" : 0,
  marginTop: "64px",
  transition: "all linear 0.25s",
}));
