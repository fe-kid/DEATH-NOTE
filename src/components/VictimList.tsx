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
  h3 {
    font-size: 20px;
  }
  div {
    display: flex;
  }
`;

const VictimList: React.FC<{ victims: Victim[] }> = ({ victims }) => {
  return (
    <StyledVictimList>
      <h3>People killed by this Kira</h3>
      <div>
        {victims.map((victim) => {
          return <VictimItem key={victim.name} victim={victim} />;
        })}
      </div>
    </StyledVictimList>
  );
};

export default VictimList;
