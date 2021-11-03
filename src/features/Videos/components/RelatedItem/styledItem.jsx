import { styled } from "@mui/system";

export const Title = styled("div")(({ theme }) => ({
  fontWeight: "500",

  display: "-webkit-box",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "2",
  overflow: "hidden",
}));
