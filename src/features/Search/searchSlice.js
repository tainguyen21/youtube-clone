import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchApi from "apis/searchApi";

const initialState = {
  isLoading: false,
  videos: [],
  nextPageToken: null,
  error: "",
};

export const searchByKeyWord = createAsyncThunk(
  "search/searchByKeyWord",
  async (params) => {
    const response = await searchApi.searchByKeyWord({
      part: ["snippet"],
      q: params.keyword,
      maxResults: 10,
      regionCode: "VN",
      key: process.env.REACT_APP_API_KEY,
      pageToken: (params && params.pageToken) || null,
    });

    return response.data;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: {
    [searchByKeyWord.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    },
    [searchByKeyWord.fulfilled]: (state, action) => {
      return {
        isLoading: false,
        videos: action.payload.items,
        nextPageToken: action.payload.nextPageToken,
        error: "",
      };
    },
    [searchByKeyWord.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message,
      };
    },
  },
});

//Actions
//export const {} = searchSlice.actions;

export default searchSlice.reducer;
