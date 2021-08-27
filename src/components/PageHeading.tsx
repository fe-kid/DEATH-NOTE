import styled from 'styled-components';

const StyledHeading = styled.h2`
  display: block;
  width: fit-content;
  padding: 15px 30px 18px;
  font-size: 2rem;
  text-align: center;
  margin: 30px auto;
  border: 2px solid #fff;

  @media (max-width: 699px) {
    font-size: 1.4rem;
    margin: 20px auto 10px;
    padding: 10px 20px 12px;
    border-width: 1px;
  }
`;

const PageHeading: React.FC = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default PageHeading;
