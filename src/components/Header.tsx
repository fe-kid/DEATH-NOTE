/* eslint-disable react-hooks/exhaustive-deps */
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { googleSignIn } from '../apis/firebase/fb.auth';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Heading from './Heading';
import SignButton from './SignButton';

const StyledHeader = styled.header`
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 80px;
  span {
    cursor: pointer;
    font-size: 1.6rem;
  }
  & > div {
    position: relative;
    text-align: center;
    margin-right: 20px;
    div {
      background-color: #222;
      border-radius: 30px;
      border: 4px solid #555;
      position: absolute;
      top: 40px;
      right: 0;
      width: 220px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 20px 10px;
      z-index: 100;
    }
  }
`;

/* -------------------------------------------------------------------------- */

const Header = () => {
  const authUser = useTypedSelector((state) => state.auth);
  const { signIn, signOut, deleteAccount } = useActions();
  const [showUserOption, setShowUserOption] = useState(false);

  useEffect(() => {
    const sessionUsername = window.sessionStorage.getItem('username');
    const sessionEmail = window.sessionStorage.getItem('email');
    if (sessionUsername && sessionEmail) {
      signIn(sessionUsername, sessionEmail);
    }
  }, []);

  const signInHandler = async () => {
    const user = await googleSignIn();

    if (user) {
      signIn(user.displayName!, user.email!);
      setShowUserOption(false);
    }
  };

  return (
    <>
      <StyledHeader>
        <Heading />
        {!authUser && <SignButton onClick={signInHandler}>Sign In</SignButton>}
        {authUser && (
          <div>
            <span onClick={() => setShowUserOption((prev) => !prev)}>
              {authUser.username}
            </span>
            {showUserOption && (
              <div>
                <SignButton onClick={signOut}>Sign Out</SignButton>
                <SignButton onClick={deleteAccount.bind(null, authUser.id)}>
                  Delete Account
                </SignButton>
              </div>
            )}
          </div>
        )}
      </StyledHeader>
    </>
  );
};

export default Header;
