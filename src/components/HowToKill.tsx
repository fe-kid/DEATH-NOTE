import styled from 'styled-components';

const StyledHowToKill = styled.div`
  background-color: #444;
  color: #fff;
  margin: 50px;
  padding: 30px;
  h1 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 20px;
  }
  ul {
    li {
      font-size: 20px;
      margin-bottom: 10px;
      text-shadow: 1px 2px 5px rgba(200, 200, 200, 0.2);
    }
  }
`;

const HowToKill = () => {
  return (
    <StyledHowToKill>
      <h1>Instruction</h1>
      <ul>
        <li>
          - You will see a screen displays criminals' information and what they
          did.
        </li>
        <li>
          - As a Kira, write their names on a page of your Death Note on the
          bottom. It's case-sensitive.
        </li>
        <li>
          - If you can't write a name, just click the skip button then punish
          next one.
        </li>
        <li>
          - If you write a wrong name, there will be a screen blocking for 2
          seconds.
        </li>
        <li>
          - You have 60 seconds. Let's see how many criminals you can punish in
          a minute.
        </li>
      </ul>
    </StyledHowToKill>
  );
};

export default HowToKill;
