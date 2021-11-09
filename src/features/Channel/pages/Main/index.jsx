import { Avatar, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { openSideBar } from "app/uiSlice";
import SideBar from "components/SideBar";
import {
  fetchChannelById,
  fetchVideosOfChannel,
} from "features/Channel/channelSlice";
import ChannelVideoList from "features/Channel/components/List";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { ChannelHeading } from "./styledComponent";
import { ChannelPageContainer } from "./styledComponent";

ChannelMainPage.propTypes = {};

function ChannelMainPage(props) {
  const theme = useTheme();
  const match = useRouteMatch();
  const id = match.params.id;
  const dispatch = useDispatch();
  const channel = useSelector((state) => state.channel.channel);
  const videos = useSelector((state) => state.channel.videos);

  const isShowSideBar = useSelector((state) => state.ui.isShowSideBar);

  const { title, thumbnails } =
    channel && channel.snippet ? channel.snippet : {};
  const { subscriberCount } =
    channel && channel.statistics ? channel.statistics : {};

  const thumbnailsUrl =
    thumbnails && thumbnails.default ? thumbnails.default.url : "";

  useEffect(() => {
    dispatch(openSideBar());

    dispatch(
      fetchChannelById({
        channelId: id,
      })
    );

    dispatch(
      fetchVideosOfChannel({
        channelId: id,
      })
    );
  }, [dispatch, id]);

  return (
    <ChannelPageContainer show={isShowSideBar.toString()}>
      <SideBar show={isShowSideBar} bg={thumbnailsUrl} />
      <ChannelHeading>
        <Avatar
          src={thumbnailsUrl}
          sx={{ width: 60, height: 60, marginRight: theme.spacing(2) }}
        />
        <div>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body1" component="div">
            {`${subscriberCount} người đăng ký`}
          </Typography>
        </div>
      </ChannelHeading>
      <Box sx={{ padding: theme.spacing(2) }}>
        <Typography
          variant="h6"
          component="h4"
          sx={{ marginBottom: theme.spacing(2) }}
        >
          Video đã tải lên
        </Typography>
        <ChannelVideoList videos={videos} />
      </Box>
    </ChannelPageContainer>
  );
}

export default ChannelMainPage;
