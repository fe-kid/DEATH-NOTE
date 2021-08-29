import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #fff;
  color: #000;
  font-family: monospace;
  border: none;
  /* border-radius: 12px; */
  font-size: 1.1rem;
  width: 100px;
  padding: 10px 0;
  cursor: pointer;
  @media (max-width: 699px) {
    padding: 0;
  }
`;
const SignButton: React.FC<{ onClick: () => void }> = ({
  onClick,
  children,
}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default SignButton;
