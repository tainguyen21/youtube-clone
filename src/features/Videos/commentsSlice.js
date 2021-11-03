import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentApi from "apis/commentApi";

const initialState = {
  isLoading: false,
  comments: [],
  nextPageToken: null,
  error: "",
  id: null,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (params) => {
    const response = await commentApi.getComments({
      part: ["id", "snippet"],
      videoId: params.videoId,
      maxResults: 20,
      order: "relevance",
      key: process.env.REACT_APP_API_KEY,
      pageToken: (params && params.pageToken) || null,
    });

    return {
      ...response.data,
      id: params.videoId,
    };
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
        comments:
          state.id === action.payload.id
            ? [...state.comments, ...action.payload.items]
            : [...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
        error: "",
        id: action.payload.id,
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
