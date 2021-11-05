import { Tooltip, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { CardInfo, CardTitle, StyledCardContent } from "./styledComponent";

VideosCard.propTypes = {
  video: PropTypes.object,
};

VideosCard.defaultProps = {
  video: {},
};

function VideosCard(props) {
  const { video } = props;
  const theme = useTheme();

  return (
    <Link to={`/watch/${video.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          cursor: "pointer",
        }}
      >
        <CardMedia
          component="img"
          height="175"
          image={video.snippet.thumbnails.high.url}
          alt="Video thumbnails"
        />

        <StyledCardContent>
          <Link to={`/channel/${video.snippet.channelId}`}>
            <Avatar
              alt="Channel"
              src={video.snippet.thumbnails.default.url}
              sx={{ width: 36, height: 36 }}
            />
          </Link>
          <Box sx={{ marginLeft: theme.spacing(2), overflow: "hidden" }}>
            <CardTitle>{video.snippet.title}</CardTitle>
            <Link
              to={`/channel/${video.snippet.channelId}`}
              style={{ textDecoration: "none" }}
            >
              <Tooltip title={video.snippet.channelTitle}>
                <CardInfo>{video.snippet.channelTitle}</CardInfo>
              </Tooltip>
            </Link>
            <CardInfo>{video.statistics.viewCount} lượt xem</CardInfo>
            <CardInfo>{video.snippet.publishedAt}</CardInfo>
          </Box>
        </StyledCardContent>
      </Card>
    </Link>
  );
}

export default VideosCard;
