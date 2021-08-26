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
      {deads.length === 0 && <p>No criminal punished</p>}
      {deads.length !== 0 &&
        deads.map((dead) => {
          return <VictimItem victim={dead} key={dead.name} />;
        })}
    </StyledKillingScoreVictims>
  );
};

export default KillingScoreVictims;
