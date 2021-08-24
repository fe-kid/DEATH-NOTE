import { createStore } from 'redux';

interface User {
  username: string;
  email: string;
  score: number;
  postIds: string[];
}

interface AuthState {
  loading: boolean;
  error: string | null;
  authUser: User | null;
}

enum ActionType {
  SIGN_IN = '로그인 요청',
  SIGN_IN_SUCCESS = '로그인 성공',
  SIGN_IN_ERROR = '로그인 실패',
  SIGN_OUT = '로그아웃',
}

interface SignInAction {
  type: ActionType.SIGN_IN;
}

interface SignInSuccessAction {
  type: ActionType.SIGN_IN_SUCCESS;
  payload: User;
}

interface SignInErrorAction {
  type: ActionType.SIGN_IN_ERROR;
  payload: string;
}

interface SignOutAction {
  type: ActionType.SIGN_OUT;
}

type Actions =
  | SignInAction
  | SignInSuccessAction
  | SignInErrorAction
  | SignOutAction;

const initialState = {
  loading: false,
  error: null,
  authUser: null,
};

const userReducer = (
  state: AuthState = initialState,
  action: Actions
): AuthState => {
  switch (action.type) {
    case ActionType.SIGN_IN:
      return { loading: true, error: null, authUser: null };
    case ActionType.SIGN_IN_SUCCESS:
      return { loading: false, error: null, authUser: action.payload };
    case ActionType.SIGN_IN_ERROR:
      return { loading: false, error: action.payload, authUser: null };
    case ActionType.SIGN_OUT:
      return { loading: false, error: null, authUser: null };
    default:
      return state;
  }
};

export const store = createStore(userReducer);
