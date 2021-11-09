import React from "react";
import PropTypes from "prop-types";
import ChannelVideoCard from "../Card";
import { Grid } from "@mui/material";
import * as Colors from "assets/styles/colors";
import { Link } from "react-router-dom";

ChannelVideoList.propTypes = {
  videos: PropTypes.array,
};

ChannelVideoList.defaultProps = {
  videos: [],
};

function ChannelVideoList(props) {
  const { videos } = props;

  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: Colors.videosListBackgroundColor }}
      columns={15}
    >
      {videos.map((video, index) => (
        <Grid item md={3} sm={5} key={index}>
          <Link
            to={`/watch/${video.id.videoId}`}
            style={{ textDecoration: "none" }}
          >
            <ChannelVideoCard video={video} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default ChannelVideoList;
