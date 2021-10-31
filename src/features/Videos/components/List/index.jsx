import { Grid } from "@mui/material";
import React from "react";
import VideosCard from "../Card";
import * as Colors from "assets/styles/colors";
import { Box } from "@mui/system";

VideosList.propTypes = {};

function VideosList(props) {
  return (
    <Box
      sx={{
        overflowY: "scroll",
        maxHeight: "calc(100vh - 64px - 58px)",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          padding: (theme) => theme.spacing(2),
          backgroundColor: Colors.videosListBackgroundColor,
          overflow: "hidden",
        }}
      >
        <Grid item xs={3}>
          <VideosCard />
        </Grid>
        <Grid item xs={3}>
          <VideosCard />
        </Grid>
        <Grid item xs={3}>
          <VideosCard />
        </Grid>
        <Grid item xs={3}>
          <VideosCard />
        </Grid>
        <Grid item xs={3}>
          <VideosCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default VideosList;
