// store/slices/configurationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appSelection: {
      radio_checked: "unsplash",
    },
    librarySelection: {
      library_name: "abc",
    },
    timerSelection: {
      preparation_time: "00:00:30",
      rest_time: "00:00:30",
      round_time: "00:02:00",
    },
  };

const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setConfiguration: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setConfiguration } = configurationSlice.actions;
export default configurationSlice.reducer;
