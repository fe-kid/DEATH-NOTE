import { Post } from '../../types';
import { ActionType } from '../action-types';
import { Actions } from '../actions';

type CommunityState = {
  loading: boolean;
  error: string | null;
  data: Post[];
};

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const communityReducer = (
  state: CommunityState = initialState,
  action: Actions
): CommunityState => {
  switch (action.type) {
    case ActionType.FETCH_COMMUNITY:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_COMMUNITY_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_COMMUNITY_FAILURE:
      return { loading: false, error: action.payload, data: [] };
    case ActionType.ADD_POST:
      return {
        loading: false,
        error: null,
        data: [...state.data, action.payload],
      };
    case ActionType.DELETE_POST:
      return {
        loading: false,
        error: null,
        data: state.data.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};
