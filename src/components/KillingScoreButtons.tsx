import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledKillingScoreButtons = styled.div`
  display: flex;
  justify-content: center;
  a {
    padding: 10px 20px;
    margin: 30px;
    font-size: 20px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    border: 2px solid #fff;
  }
`;

const KillingScoreButtons = () => {
  return (
    <StyledKillingScoreButtons>
      <Link to="/killing-start">Do it again</Link>
      <Link to="/ranking">Go to ranking</Link>
    </StyledKillingScoreButtons>
  );
};

export default KillingScoreButtons;
