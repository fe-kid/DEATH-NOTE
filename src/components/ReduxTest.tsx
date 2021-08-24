import { useDispatch } from 'react-redux';
import { ActionType, useTypedSelector as useSelector } from '../state/store';
import { googleSignIn } from '../apis/firebase/fb.auth';
import { useEffect } from 'react';
import { deleteAccountDB, signInUserDB } from '../apis/firebase/fb.store';

const ReduxTest = () => {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  const signInHandler = async () => {
    const user = await googleSignIn();

    if (user) {
      const dbResponse = await signInUserDB(user.displayName!, user.email!);

      dispatch({
        type: ActionType.SIGN_IN,
        payload: dbResponse,
      });
    }
  };

  const signOutHandler = () => {
    dispatch({ type: ActionType.SIGN_OUT });
  };

  const deleteAccountHandler = () => {
    deleteAccountDB(authUser!.id);
    signOutHandler();
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
      {authUser && (
        <button onClick={deleteAccountHandler}>Delete Account</button>
      )}
    </>
  );
};

export default ReduxTest;
