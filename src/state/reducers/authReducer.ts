import { User } from '../../types';
import { ActionType } from '../action-types';
import { Actions } from '../actions';

type authUser = User | null;

const initialState = null;

export const authReducer = (
  state: authUser = initialState,
  action: Actions
): authUser => {
  switch (action.type) {
    case ActionType.SIGN_IN:
      return action.payload;
    case ActionType.SIGN_OUT:
      return null;
    default:
      return state;
  }
};
