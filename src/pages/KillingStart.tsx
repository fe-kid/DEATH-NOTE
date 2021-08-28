import styled from 'styled-components';
import HowToKill from '../components/HowToKill';
import LinkButton from '../components/LinkButton';

const StyledKillingStart = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center; ;
`;

const KillingStart = () => {
  return (
    <StyledKillingStart>
      <HowToKill />
      <LinkButton href="/killing">시작하기</LinkButton>
    </StyledKillingStart>
  );
};

export default KillingStart;
