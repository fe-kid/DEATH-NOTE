import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeading = styled(Link)`
  color: inherit;
  text-decoration: none;
  h1 {
    font-size: 2rem;
    font-family: 'Special Elite';
    letter-spacing: 2px;
    padding-top: 8px;
    text-align: center;
  }

  @media (max-width: 699px) {
    h1 {
      font-size: 1.4rem;
      max-width: 120px;
    }
  }
`;

const Heading = () => {
  return (
    <StyledHeading to="/">
      <h1>DEATH NOTE</h1>
    </StyledHeading>
  );
};

export default Heading;
