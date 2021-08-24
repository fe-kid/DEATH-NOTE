import { useDispatch } from 'react-redux';
import { ActionType, useTypedSelector as useSelector } from '../state/store';
import { googleSignIn } from '../apis/firebase/fb.auth';
import { useEffect } from 'react';
import { manageUserDB } from '../apis/firebase/fb.store';

const ReduxTest = () => {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  const signInHandler = async () => {
    const user = await googleSignIn();

    if (user) {
      const dbResponse = await manageUserDB(user.displayName!, user.email!);

      let userVar: any;

      if (!dbResponse) {
        userVar = dbResponse;
      } else {
        userVar = {
          username: user?.displayName,
          email: user.email,
          victims: [],
          postings: [],
        };
      }

      dispatch({
        type: ActionType.SIGN_IN,
        payload: userVar,
      });
    }
  };

  const signOutHandler = () => {
    dispatch({ type: ActionType.SIGN_OUT });
  };

  useEffect(() => {
    console.log(authUser);
  }, [authUser]);

  return (
    <>
      <h1>Redux Test</h1>
      {!authUser && <button onClick={signInHandler}>Sign In</button>}
      {authUser && <p>{authUser.email}</p>}
      {authUser && <button onClick={signOutHandler}>Sign Out</button>}
    </>
  );
};

export default ReduxTest;
