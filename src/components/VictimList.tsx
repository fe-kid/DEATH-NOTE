import { Victim } from '../types';
import VictimItem from './VictimItem';
import styled from 'styled-components';

const StyledVictimList = styled.ul`
  background-color: #555;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  border: 3px solid #777;
  position: absolute;
  top: 100%;
  z-index: 2000;
  h3 {
    font-size: 1.5rem;
    margin: 20px 0;
  }
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    p {
      font-size: 1.2rem;
      color: #000;
      padding: 20px;
    }
  }

  @media (max-width: 699px) {
    h3 {
      font-size: 1rem;
      margin: 10px 0;
    }
    div {
      p {
        font-size: 1rem;
        padding: 10px;
      }
    }
  }
`;

const VictimList: React.FC<{ victims: Victim[]; username: string }> = ({
  victims,
  username,
}) => {
  return (
    <StyledVictimList>
      <h3>{username} 키라가 응징한 범죄자</h3>
      <div>
        {victims.length === 0 && <p>아직 활동을 시작하지 않았습니다.</p>}
        {victims.map((victim) => {
          return <VictimItem key={victim.name} victim={victim} />;
        })}
      </div>
    </StyledVictimList>
  );
};

export default VictimList;
