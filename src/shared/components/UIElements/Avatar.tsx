import styled from 'styled-components';

const StyledAvatar = styled.li`
  position: relative;
  margin: 5px;
  &::before,
  &::after {
    content: '';
    display: block;
    background-color: red;
    width: 100%;
    height: 5px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 0;
  }
  &::before {
    transform: translateY(-50%) rotate(45deg);
  }
  &::after {
    transform: translateY(-50%) rotate(-45deg);
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  @media (max-width: 699px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const Avatar: React.FC<{ name: string; img: string }> = ({ name, img }) => {
  return (
    <StyledAvatar>
      <img src={img} alt={name} />
    </StyledAvatar>
  );
};

export default Avatar;
