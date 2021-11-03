import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import videoApi from "apis/videoApi";

const initialState = {
  isLoading: false,
  videos: [],
  nextPageToken: null,
  error: "",
};

export const fetchPopularVideos = createAsyncThunk(
  "video/fetchPopularVideos",
  async (params) => {
    const response = await videoApi.getVideos({
      part: ["id", "snippet", "statistics"],
      chart: "mostPopular",
      maxResults: 40,
      regionCode: "VN",
      key: process.env.REACT_APP_API_KEY,
      pageToken: (params && params.pageToken) || null,
    });

    return response.data;
  }
);

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPopularVideos.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    },
    [fetchPopularVideos.fulfilled]: (state, action) => {
      return {
        isLoading: false,
        videos: [...state.videos, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
        error: "",
      };
    },
    [fetchPopularVideos.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message,
      };
    },
  },
});

//Actions
//export const {} = videoSlice.actions;

export default videoSlice.reducer;
