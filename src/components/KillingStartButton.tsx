import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled(Link)`
  background-color: #222;
  border: 4px solid #ccc;
  border-radius: 20px;
  display: block;
  width: 200px;
  padding: 10px 20px;
  text-align: center;
  margin: 0 auto;
  font-size: 24px;
  color: #eee;
  text-decoration: none;
`;
const KillingStartButton = () => {
  return <StyledButton to="/DEATH-NOTE/killing">시작하기</StyledButton>;
};

export default KillingStartButton;
