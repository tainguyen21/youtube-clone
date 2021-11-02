import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { Button, Grid, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { closeSideBar } from "app/uiSlice";
import * as Colors from "assets/styles/colors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import {
  VideoContainer,
  VideoHeading,
  VideoTitle,
  WatchPageContainer,
} from "./styledComponent";

WatchVideopage.propTypes = {};

function WatchVideopage(props) {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { id } = match.params;
  const video = useSelector((state) =>
    state.video.videos.find((item) => item.id === id)
  );

  const iframeVideo = video ? video.player.embedHtml : "<div>123</div>";

  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  console.log(video);

  return (
    <WatchPageContainer>
      <Grid container spacing={3} sx={{ overflowY: "scroll" }}>
        <Grid item xs={8}>
          <VideoContainer dangerouslySetInnerHTML={{ __html: iframeVideo }} />
          <VideoTitle>
            {video && video.snippet && video.snippet.title}
          </VideoTitle>
          <VideoHeading>
            <Typography variant="body2" component="div">
              {`${
                video && video.statistics && video.statistics.viewCount
              } lượt xem * ${
                video && video.snippet && video.snippet.publishedAt
              }`}
            </Typography>
            <Box>
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
        </Grid>
        <Grid item xs={4}>
          123
        </Grid>
      </Grid>
    </WatchPageContainer>
  );
}

export default WatchVideopage;
