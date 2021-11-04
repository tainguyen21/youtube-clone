import { Box } from "@mui/system";
import SideBar from "components/SideBar";
import { fetchCategory } from "features/Videos/categorySlice";
import VideosCategory from "features/Videos/components/Category";
import VideosList from "features/Videos/components/List";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoxContent } from "./styledComponent";

HomeMainPage.propTypes = {};

function HomeMainPage(props) {
  const { videos /*error, isLoading*/ } = useSelector((state) => state.video);
  const isShowSideBar = useSelector((state) => state.ui.isShowSideBar);
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <Box>
      <SideBar show={isShowSideBar} />
      <BoxContent show_sidebar={isShowSideBar.toString()}>
        <VideosCategory category={category} />
        <VideosList videos={videos} />
      </BoxContent>
    </Box>
  );
}

export default HomeMainPage;
