import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

ChannelVideoCard.propTypes = {
  video: PropTypes.object,
};

ChannelVideoCard.defaultProps = {
  video: {},
};

function ChannelVideoCard(props) {
  const { video } = props;
  const { title, thumbnails, publishTime } =
    video && video.snippet ? video.snippet : {};
  const { url: videoThumbnailsUrl } =
    thumbnails && thumbnails.high ? thumbnails.high : {};

  return (
    <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <CardMedia
        component="img"
        height="150"
        sx={{
          height: {
            sm: "118px",
          },
        }}
        image={videoThumbnailsUrl}
        alt={title}
      />
      <CardContent>
        <Typography
          component="h4"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            display: "-webkit-box",
            textOverflow: "ellipsis",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "2",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${publishTime} năm trước`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ChannelVideoCard;
