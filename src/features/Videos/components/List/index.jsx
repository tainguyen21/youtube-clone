import { Grid } from "@mui/material";
import React from "react";
import VideosCard from "../Card";
import * as Colors from "assets/styles/colors";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

VideosList.propTypes = {
  videos: PropTypes.array,
};

VideosList.defaultProps = {
  videos: [],
};

function VideosList(props) {
  const { videos } = props;

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
        {videos.map((video, index) => (
          <Grid item sx={6} sm={4} md={3} key={index}>
            <VideosCard video={video} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default VideosList;
