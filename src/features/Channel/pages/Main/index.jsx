import SideBar from "components/SideBar";
import { fetchChannelById } from "features/Channel/channelSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { ChannelPageContainer } from "./styledComponent";

ChannelMainPage.propTypes = {};

function ChannelMainPage(props) {
  const match = useRouteMatch();
  const id = match.params.id;
  const dispatch = useDispatch();
  const channel = useSelector((state) => state.channel.channel);

  const isShowSideBar = useSelector((state) => state.ui.isShowSideBar);

  const { title, thumbnails } =
    channel && channel.snippet ? channel.snippet : {};
  const { subscriberCount } =
    channel && channel.statistics ? channel.statistics : {};

  const thumbnailsUrl =
    thumbnails && thumbnails.default ? thumbnails.default.url : "";

  useEffect(() => {
    dispatch(
      fetchChannelById({
        channelId: id,
      })
    );
  }, [dispatch, id]);

  return (
    <ChannelPageContainer show={isShowSideBar.toString()}>
      <SideBar show={isShowSideBar} bg={thumbnailsUrl} />
    </ChannelPageContainer>
  );
}

export default ChannelMainPage;
