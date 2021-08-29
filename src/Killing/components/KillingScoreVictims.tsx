import styled from 'styled-components';

import VictimItem from '../../shared/components/UIElements/VictimAvatar';
import { Victim } from '../../shared/types';

const StyledKillingScoreVictims = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 3px solid red;
  padding: 20px 10px;
  margin: 0 auto 60px;
  width: 80%;
  max-width: 800px;

  @media (max-width: 699px) {
    padding: 10px;
    margin-bottom: 30px;
    width: 90%;
  }
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
