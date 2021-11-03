import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import videoApi from "apis/videoApi";

const initialState = {
  isLoading: false,
  video: {},
  error: "",
};

export const fetchVideoById = createAsyncThunk(
  "watchVideo/fetchVideoById",
  async (params) => {
    const response = await videoApi.getVideos({
      part: ["id", "player", "snippet", "statistics"],
      id: params.videoId,
      key: process.env.REACT_APP_API_KEY,
    });

    return response.data;
  }
);

export const watchVideoSlice = createSlice({
  name: "watchVideo",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchVideoById.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    },
    [fetchVideoById.fulfilled]: (state, action) => {
      return {
        isLoading: false,
        video: action.payload.items[0],
        error: "",
      };
    },
    [fetchVideoById.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message,
      };
    },
  },
});

//Actions
//export const {} = watchVideoSlice.actions;

export default watchVideoSlice.reducer;
