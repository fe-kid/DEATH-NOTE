import styled from 'styled-components';

import Mistake from './Mistake';
import CriminalInfo from './CriminalInfo';
import { CurrentCriminal } from '../../shared/types/index';
import Placeholder from '../../shared/components/UIElements/Placeholder';

const StyledNews = styled.div`
  position: relative;
  width: 80%;
  padding: 20px;
  margin-top: 20px;
  background-color: rgb(94, 10, 10, 0.5);
  user-select: none;
  height: 45vh;
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
      {!criminal && <Placeholder width="100%" height="100%" />}
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
