import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "features/Videos/popularVideoSlice";

export const store = configureStore({
  reducer: {
    video: videoSlice,
  },
});
