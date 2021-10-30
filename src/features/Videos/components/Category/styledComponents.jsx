import { Chip, Stack } from "@mui/material";
import { styled } from "@mui/system";
import * as Colors from "assets/styles/colors";

export const StackContent = styled(Stack)(({ theme }) => ({
  overflow: "scroll",
  scrollBehavior: "smooth",
  padding: theme.spacing(0.5, 2),

  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

export const Item = styled(Chip)(({ theme }) => ({
  fontSize: "14px",
  backgroundColor: Colors.grayColor,
  transition: "all linear 0.25s",

  "&:hover": {
    backgroundColor: Colors.grayButtonHoverColor,
  },
}));

export const ArrowBox = styled("div")(({ theme, ...props }) => ({
  position: "absolute",
  left: props.position === "left" ? 0 : "auto",
  right: props.position === "right" ? 0 : "auto",
  top: "50%",
  zIndex: 99,
  display: props.show === "true" ? "block" : "none",

  transform: "translateY(-50%)",
  background: "rgb(255, 255, 255)",
  background:
    props.position === "left"
      ? "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)"
      : "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 100%)",

  paddingRight: props.position === "left" ? "24px" : "0",
  paddingLeft: props.position === "right" ? "24px" : "0",
}));
