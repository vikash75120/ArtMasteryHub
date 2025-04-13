// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import configurationReducer from './slices/configurationSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    configuration: configurationReducer,
  },
});
