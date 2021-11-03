import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentApi from "apis/commentApi";
import videoApi from "apis/videoApi";

const initialState = {
  isLoading: false,
  videos: [],
  nextPageToken: null,
  error: "",
};

export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideosSlice/fetchRelatedVideos",
  async (params) => {
    const response = await videoApi.getRelatedVideos({
      part: ["snippet"],
      relatedToVideoId: params.videoId,
      maxResults: 20,
      type: "video",
      order: "relevance",
      key: process.env.REACT_APP_API_KEY,
      pageToken: (params && params.pageToken) || null,
    });

    return response.data;
  }
);

export const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRelatedVideos.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    },
    [fetchRelatedVideos.fulfilled]: (state, action) => {
      return {
        isLoading: false,
        videos: [...state.videos, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
        error: "",
      };
    },
    [fetchRelatedVideos.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message,
      };
    },
  },
});

//Actions
//export const {} = relatedVideosSlice.actions;

export default relatedVideosSlice.reducer;
