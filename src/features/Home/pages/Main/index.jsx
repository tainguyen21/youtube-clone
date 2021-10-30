import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import SideBar from "components/SideBar";
import Category from "features/Videos/components/Category";
import { BoxContent } from "./styledComponent";

HomeMainPage.propTypes = {};

function HomeMainPage(props) {
  return (
    <Box>
      <SideBar />
      <BoxContent>
        <Category />
      </BoxContent>
    </Box>
  );
}

export default HomeMainPage;
