import styled from 'styled-components';

import LinkButton from '../../shared/components/UIElements/LinkButton';

const StyledKillingScoreButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const KillingScoreButtons = () => {
  return (
    <StyledKillingScoreButtons>
      <LinkButton href="/killing-start">재시도</LinkButton>
      <LinkButton href="/ranking">랭킹 보기</LinkButton>
    </StyledKillingScoreButtons>
  );
};

export default KillingScoreButtons;
