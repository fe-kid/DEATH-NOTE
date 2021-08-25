import { Victim } from '../types';
import styled from 'styled-components';

const StyledVictimItem = styled.li`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  margin: 10px;
  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  span {
    color: red;
    font-size: 18px;
  }
`;
const VictimItem: React.FC<{ victim: Victim }> = ({ victim }) => {
  return (
    <StyledVictimItem>
      <img src={victim.img} alt={victim.name} />
      <span>{victim.name}</span>
    </StyledVictimItem>
  );
};

export default VictimItem;
