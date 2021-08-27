import styled from 'styled-components';

const StyledCriminalInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  font-family: 'Spacial Elite';
  img {
    width: 40%;
    height: 40%;
  }
  div {
    h2 {
      font-size: 2rem;
      margin: 10px 0 0;
    }
    span {
      display: block;
      color: #ccc;
      margin: 5px;
    }
    address {
      font-size: 1.2rem;
      color: #dedede;
    }
  }
  p {
    font-size: 1.3rem;
    margin-top: 20px;
    font-family: 'Hahmlet';
  }
`;

const CriminalInfo: React.FC<{
  img: string;
  name: string;
  address: string;
  crime: string;
}> = ({ img, name, address, crime }) => {
  return (
    <StyledCriminalInfo>
      <img src={img} alt={name} />
      <div>
        <h2>{name}</h2>
        <span>from</span>
        <address>{address}</address>
      </div>
      <p>{crime}</p>
    </StyledCriminalInfo>
  );
};

export default CriminalInfo;
