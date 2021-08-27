import { Victim } from '../types';
import VictimItem from './VictimItem';
import styled from 'styled-components';

const StyledVictimList = styled.ul`
  background-color: #555;
  color: #fff;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  border: 3px solid #777;
  position: absolute;
  top: 100%;
  z-index: 100;
  h3 {
    font-size: 20px;
  }
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    p {
      font-size: 20px;
      color: #000;
      padding: 30px;
    }
  }
`;

const VictimList: React.FC<{ victims: Victim[] }> = ({ victims }) => {
  return (
    <StyledVictimList>
      <h3>이 키라가 응징한 범죄자</h3>
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
