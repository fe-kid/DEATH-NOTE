import styled from 'styled-components';
import { useLocation } from 'react-router';
import { Victim } from '../types';
import { Link } from 'react-router-dom';
import VictimItem from '../components/VictimItem';

const StyledKillingScore = styled.div`
  text-align: center;
  margin: 30px;
  color: #fff;

  h1 {
    font-size: 40px;
    margin-bottom: 50px;
  }
  p {
    font-size: 30px;
    margin-bottom: 40px;
    span {
      font-size: 24px;
      margin-bottom: 5px;
      display: block;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    border: 4px solid #aaa;
    padding: 20px 10px;
    margin-bottom: 60px;
  }
  div {
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
  }
`;

interface StateType {
  deads: Victim[];
}

const KillingScore = () => {
  const location = useLocation<StateType>();
  const { deads } = location.state;

  return (
    <StyledKillingScore>
      <h1>Score</h1>
      {!deads.length && <p>You did nothing for justice... Shame on you!</p>}
      {deads.length === 1 && <p>{`You punished a criminal for justice!`}</p>}
      {deads.length > 1 && (
        <p>
          <span>Well done.</span>
          {`You punished ${deads.length} criminals for justice!`}
        </p>
      )}
      <ul>
        {deads.length &&
          deads.map((dead) => {
            return <VictimItem victim={dead} key={dead.name} />;
          })}
      </ul>
      <div>
        <Link to="/killing-start">Do it again</Link>
        <Link to="/ranking">Go to ranking</Link>
      </div>
    </StyledKillingScore>
  );
};

export default KillingScore;
