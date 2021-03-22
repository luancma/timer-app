import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPaused: true,
  seconds: 0,
  days: 0,
};

const normalWorkSlice = createSlice({
  name: 'workSlice',
  initialState,
  reducers: {
    startCount(state) {
      state.isPaused = false;
    },
    resetCount(state) {
      state.seconds = 0;
      state.isPaused = true;
    },
    incrementSeconds(state) {
      if (!state.isPaused) {
        const incrementSecond = state.seconds + 1;
        state.seconds = incrementSecond;
      }
    },
  },
});

export const {
  startCount,
  incrementSeconds,
  resetCount,
} = normalWorkSlice.actions;
export default normalWorkSlice.reducer;
