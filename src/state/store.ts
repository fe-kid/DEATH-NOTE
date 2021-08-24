import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { createStore } from 'redux';

interface Victim {
  name: string;
  img: string;
}

interface User {
  id: string;
  username: string;
  email: string;
  victims: Victim[];
  postings: string[];
}

interface AuthState {
  authUser: User | null;
}

export enum ActionType {
  SIGN_IN = '로그인 요청',
  SIGN_OUT = '로그아웃',
}

interface SignInAction {
  type: ActionType.SIGN_IN;
  payload: User;
}

interface SignOutAction {
  type: ActionType.SIGN_OUT;
}

type Actions = SignInAction | SignOutAction;

const initialState = {
  authUser: null,
};

const authReducer = (
  state: AuthState = initialState,
  action: Actions
): AuthState => {
  switch (action.type) {
    case ActionType.SIGN_IN:
      return { authUser: action.payload };
    case ActionType.SIGN_OUT:
      return { authUser: null };
    default:
      return state;
  }
};

type RootState = ReturnType<typeof authReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = createStore(authReducer);
