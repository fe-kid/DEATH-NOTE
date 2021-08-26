import { Post, User, Victim } from '../types';
import { ActionType } from './action-types';

interface SignInAction {
  type: ActionType.SIGN_IN;
  payload: User;
}

interface SignOutAction {
  type: ActionType.SIGN_OUT;
}

interface UpdateKilledCountAction {
  type: ActionType.UPDATE_KILLED_COUNT;
  payload: number;
}

interface UpdateVictimsAction {
  type: ActionType.UPDATE_VICTIMS;
  payload: Victim[];
}

interface AddUserPostingAction {
  type: ActionType.ADD_USER_POSTING;
  payload: string;
}

interface DeleteUserPostingAction {
  type: ActionType.DELETE_USER_POSTING;
  payload: string;
}

interface FetchRankingAction {
  type: ActionType.FETCH_RANKING;
}

interface FetchRankingSuccessAction {
  type: ActionType.FETCH_RANKING_SUCCESS;
  payload: User[];
}
interface FetchRankingFailureAction {
  type: ActionType.FETCH_RANKING_FAILURE;
  payload: string;
}

interface FetchCommunityAction {
  type: ActionType.FETCH_COMMUNITY;
}

interface FetchCommunitySuccessAction {
  type: ActionType.FETCH_COMMUNITY_SUCCESS;
  payload: Post[];
}

interface FetchCommunityFailureAction {
  type: ActionType.FETCH_COMMUNITY_FAILURE;
  payload: string;
}

interface AddPostAction {
  type: ActionType.ADD_POST;
  payload: Post;
}

interface DeletePostAction {
  type: ActionType.DELETE_POST;
  payload: string;
}

export type Actions =
  | SignInAction
  | SignOutAction
  | UpdateKilledCountAction
  | UpdateVictimsAction
  | AddUserPostingAction
  | DeleteUserPostingAction
  | FetchRankingAction
  | FetchRankingSuccessAction
  | FetchRankingFailureAction
  | FetchCommunityAction
  | FetchCommunitySuccessAction
  | FetchCommunityFailureAction
  | AddPostAction
  | DeletePostAction;
