import { User } from '../types';
import { ActionType } from './action-types';

interface SignInAction {
  type: ActionType.SIGN_IN;
  payload: User;
}

interface SignOutAction {
  type: ActionType.SIGN_OUT;
}

export type Actions = SignInAction | SignOutAction;
