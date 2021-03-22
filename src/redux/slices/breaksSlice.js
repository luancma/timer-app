/* eslint-disable operator-assignment */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPaused: true,
  breaks: [],
  seconds: 0,
  days: 0,
};

const breaksSlice = createSlice({
  name: 'breaksSlice',
  initialState,
  reducers: {
    startBreakCounter(state) {
      state.isPaused = false;
    },
    resetBreakCount(state) {
      state.isPaused = true;
      state.seconds = 0;
      state.days = 0;
    },
    stopBreakCount(state) {
      state.isPaused = true;
      state.seconds = 0;
      state.days = 0;
    },
    incrementBreakSeconds(state) {
      if (!state.isPaused) {
        state.seconds = state.seconds + 1;
      }
    },
  },
});

export const {
  startBreakCounter,
  incrementBreakSeconds,
  resetBreakCount,
  stopBreakCount,
} = breaksSlice.actions;
export default breaksSlice.reducer;
