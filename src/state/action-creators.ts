import { Dispatch } from 'redux';
import fb from '../apis/firebase/fb';
import { User } from '../types';
import { ActionType } from './action-types';

const db = fb.firestore();

export const signIn = (username: string, email: string) => {
  return async (dispatch: Dispatch) => {
    let userVar: any;

    const findResponse = await db
      .collection('users')
      .where('email', '==', email)
      .get();

    if (!findResponse.empty) {
      findResponse.forEach((doc) => {
        userVar = {
          id: doc.id,
          ...doc.data(),
        };
      });
    } else {
      const addResponse = await db.collection('users').add({
        username,
        email,
        killedCount: 0,
        victims: [],
        postings: [],
      });

      userVar = {
        id: addResponse.id,
        username,
        email,
        killedCount: 0,
        victims: [],
        postings: [],
      };
    }

    dispatch({
      type: ActionType.SIGN_IN,
      payload: userVar,
    });
  };
};

export const signOut = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionType.SIGN_OUT });
  };
};

export const deleteAccount = (id: string) => {
  return (dispatch: Dispatch) => {
    db.collection('users').doc(id).delete();
    dispatch({ type: ActionType.SIGN_OUT });
  };
};

export const FetchRanking = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.FETCH_RANKING,
    });

    try {
      const res = await db
        .collection('users')
        .orderBy('killedCount', 'desc')
        .get();
      const userList = res.docs.map((doc) => {
        return { ...(doc.data() as User), id: doc.id };
      });

      dispatch({
        type: ActionType.FETCH_RANKING_SUCCESS,
        payload: userList,
      });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_RANKING_SUCCESS,
        payload: err.message,
      });
    }
  };
};
