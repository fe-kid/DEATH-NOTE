import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { communityReducer } from './communityReducer';
import { rankingReducer } from './rankingReducer';

const reducers = combineReducers({
  auth: authReducer,
  community: communityReducer,
  ranking: rankingReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
