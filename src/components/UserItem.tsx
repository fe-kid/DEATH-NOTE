import { User } from '../types';
import styled from 'styled-components';
import VictimList from './VictimList';
import { useState } from 'react';

const StyledUserItem = styled.div`
  background-color: #555;
  color: #ccc;
  position: relative;
  padding: 20px;
  margin: 10px;
  display: flex;
  & > span {
    background-color: #222;
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
    }
  }
`;

const UserItem: React.FC<{ user: User; idx: number }> = ({ user, idx }) => {
  const [showVictims, setShowVictims] = useState(false);

  const toggleShowVictimHandler = () => {
    setShowVictims((prev) => !prev);
  };

  return (
    <StyledUserItem>
      <span>{idx}</span>
      <div>
        <h3>{`name : ${user.username}`}</h3>
        <span
          onMouseOver={toggleShowVictimHandler}
          onMouseLeave={toggleShowVictimHandler}
        >{`killed : ${user.killedCount}`}</span>
      </div>
      {showVictims && <VictimList victims={user.victims} />}
    </StyledUserItem>
  );
};

export default UserItem;
