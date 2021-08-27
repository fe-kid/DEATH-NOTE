import styled from 'styled-components';

const StyledHowToKill = styled.div`
  background-color: #444;
  margin: 50px;
  padding: 30px;
  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 50px;
  }
  ul {
    padding: 0 30px;
    li {
      font-size: 1.5rem;
      margin-bottom: 20px;
      text-shadow: 1px 2px 5px rgba(200, 200, 200, 0.2);
    }
  }
`;

const HowToKill = () => {
  return (
    <StyledHowToKill>
      <h1>데스노트 사용법</h1>
      <ul>
        <li>- 범죄자 정보를 보여주는 화면이 주어집니다.</li>
        <li>- 그들의 이름을 적어서 응징하세요. 대소문자에 주의하세요.</li>
        <li>
          - 이름을 적기 힘든 범죄자가 나오면 Skip 버튼을 누르고 다음 범죄자를
          처단하세요.
        </li>
        <li>- 잘못된 이름을 적으면 2초간 화면이 가려집니다.</li>
        <li>
          - 단 30초가 주어집니다. 얼마나 많은 범죄자를 처단할 수 있는지 봅시다.
        </li>
      </ul>
    </StyledHowToKill>
  );
};

export default HowToKill;
