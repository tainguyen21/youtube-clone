import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentApi from "apis/commentApi";

const initialState = {
  isLoading: false,
  comments: [],
  nextPageToken: null,
  error: "",
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (params) => {
    const response = await commentApi.getComments({
      part: ["id", "replies", "snippet"],
      videoId: params.videoId,
      maxResults: 20,
      order: "relevance",
      key: process.env.REACT_APP_API_KEY,
      pageToken: (params && params.pageToken) || null,
    });

    return response.data;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchComments.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    },
    [fetchComments.fulfilled]: (state, action) => {
      return {
        isLoading: false,
        comments: [...state.comments, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
        error: "",
      };
    },
    [fetchComments.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message,
      };
    },
  },
});

//Actions
//export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
