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
      {!deads.length && <p>당신은 정의를 위해 한 일이 아무 것도 없습니다...</p>}
      {deads.length === 1 && (
        <p>
          <b>1</b>명의 범죄자를 처단했습니다!
        </p>
      )}
      {deads.length > 1 && (
        <p>
          정의를 위해 <b>{deads.length}</b>명의 범죄자를 응징했습니다!
        </p>
      )}
    </StyledKillingScoreText>
  );
};

export default KillingScoreText;
