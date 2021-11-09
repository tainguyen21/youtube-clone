import { Box } from "@mui/system";
import { openSideBar } from "app/uiSlice";
import SideBar from "components/SideBar";
import { fetchCategory, setActive } from "features/Videos/categorySlice";
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
  const active = useSelector((state) => state.category.active);
  const dispatch = useDispatch();

  const handleCategoryClick = (active) => {
    dispatch(setActive(active));
  };

  const filterVideo = videos.filter((item) =>
    active === "0" ? true : item.snippet.categoryId === active
  );

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(openSideBar());
  }, [dispatch]);

  return (
    <Box>
      <SideBar show={isShowSideBar} />
      <BoxContent show_sidebar={isShowSideBar.toString()}>
        <VideosCategory
          category={category}
          onCategoryClick={handleCategoryClick}
          active={active}
        />
        <VideosList videos={filterVideo} />
      </BoxContent>
    </Box>
  );
}

export default HomeMainPage;
