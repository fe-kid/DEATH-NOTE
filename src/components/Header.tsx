import { useActions } from '../hooks/useActions';
import { useTypedSelector as useSelector } from '../hooks/useTypedSelector';
import { googleSignIn } from '../apis/firebase/fb.auth';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const StyledHeader = styled.header`
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 80px;
  a {
    color: inherit;
    text-decoration: none;
    h1 {
      font-size: 30px;
      color: #fff;
    }
  }
  button {
    background-color: #fff;
    border: 3px solid #000;
    border-radius: 30px;
    width: 100px;
    padding: 5px 0;
    font-size: 16px;
    cursor: pointer;
  }
  span {
    cursor: pointer;
    font-size: 24px;
    color: #fff;
  }
  & > div {
    position: relative;
    width: 240px;
    text-align: center;
    div {
      background-color: #222;
      border-radius: 30px;
      border: 4px solid #555;
      position: absolute;
      top: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 20px 0;
      button:first-of-type {
        margin-right: 20px;
      }
    }
  }
`;

/* -------------------------------------------------------------------------- */

const Header = () => {
  const authUser = useSelector((state) => state.auth);
  const { signInAction, signOutAction, deleteAccountAction } = useActions();
  const [showUserOption, setShowUserOption] = useState(false);

  const signInHandler = async () => {
    const user = await googleSignIn();

    if (user) {
      signInAction(user.displayName!, user.email!);
    }
  };

  const userClickHandler = () => {
    setShowUserOption((prev) => !prev);
  };

  return (
    <>
      <StyledHeader>
        <Link to="/">
          <h1>DEATH NOTE</h1>
        </Link>
        {!authUser && <button onClick={signInHandler}>Sign In</button>}
        {authUser && (
          <div>
            <span onClick={userClickHandler}>{authUser.username}</span>
            {showUserOption && (
              <div>
                <button onClick={signOutAction}>Sign Out</button>
                <button onClick={deleteAccountAction.bind(null, authUser.id)}>
                  Delete Account
                </button>
              </div>
            )}
          </div>
        )}
      </StyledHeader>
    </>
  );
};

export default Header;
