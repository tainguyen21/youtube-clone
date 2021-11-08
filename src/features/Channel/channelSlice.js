import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import channelApi from "apis/channenlApi";
import searchApi from "apis/searchApi";

const initialState = {
  isLoading: false,
  channel: {},
  error: "",
  videos: [],
};

export const fetchChannelById = createAsyncThunk(
  "channel/fetchChannelById",
  async (params) => {
    const response = await channelApi.fetchChannelById({
      part: ["snippet", "statistics"],
      id: params.channelId,
      key: process.env.REACT_APP_API_KEY,
    });

    return response.data;
  }
);

export const fetchVideosOfChannel = createAsyncThunk(
  "channel/fetchVideosOfChannel",
  async (params) => {
    const response = await searchApi.fetchVideosOfChannel({
      part: ["snippet"],
      channelId: params.channelId,
      maxResults: 10,
      type: "video",
      key: process.env.REACT_APP_API_KEY,
    });

    return response.data;
  }
);

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchChannelById.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    },
    [fetchChannelById.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        channel: action.payload.items[0],
        error: "",
      };
    },
    [fetchChannelById.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message,
      };
    },
    [fetchVideosOfChannel.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    },
    [fetchVideosOfChannel.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        videos: action.payload.items,
      };
    },
    [fetchVideosOfChannel.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message,
      };
    },
  },
});

//Actions
// export const {  } = channelSlice.actions;

export default channelSlice.reducer;
