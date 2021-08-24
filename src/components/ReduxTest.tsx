import { useDispatch } from 'react-redux';
import { ActionType, useTypedSelector as useSelector } from '../state/store';
import { googleSignIn, googleSignOut } from '../apis/firebase/fb.auth';
import { useEffect } from 'react';

const ReduxTest = () => {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  const signInHandler = async () => {
    const user = await googleSignIn();
    if (user) {
      dispatch({
        type: ActionType.SIGN_IN,
        payload: {
          username: user?.displayName,
          email: user.email,
          victims: [{ name: 'dude', img: 'no image' }],
          postings: ['p1', 'p2'],
        },
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
      {authUser && 'user exists'}
      {authUser && <button onClick={signOutHandler}>Sign Out</button>}
    </>
  );
};

export default ReduxTest;
