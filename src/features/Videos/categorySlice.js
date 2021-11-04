import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "apis/categoryApi";

const initialState = {
  isLoading: false,
  category: [],

  error: "",
  id: null,
};

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async (params) => {
    const response = await categoryApi.fetchCategory({
      part: ["snippet"],
      regionCode: "VN",
      key: process.env.REACT_APP_API_KEY,
    });

    return response.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategory.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    },
    [fetchCategory.fulfilled]: (state, action) => {
      return {
        isLoading: false,
        category: action.payload.items,

        error: "",
      };
    },
    [fetchCategory.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.error.message,
      };
    },
  },
});

//Actions
//export const {} = categorySlice.actions;

export default categorySlice.reducer;
