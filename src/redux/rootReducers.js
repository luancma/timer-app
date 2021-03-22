import { combineReducers } from 'redux';
import breaksSlice from './slices/breaksSlice';
import normalWorkSlice from './slices/normalWorkSlice';
import userSlice from './slices/user';

const reducer = combineReducers({
  user: userSlice,
  workTime: normalWorkSlice,
  breaksSlice,
});

export { reducer };
