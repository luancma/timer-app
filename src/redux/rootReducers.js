import { combineReducers } from "redux";
import userSlice from './slices/user'

const reducer = combineReducers({
  user: userSlice,
});

export { reducer }