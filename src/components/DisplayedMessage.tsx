import styled from 'styled-components';

const StyledDisplayedMessage = styled.p`
  padding: 50px;
  text-align: center;
  font-size: 2rem;
`;

const DisplayedMessage: React.FC<{ message: string }> = ({ message }) => {
  return <StyledDisplayedMessage>{message}</StyledDisplayedMessage>;
};

export default DisplayedMessage;
