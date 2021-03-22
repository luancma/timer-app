import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserByEmail } from '../../services/users';

const initialState = {
  name: '',
  email: '',
  isLoged: false,
};

export const fetchUserToLogin = createAsyncThunk(
  'user/fetchUserToLogin',
  async ({ email, password }, thunkAPI) =>
    await getUserByEmail({ email, password })
      .then(response => response)
      .catch(error => {
        console.error(error.response);
      }),
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment(state) {
      console.log(state);
    },
    logout(state, action) {
      (state.name = ''), (state.email = ''), (state.isLoged = false);
    },
    decrement(state) {
      console.log(state);
    },
  },
  extraReducers: {
    [fetchUserToLogin.fulfilled]: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoged = true;
    },
    [fetchUserToLogin.rejected]: (state, action) => {
      console.log('error');
      //   state.entities.push(action.payload);
    },
  },
});

export const { increment, decrement, logout } = userSlice.actions;
export default userSlice.reducer;
