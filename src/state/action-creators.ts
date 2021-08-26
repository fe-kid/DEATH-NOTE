import { Dispatch } from 'redux';
import fb from '../apis/firebase/fb';
import { Post, User, Victim } from '../types';
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

    window.sessionStorage.setItem('username', userVar.username);
    window.sessionStorage.setItem('email', userVar.email);

    dispatch({
      type: ActionType.SIGN_IN,
      payload: userVar,
    });
  };
};

export const signOut = () => {
  return (dispatch: Dispatch) => {
    window.sessionStorage.removeItem('user');
    dispatch({ type: ActionType.SIGN_OUT });
  };
};

export const deleteAccount = (id: string) => {
  return (dispatch: Dispatch) => {
    db.collection('users').doc(id).delete();
    window.sessionStorage.removeItem('user');
    dispatch({ type: ActionType.SIGN_OUT });
  };
};

export const updateKilledCount = (id: string, killedCount: number) => {
  return async (dispatch: Dispatch) => {
    try {
      db.collection('users').doc(id).update({
        killedCount: killedCount,
      });
      dispatch({ type: ActionType.UPDATE_KILLED_COUNT, payload: killedCount });
    } catch (err) {
      // 에러 처리 업데이트 예정
      console.log(err);
    }
  };
};

export const updateVictims = (id: string, victims: Victim[]) => {
  return async (dispatch: Dispatch) => {
    try {
      db.collection('users').doc(id).update({
        victims: victims,
      });
      dispatch({ type: ActionType.UPDATE_VICTIMS, payload: victims });
    } catch (err) {
      // 에러 처리 업데이트 예정
      console.log(err);
    }
  };
};

export const fetchCommunity = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.FETCH_COMMUNITY,
    });

    try {
      const res = await db
        .collection('posts')
        .orderBy('writtenDate', 'desc')
        .get();
      const postList = res.docs.map((doc) => {
        return { ...(doc.data() as Post), id: doc.id };
      });

      dispatch({
        type: ActionType.FETCH_COMMUNITY_SUCCESS,
        payload: postList,
      });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_COMMUNITY_FAILURE,
        payload: err.message,
      });
    }
  };
};

export const addPost = (
  username: string,
  userId: string,
  content: string,
  userPostings: string[]
) => {
  return async (dispatch: Dispatch) => {
    try {
      const postObjForDB = {
        writtenDate: new Date(),
        writtenUserName: username,
        writtenUserId: userId,
        content: content,
      };

      const res = await db.collection('posts').add(postObjForDB);
      db.collection('users')
        .doc(userId)
        .update({
          postings: [...userPostings, res.id],
        });

      const newPostObj = {
        ...postObjForDB,
        id: res.id,
      };

      dispatch({ type: ActionType.ADD_POST, payload: newPostObj });
      dispatch({ type: ActionType.ADD_USER_POSTING, payload: res.id });
    } catch (err) {
      // 에러 처리 업데이트 예정
      console.log(err);
    }
  };
};

export const deletePost = (
  postId: string,
  userId: string,
  updatedPostings: string[]
) => {
  return (dispatch: Dispatch) => {
    try {
      db.collection('posts').doc(postId).delete();
      db.collection('users').doc(userId).update({
        postings: updatedPostings,
      });

      dispatch({ type: ActionType.DELETE_USER_POSTING, payload: postId });
      dispatch({ type: ActionType.DELETE_POST, payload: postId });
    } catch (err) {
      // 에러 처리 업데이트 예정
      console.log(err);
    }
  };
};

export const fetchRanking = () => {
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
        type: ActionType.FETCH_RANKING_FAILURE,
        payload: err.message,
      });
    }
  };
};
