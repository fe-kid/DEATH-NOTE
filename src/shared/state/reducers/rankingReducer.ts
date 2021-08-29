import { Actions } from '../actions';
import { ActionType } from '../action-types';
import { User } from '../../types';

type RankingState = {
  loading: boolean;
  error: string | null;
  data: User[];
};

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const rankingReducer = (
  state: RankingState = initialState,
  action: Actions
): RankingState => {
  switch (action.type) {
    case ActionType.FETCH_RANKING:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_RANKING_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_RANKING_FAILURE:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
