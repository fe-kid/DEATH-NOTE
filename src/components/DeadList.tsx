import styled from 'styled-components';
import { Victim } from '../types';
import DeadItem from './DeadItem';

const StyledDeadList = styled.ul`
  border: 3px solid #aaa;
  width: 80%;
  height: 100px;
  margin: 20px 0 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  overflow: auto;
  p {
    color: #fff;
    font-size: 20px;
    margin-left: 20px;
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
