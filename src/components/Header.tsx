import { useActions } from '../hooks/useActions';
import { useTypedSelector as useSelector } from '../hooks/useTypedSelector';
import { googleSignIn } from '../apis/firebase/fb.auth';

const Header = () => {
  const authUser = useSelector((state) => state.auth);
  const { signInAction, signOutAction, deleteAccountAction } = useActions();

  const signInHandler = async () => {
    const user = await googleSignIn();

    if (user) {
      signInAction(user.displayName!, user.email!);
    }
  };

  return (
    <>
      <header>
        <p>Logo</p>
        {!authUser && <button onClick={signInHandler}>Sign In</button>}
        {authUser && (
          <div>
            <p>{authUser.email}</p>
            <div>
              <button onClick={signOutAction}>Sign Out</button>
              <button onClick={deleteAccountAction.bind(null, authUser.id)}>
                Delete Account
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
