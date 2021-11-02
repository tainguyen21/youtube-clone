import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "features/Videos/commentsSlice";
import videoSlice from "features/Videos/popularVideoSlice";
import uiSlice from "./uiSlice";

export const store = configureStore({
  reducer: {
    video: videoSlice,
    ui: uiSlice,
    comments: commentsSlice,
  },
});
