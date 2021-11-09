import { Avatar, Card, CardMedia, Tooltip } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import {
  SearchItemDescription,
  SearchItemSubTitle,
  SearchItemTitle,
} from "./styledComponent";
import PropTypes from "prop-types";
import { formatTime } from "utils/common";

SearchItem.propTypes = {
  video: PropTypes.object,
};

SearchItem.defaultProps = {
  video: {},
};

function SearchItem(props) {
  const theme = useTheme();
  const { video } = props;

  const { channelTitle, publishedAt, title, thumbnails, description } =
    video && video.snippet ? video.snippet : {};
  const { videoId, channelId } = video && video.id ? video.id : {};

  const videoImageUrl =
    thumbnails && thumbnails.high ? thumbnails.high.url : "";

  return (
    <Link
      to={videoId ? `/watch/${videoId}` : `/channel/${channelId}`}
      style={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          cursor: "pointer",
          display: "flex",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "360px",
            height: "202px",
            marginRight: theme.spacing(2),
            flexShrink: 0,
            borderRadius: channelId ? "50%" : 0,

            [theme.breakpoints.down("sm")]: {
              width: "100%",
              height: "202px",
            },
          }}
          image={videoImageUrl}
          alt="Video thumbnails"
        />
        <div>
          <SearchItemTitle>{title}</SearchItemTitle>
          <Box sx={{ marginTop: theme.spacing(0.5) }}>
            <SearchItemSubTitle>
              {formatTime(publishedAt)} trước
            </SearchItemSubTitle>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: theme.spacing(2),
            }}
          >
            <Avatar
              sx={{ width: 24, height: 24, marginRight: theme.spacing(1) }}
              src={videoImageUrl}
            />
            <Tooltip title={channelTitle}>
              <SearchItemSubTitle>{channelTitle}</SearchItemSubTitle>
            </Tooltip>
          </Box>

          <SearchItemDescription>{description}</SearchItemDescription>
        </div>
      </Card>
    </Link>
  );
}

export default SearchItem;
