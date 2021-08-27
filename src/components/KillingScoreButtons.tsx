import styled from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import LinkButton from './LinkButton';

const StyledKillingScoreButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const KillingScoreButtons = () => {
  const authUser = useTypedSelector((state) => state.auth);

  return (
    <StyledKillingScoreButtons>
      <LinkButton href="/DEATH-NOTE/killing-start">재시도</LinkButton>
      {authUser && (
        <LinkButton href="/DEATH-NOTE/ranking">랭킹 보기</LinkButton>
      )}
    </StyledKillingScoreButtons>
  );
};

export default KillingScoreButtons;
