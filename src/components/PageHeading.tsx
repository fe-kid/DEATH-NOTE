import styled from 'styled-components';

const StyledHeading = styled.h2`
  display: block;
  width: fit-content;
  padding: 15px 30px;
  font-size: 2.5rem;
  text-align: center;
  margin: 50px auto;
  border: 3px solid #fff;
`;

const PageHeading: React.FC = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default PageHeading;
