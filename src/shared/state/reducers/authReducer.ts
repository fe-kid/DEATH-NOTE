import { Actions } from '../actions';
import { ActionType } from '../action-types';
import { User } from '../../types';

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
    case ActionType.UPDATE_KILLED_COUNT:
      return { ...state, killedCount: action.payload } as authUser;
    case ActionType.UPDATE_VICTIMS:
      return { ...state, victims: action.payload } as authUser;
    case ActionType.ADD_USER_POSTING:
      return {
        ...state,
        postings: [...state!.postings, action.payload],
      } as authUser;
    case ActionType.DELETE_USER_POSTING:
      return {
        ...state,
        postings: state!.postings.filter((postId) => {
          return postId !== action.payload;
        }),
      } as authUser;
    default:
      return state;
  }
};
