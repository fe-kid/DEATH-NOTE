import styled from 'styled-components';
import Mistake from './Mistake';
import { CurrentCriminal } from '../types/index';

const StyledNews = styled.div`
  position: relative;
  width: 80%;
  flex: 1;
  margin-top: 20px;
  background-color: rgb(94, 10, 10);
  user-select: none;
`;

const StyledCriminalInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  img {
    width: 200px;
    height: 200px;
  }
  div {
    h2 {
      font-size: 36px;
      color: #fff;
      margin: 20px 0 0;
    }
    span {
      display: block;
      font-size: 16px;
      color: #ccc;
      margin: 5px;
    }
    address {
      font-size: 20px;
      color: #dedede;
    }
  }
  p {
    margin-top: 30px;
    font-size: 22px;
    color: #fff;
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
        <StyledCriminalInfo>
          <img src={criminal.img} alt={criminal.name} />
          <div>
            <h2>{criminal.name}</h2>
            <span>from</span>
            <address>{criminal.address}</address>
          </div>
          <p>{crime}</p>
        </StyledCriminalInfo>
      )}
    </StyledNews>
  );
};

export default CriminalNews;
