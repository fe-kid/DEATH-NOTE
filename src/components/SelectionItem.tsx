import styled from 'styled-components';

const StyledSelectionItem = styled.div<{ img: string }>`
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  width: 250px;
  height: 250px;
  line-height: 250px;
  text-align: center;
  border-radius: 30px;
  margin: 20px;
  p {
    font-size: 2rem;
    text-shadow: 3px 8px 5px #000;
  }
`;

const SelectionItem: React.FC<{ text: string; img: string }> = ({
  text,
  img,
}) => {
  return (
    <StyledSelectionItem img={img}>
      <p>{text}</p>
    </StyledSelectionItem>
  );
};

export default SelectionItem;
