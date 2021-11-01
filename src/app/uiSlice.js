import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import videoApi from "apis/videos/videoApi";

const initialState = {
  isShowSideBar: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSideBar: (state, action) => {
      state.isShowSideBar = !state.isShowSideBar;
    },

    closeSideBar: (state, action) => {
      state.isShowSideBar = false;
    },
  },
});

//Actions
export const { toggleSideBar, closeSideBar } = uiSlice.actions;

export default uiSlice.reducer;