import { styled } from "@mui/system";
import * as Colors from "assets/styles/colors";

export const StyledCardContent = styled("div")(({ theme }) => ({
  padding: theme.spacing(1.5, 2, 2, 0),
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

export const CardTitle = styled("h4")(({ theme }) => ({
  margin: 0,
  fontWeight: "bold",
  fontSize: 14,

  display: "-webkit-box",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "2",
  overflow: "hidden",

  marginBottom: theme.spacing(0.5),
}));

export const CardInfo = styled("div")(({ theme }) => ({
  fontSize: 14,
  margin: 0,
  color: Colors.textVideoCardColor,

  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
}));
