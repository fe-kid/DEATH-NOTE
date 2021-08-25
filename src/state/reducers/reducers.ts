import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { rankingReducer } from './rankingReducer';

const reducers = combineReducers({
  auth: authReducer,
  ranking: rankingReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
