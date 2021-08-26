import styled from 'styled-components';
import { Victim } from '../types';

const StyledKillingScoreText = styled.div`
  p {
    font-size: 30px;
    margin-bottom: 40px;
    span {
      font-size: 24px;
      margin-bottom: 5px;
      display: block;
    }
    b {
      color: gold;
    }
  }
`;

const KillingScoreText: React.FC<{ deads: Victim[] }> = ({ deads }) => {
  return (
    <StyledKillingScoreText>
      {!deads.length && <p>You did nothing for justice... Shame on you!</p>}
      {deads.length === 1 && (
        <p>
          You punished <b>1</b> criminal for justice!
        </p>
      )}
      {deads.length > 1 && (
        <p>
          <span>Well done.</span>
          You punished <b>{deads.length}</b> criminals for justice!
        </p>
      )}
    </StyledKillingScoreText>
  );
};

export default KillingScoreText;
