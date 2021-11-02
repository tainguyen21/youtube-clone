import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { closeSideBar } from "app/uiSlice";
import VideoWatch from "features/Videos/components/Watch";
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

  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  return (
    <WatchPageContainer>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <VideoWatch video={video} />
        </Grid>
        <Grid item xs={4}>
          123
        </Grid>
      </Grid>
    </WatchPageContainer>
  );
}

export default WatchVideopage;
