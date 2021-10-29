import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import * as Colors from "assets/styles/colors";

export const Search = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${Colors.grayBorderColor}`,
  backgroundColor: alpha(theme.palette.common.white, 0.15),

  display: "flex",
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    width: "40%",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: theme.spacing(1, 3),

  backgroundColor: Colors.grayColor,
  borderLeft: `1px solid ${Colors.grayBorderColor}`,
  cursor: "pointer",
  transition: "all linear 0.2s",

  "&:hover": {
    backgroundColor: Colors.grayButtonHoverColor,
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
    transition: theme.transitions.create("all"),
    width: "100%",

    "&:focus": {
      border: `1px solid ${Colors.inputFocusColor}`,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
    },

    "&::placeholder": {
      fontWeight: "500",
    },
  },
}));
