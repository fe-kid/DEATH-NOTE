import styled from 'styled-components';

const StyledHowToKill = styled.div`
  background-color: #444;
  color: #fff;
  margin: 50px;
  padding: 30px;
  h1 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
  }
  ul {
    padding: 0 30px;
    li {
      font-size: 24px;
      margin-bottom: 20px;
      text-shadow: 1px 2px 5px rgba(200, 200, 200, 0.2);
    }
  }
`;

const HowToKill = () => {
  return (
    <StyledHowToKill>
      <h1>Instruction</h1>
      <ul>
        <li>- You will see a screen displays criminals' information.</li>
        <li>- To punish them, write their names. It's case-sensitive.</li>
        <li>
          - If you face with a name you cannot type, skip and punish next one.
        </li>
        <li>
          - If you write a wrong name, there will be a screen blocking for 2
          seconds.
        </li>
        <li>
          - You have 30 seconds. Let's see how many criminals you can punish.
        </li>
      </ul>
    </StyledHowToKill>
  );
};

export default HowToKill;
