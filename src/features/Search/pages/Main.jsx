import { Box, useTheme } from "@mui/system";
import SideBar from "components/SideBar";
import React from "react";
import { useSelector } from "react-redux";
import SearchItem from "../components/SearchItem";
import { SearchPageContainer, SearchResultContainer } from "./styledComponent";

SearchPage.propTypes = {};

function SearchPage(props) {
  const isShowSideBar = useSelector((state) => state.ui.isShowSideBar);
  const videos = useSelector((state) => state.searchVideo.videos);
  const theme = useTheme();

  return (
    <SearchPageContainer margin_left={isShowSideBar.toString()}>
      <SideBar background isShowSideBar={isShowSideBar} />
      <SearchResultContainer>
        {videos.map((video, index) => (
          <Box sx={{ marginBottom: theme.spacing(2.5) }} key={index}>
            <SearchItem video={video} />
          </Box>
        ))}
      </SearchResultContainer>
    </SearchPageContainer>
  );
}

export default SearchPage;
