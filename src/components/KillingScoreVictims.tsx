import styled from 'styled-components';
import { Victim } from '../types';
import VictimItem from './VictimItem';

const StyledKillingScoreVictims = styled.ul`
  display: flex;
  justify-content: center;
  border: 4px solid #aaa;
  padding: 20px 10px;
  margin-bottom: 60px;
`;

const KillingScoreVictims: React.FC<{ deads: Victim[] }> = ({ deads }) => {
  return (
    <StyledKillingScoreVictims>
      {deads.length &&
        deads.map((dead) => {
          return <VictimItem victim={dead} key={dead.name} />;
        })}
    </StyledKillingScoreVictims>
  );
};

export default KillingScoreVictims;
