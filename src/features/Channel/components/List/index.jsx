import React from "react";
import PropTypes from "prop-types";
import ChannelVideoCard from "../Card";
import { Grid } from "@mui/material";
import * as Colors from "assets/styles/colors";

ChannelVideoList.propTypes = {};

function ChannelVideoList(props) {
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: Colors.videosListBackgroundColor }}
      columns={15}
    >
      <Grid item xs={3}>
        <ChannelVideoCard />
      </Grid>
      <Grid item xs={3}>
        <ChannelVideoCard />
      </Grid>
      <Grid item xs={3}>
        <ChannelVideoCard />
      </Grid>
      <Grid item xs={3}>
        <ChannelVideoCard />
      </Grid>
      <Grid item xs={3}>
        <ChannelVideoCard />
      </Grid>
      <Grid item xs={3}>
        <ChannelVideoCard />
      </Grid>
      <Grid item xs={3}>
        <ChannelVideoCard />
      </Grid>
    </Grid>
  );
}

export default ChannelVideoList;
