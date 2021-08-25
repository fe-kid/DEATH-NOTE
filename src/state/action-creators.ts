import { Dispatch } from 'redux';
import fb from '../apis/firebase/fb';
import { ActionType } from './action-types';

const db = fb.firestore();

export const signInAction = (username: string, email: string) => {
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
        victims: [],
        postings: [],
      });

      userVar = {
        id: addResponse.id,
        username,
        email,
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

export const signOutAction = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ActionType.SIGN_OUT });
  };
};

export const deleteAccountAction = (id: string) => {
  return (dispatch: Dispatch) => {
    db.collection('users').doc(id).delete();
    dispatch({ type: ActionType.SIGN_OUT });
  };
};
