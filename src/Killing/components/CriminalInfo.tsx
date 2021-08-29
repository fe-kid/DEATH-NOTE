import styled from 'styled-components';

const StyledCriminalInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  font-family: 'Spacial Elite';
  img {
    border-radius: 50%;
    width: 30vh;
    /* height: 40%; */
  }
  div {
    h2 {
      font-size: 2rem;
      margin: 10px 0 5px;
    }
    span {
      color: #ccc;
    }
    address {
      color: #ddd;

      font-size: 1.2rem;
      margin-top: 5px;
    }
  }
  p {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-top: 20px;
    font-family: 'Hahmlet';
  }

  @media (max-width: 699px) {
    div {
      h2 {
        font-size: 1.2rem;
      }
      span {
        margin-right: 5px;
      }
      address {
        display: inline;
        font-size: 1rem;
      }
    }
    p {
      font-size: 1.1rem;
      margin-top: 10px;
    }
  }

  @media (max-width: 399px) {
    img {
      width: 30%;
      /* height: 30%; */
    }
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
