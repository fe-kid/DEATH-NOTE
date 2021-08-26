import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { rankingReducer } from './rankingReducer';
import { communityReducer } from './communityReducer';

const reducers = combineReducers({
  auth: authReducer,
  community: communityReducer,
  ranking: rankingReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
