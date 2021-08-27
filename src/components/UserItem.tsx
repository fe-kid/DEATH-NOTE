/* eslint-disable react-hooks/exhaustive-deps */
import { User } from '../types';
import styled from 'styled-components';
import VictimList from './VictimList';
import { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const StyledUserItem = styled.div<{ isIdSame: boolean }>`
  background-color: ${(props) => (props.isIdSame ? '#888' : '#555')};
  border: ${(props) => (props.isIdSame ? '5px solid #ddd' : 'none')};
  color: ${(props) => (props.isIdSame ? '#222' : '#ccc')};
  border-radius: 20px;
  box-sizing: content-box;
  position: relative;
  padding: 20px;
  margin: 30px 20px;
  display: flex;
  & > span {
    background-color: #222;
    color: #ccc;
    display: block;
    width: 50px;
    height: 50px;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
  }
  & > div {
    margin-left: 30px;
    h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    span {
      font-size: 18px;
      display: block;
      margin-bottom: 10px;
    }
  }
`;

const UserItem: React.FC<{ user: User; idx: number }> = ({ user, idx }) => {
  const [showVictims, setShowVictims] = useState(false);
  const [isIdSame, setIsIdSame] = useState(false);
  const authState = useTypedSelector((state) => state.auth);

  const toggleShowVictimHandler = () => {
    setShowVictims((prev) => !prev);
  };

  useEffect(() => {
    if (authState) {
      setIsIdSame(user.id === authState.id);
    }
  }, [authState]);

  return (
    <StyledUserItem isIdSame={isIdSame}>
      <span>{idx}</span>
      <div>
        <h3>{`이름 : ${user.username}`}</h3>
        <span>{`최고 점수 : ${user.killedCount}`}</span>
        <span
          onMouseOver={toggleShowVictimHandler}
          onMouseLeave={toggleShowVictimHandler}
        >{`응징한 범죄자 : ${user.victims.length}`}</span>
      </div>
      {showVictims && <VictimList victims={user.victims} />}
    </StyledUserItem>
  );
};

export default UserItem;
