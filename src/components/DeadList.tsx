import styled from 'styled-components';
import { Victim } from '../types';
import DeadItem from './DeadItem';

const StyledDeadList = styled.ul`
  border: 3px solid #aaa;
  box-sizing: border-box;
  width: 90%;
  height: 80px;
  margin: 20px 0 10px;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: auto;
  p {
    font-size: 1.2rem;
    margin-left: 20px;
  }

  @media (max-width: 699px) {
    height: 60px;
    border-width: 2px;
    margin: 10px 0;
    p {
      font-size: 1.1rem;
      margin-left: 0;
    }
  }
`;

const DeadList: React.FC<{ deads: Victim[] }> = ({ deads }) => {
  return (
    <StyledDeadList>
      {deads.length === 0 && <p>아직 처단한 범죄자가 없습니다.</p>}
      {deads.length !== 0 &&
        deads.map(({ name, img }) => {
          return <DeadItem key={name} name={name} img={img} />;
        })}
    </StyledDeadList>
  );
};

export default DeadList;
