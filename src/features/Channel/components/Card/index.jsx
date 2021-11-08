import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { VideoTitle } from "features/Videos/components/Watch/styledComonent";
import { ChannelVideoTitle } from "features/Channel/pages/Main/styledComponent";

ChannelVideoCard.propTypes = {};

function ChannelVideoCard(props) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="118"
        image="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
        alt="green iguana"
      />
      <CardContent>
        <ChannelVideoTitle>
          falfj;ladjf alkdfjf adf lkjadf aldsfj adlfj ldsj afdas fadsf asdf adsf
          asdf asf ad fadsf
        </ChannelVideoTitle>
        <Typography variant="body2" color="text.secondary">
          {`${123} lượt xem * ${3} năm trước`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ChannelVideoCard;
