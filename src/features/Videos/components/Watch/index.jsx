import React, { useState } from "react";
import PropTypes from "prop-types";
import { VideoContainer } from "./styledComonent";
import { VideoTitle } from "./styledComonent";
import { VideoHeading } from "./styledComonent";
import { Avatar, Button, Grid, Tooltip, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import * as Colors from "assets/styles/colors";
import { Link } from "react-router-dom";
import { VideoDescription } from "./styledComonent";
import CommentBox from "../CommentBox";

VideoWatch.propTypes = {
  video: PropTypes.object,
  comments: PropTypes.array,
};

VideoWatch.defaultProps = {
  video: {},
  comments: [],
};

const descriptionStyle = {
  display: "-webkit-box",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "3",
  overflow: "hidden",
};

function VideoWatch(props) {
  const { video, comments } = props;
  const [showAllDescription, setShowAllDescription] = useState(false);
  const theme = useTheme();

  const iframeVideo =
    video && video.player ? video.player.embedHtml : "<div></div>";
  const channelAvatar =
    video && video.snippet ? video.snippet.thumbnails.standard.url : " ";
  const channelTitle =
    video && video.snippet ? video.snippet.channelTitle : " ";
  const channelDescription =
    video && video.snippet ? video.snippet.description : " ";
  const totalComments =
    video && video.statistics ? video.statistics.commentCoung : 0;
  const channelId = video && video.snippet ? video.snippet.channelId : " ";

  const handleShowDescriptionClick = () => {
    setShowAllDescription((state) => !state);
  };

  return (
    <div>
      <VideoContainer dangerouslySetInnerHTML={{ __html: iframeVideo }} />
      <VideoTitle>{video && video.snippet && video.snippet.title}</VideoTitle>
      <VideoHeading
        sx={{
          borderBottom: `1px solid ${Colors.grayBorderColor}`,
        }}
      >
        <Typography variant="body2" component="div">
          {`${
            video && video.statistics && video.statistics.viewCount
          } lượt xem * ${video && video.snippet && video.snippet.publishedAt}`}
        </Typography>

        <Box
          sx={{
            borderBottom: `3px solid ${Colors.blackColor}`,
            paddingBottom: theme.spacing(2),
          }}
        >
          <Tooltip title="Tôi thích video này">
            <Button
              sx={{ color: Colors.blackColor }}
              startIcon={<ThumbUpAltOutlinedIcon />}
            >
              {video && video.statistics && video.statistics.likeCount}
            </Button>
          </Tooltip>
          <Tooltip title="Tôi không thích video này">
            <Button
              sx={{ color: Colors.blackColor }}
              startIcon={<ThumbDownAltOutlinedIcon />}
            >
              {video && video.statistics && video.statistics.dislikeCount}
            </Button>
          </Tooltip>
        </Box>
      </VideoHeading>
      <Grid
        container
        spacing={2}
        sx={{
          padding: theme.spacing(3, 0),
          borderBottom: `1px solid ${Colors.grayBorderColor}`,
        }}
      >
        <Grid item sm={10} xs={12}>
          <Link
            to={`/channel/${channelId}`}
            style={{ textDecoration: "none", color: Colors.blackColor }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                src={channelAvatar}
                sx={{ width: "48px", height: "48px" }}
              />
              <Tooltip title={channelTitle}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginLeft: theme.spacing(2),
                  }}
                >
                  {channelTitle}
                </Typography>
              </Tooltip>
            </Box>
          </Link>
          <Box
            sx={{
              marginLeft: {
                sm: `calc(48px + ${theme.spacing(2)})`,
              },
              marginTop: theme.spacing(1),
              overflow: "hidden",
            }}
          >
            <VideoDescription
              desstyle={showAllDescription ? {} : descriptionStyle}
            >
              {channelDescription}
            </VideoDescription>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "12px",
                fontWeight: 500,
                cursor: "pointer",
              }}
              onClick={handleShowDescriptionClick}
            >
              {showAllDescription ? "Ẩn bớt" : "Hiện thêm"}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          sm={2}
          xs={12}
          sx={{
            textAlign: {
              sm: "end",
            },
          }}
        >
          <Button variant="contained" color="error">
            Đăng ký
          </Button>
        </Grid>
      </Grid>
      <CommentBox comments={comments} total={totalComments} />
    </div>
  );
}

export default VideoWatch;
