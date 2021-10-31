import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import SideBar from "components/SideBar";
import VideosCategory from "features/Videos/components/Category";
import { BoxContent } from "./styledComponent";
import VideosList from "features/Videos/components/List";

HomeMainPage.propTypes = {};

function HomeMainPage(props) {
  return (
    <Box>
      <SideBar />
      <BoxContent>
        <VideosCategory />
        <VideosList />
      </BoxContent>
    </Box>
  );
}

export default HomeMainPage;
