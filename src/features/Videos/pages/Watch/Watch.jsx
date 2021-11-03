import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { closeSideBar } from "app/uiSlice";
import { fetchComments } from "features/Videos/commentsSlice";
import VideoWatch from "features/Videos/components/Watch";
import { fetchRelatedVideos } from "features/Videos/relatedVideoSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { WatchPageContainer } from "./styledComponent";

WatchVideopage.propTypes = {};

function WatchVideopage(props) {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { id } = match.params;
  const video = useSelector((state) =>
    state.video.videos.find((item) => item.id === id)
  );
  const {
    comments,
    isLoading: isLoadingComment,
    error: errorComment,
    nextPageToken: nextPageTokenComment,
  } = useSelector((state) => state.comments);
  const {
    videos: relatedVideos,
    isLoading: isLoadingRelated,
    error: errorRelated,
    nextPageToken: nextPageTokenRelated,
  } = useSelector((state) => state.relatedVideos);

  useEffect(() => {
    dispatch(closeSideBar());
    dispatch(
      fetchComments({
        videoId: id,
      })
    );
    dispatch(
      fetchRelatedVideos({
        videoId: id,
      })
    );
  }, []);

  console.log(relatedVideos);

  return (
    <WatchPageContainer>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <VideoWatch video={video} comments={comments} />
        </Grid>
        <Grid item xs={4}>
          123
        </Grid>
      </Grid>
    </WatchPageContainer>
  );
}

export default WatchVideopage;
