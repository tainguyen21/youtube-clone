import { Card, CardMedia, Tooltip, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Title } from "./styledItem";
import * as Colors from "assets/styles/colors";

RelatedItem.propTypes = {
  video: PropTypes.object,
};

RelatedItem.defaultProps = {
  video: {},
};

function RelatedItem(props) {
  const theme = useTheme();
  const { video } = props;

  const { channelTitle, channelId, publishedAt, title, thumbnails } =
    video && video.snippet ? video.snippet : {};

  const videoImageUrl =
    thumbnails && thumbnails.standard ? thumbnails.standard.url : "";

  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 168, height: 94, flexShrink: 0 }}
        image={videoImageUrl}
        alt="Related Video"
      />
      <Box sx={{ marginLeft: theme.spacing(1) }}>
        <Title>{title}</Title>
        <Link
          to={`/channel/${channelId}`}
          style={{ textDecoration: "none", color: Colors.blackColor }}
        >
          <Tooltip title={channelTitle || ""}>
            <Typography
              sx={{ fontSize: "14px", overflow: "hidden" }}
              varient="body2"
              component="p"
            >
              {channelTitle || "Youtube Data Api Error"}
            </Typography>
          </Tooltip>
        </Link>
        <Typography
          sx={{ fontSize: "14px", overflow: "hidden" }}
          varient="body2"
          component="p"
        >
          {publishedAt}
        </Typography>
      </Box>
    </Card>
  );
}

export default RelatedItem;
