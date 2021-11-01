import React from "react";
import { Box } from "@mui/system";
import SideBar from "components/SideBar";
import VideosCategory from "features/Videos/components/Category";
import { BoxContent } from "./styledComponent";
import VideosList from "features/Videos/components/List";
import { useSelector } from "react-redux";

HomeMainPage.propTypes = {};

function HomeMainPage(props) {
  const { videos, error, isLoading } = useSelector((state) => state.video);
  const isShowSideBar = useSelector((state) => state.ui.isShowSideBar);

  return (
    <Box>
      <SideBar isShowSideBar={isShowSideBar} />
      <BoxContent isShowSideBar={isShowSideBar.toString()}>
        <VideosCategory />
        <VideosList videos={videos} />
      </BoxContent>
    </Box>
  );
}

export default HomeMainPage;
