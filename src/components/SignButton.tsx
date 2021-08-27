import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #ccc;
  color: #000;
  border: 3px solid #000;
  border-radius: 12px;
  font-size: 1rem;
  width: 100px;
  padding: 5px 0;
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
