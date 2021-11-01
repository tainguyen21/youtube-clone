import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { WatchPageContainer } from "./styledComponent";
import { useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { VideoContainer } from "./styledComponent";
import { closeSideBar } from "app/uiSlice";

WatchVideopage.propTypes = {};

function WatchVideopage(props) {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { id } = match.params;
  const video = useSelector((state) =>
    state.video.videos.find((item) => item.id === id)
  );

  const iframeVideo = video ? video.player.embedHtml : "<div>123</div>";

  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  return (
    <WatchPageContainer>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <VideoContainer dangerouslySetInnerHTML={{ __html: iframeVideo }} />
        </Grid>
        <Grid item xs={4}>
          123
        </Grid>
      </Grid>
    </WatchPageContainer>
  );
}

export default WatchVideopage;
