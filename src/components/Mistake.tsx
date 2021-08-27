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
      <span>방금 무고한 사람을 죽였습니다!</span>
    </StyledMistake>
  );
};

export default Mistake;
