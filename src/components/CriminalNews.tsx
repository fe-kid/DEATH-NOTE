import styled from 'styled-components';
import Mistake from './Mistake';
import { CurrentCriminal } from '../types/index';
import CriminalInfo from './CriminalInfo';

const StyledNews = styled.div`
  position: relative;
  width: 80%;
  padding: 20px;
  margin-top: 20px;
  background-color: rgb(94, 10, 10, 0.5);
  user-select: none;

  @media (max-width: 699px) {
    padding: 10px;
    margin-top: 10px;
  }
`;

const CriminalNews: React.FC<{
  criminal: CurrentCriminal | undefined;
  mistake: boolean;
  crime: string;
}> = ({ criminal, mistake, crime }) => {
  return (
    <StyledNews>
      {mistake && <Mistake />}
      {criminal && (
        <CriminalInfo
          img={criminal.img}
          name={criminal.name}
          address={criminal.address}
          crime={crime}
        />
      )}
    </StyledNews>
  );
};

export default CriminalNews;
