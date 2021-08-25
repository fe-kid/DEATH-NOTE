import styled from 'styled-components';

const StyledMistake = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 30px;
    color: red;
  }
`;

const Mistake = () => {
  return (
    <StyledMistake>
      <span>You just killed an innocent person!</span>
    </StyledMistake>
  );
};

export default Mistake;
