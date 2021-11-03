import { Grid } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { closeSideBar } from "app/uiSlice";
import { fetchComments } from "features/Videos/commentsSlice";
import RelatedItem from "features/Videos/components/RelatedItem";
import VideoWatch from "features/Videos/components/Watch";
import { fetchRelatedVideos } from "features/Videos/relatedVideoSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
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

  const theme = useTheme();

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
          {relatedVideos.map((video, index) => (
            <Box key={index} sx={{ marginTop: theme.spacing(1.5) }}>
              <Link
                to={`/watch/${video.id.videoId}`}
                style={{ textDecoration: "none" }}
              >
                <RelatedItem video={video} />
              </Link>
            </Box>
          ))}
        </Grid>
      </Grid>
    </WatchPageContainer>
  );
}

export default WatchVideopage;
