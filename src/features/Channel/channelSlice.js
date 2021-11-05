import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import channelApi from "apis/channenlApi";

const initialState = {
  isLoading: false,
  channel: {},
  error: "",
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
  },
});

//Actions
// export const {  } = channelSlice.actions;

export default channelSlice.reducer;
