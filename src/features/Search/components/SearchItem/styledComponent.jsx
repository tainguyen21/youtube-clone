import { styled } from "@mui/system";
import * as Colors from "assets/styles/colors";

export const SearchItemTitle = styled("h4")(({ theme }) => ({
  margin: 0,
  fontSize: "18px",
  fontWeight: 500,
  overflow: "hidden",
}));

export const SearchItemSubTitle = styled("span")(({ theme }) => ({
  fontSize: "12px",
  color: Colors.textVideoCardColor,

  "&:not(:first-child)": {
    marginLeft: theme.spacing(0.5),
  },
}));

export const SearchItemDescription = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: Colors.textVideoCardColor,
  marginTop: theme.spacing(2.2),

  display: "-webkit-box",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "2",
  overflow: "hidden",
}));
