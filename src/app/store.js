import { configureStore } from "@reduxjs/toolkit";
import channelSlice from "features/Channel/channelSlice";
import searchSlice from "features/Search/searchSlice";
import categorySlice from "features/Videos/categorySlice";
import commentsSlice from "features/Videos/commentsSlice";
import videoSlice from "features/Videos/popularVideoSlice";
import relatedVideoSlice from "features/Videos/relatedVideoSlice";
import watchVideoSlice from "features/Videos/watchVideoSlice";
import uiSlice from "./uiSlice";

export const store = configureStore({
  reducer: {
    video: videoSlice,
    ui: uiSlice,
    comments: commentsSlice,
    relatedVideos: relatedVideoSlice,
    watchVideo: watchVideoSlice,
    searchVideo: searchSlice,
    category: categorySlice,
    channel: channelSlice,
  },
});
