import styled from 'styled-components';
import { Victim } from '../types';
import VictimItem from './VictimItem';

const StyledKillingScoreVictims = styled.ul`
  display: flex;
  justify-content: center;
  border: 3px solid red;
  padding: 20px 10px;
  margin: 0 auto 60px;
  max-width: 800px;
`;

const KillingScoreVictims: React.FC<{ deads: Victim[] }> = ({ deads }) => {
  return (
    <StyledKillingScoreVictims>
      {deads.length === 0 && <p>기록이 없습니다.</p>}
      {deads.length !== 0 &&
        deads.map((dead) => {
          return <VictimItem victim={dead} key={dead.name} />;
        })}
    </StyledKillingScoreVictims>
  );
};

export default KillingScoreVictims;
