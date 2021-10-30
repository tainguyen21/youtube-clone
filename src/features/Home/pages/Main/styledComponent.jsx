import { styled } from "@mui/system";
import * as Colors from "assets/styles/colors";

export const BoxContent = styled("div")(({ theme }) => ({
  marginLeft: "240px",
  marginTop: "64px",
  padding: theme.spacing(1, 1),
  borderTop: `1px solid ${Colors.grayBorderColor}`,
  borderBottom: `1px solid ${Colors.grayBorderColor}`,
}));
