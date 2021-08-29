import styled from 'styled-components';
import DisplayedMessage from './DisplayedMessage';

interface placeholderProps {
  width: string;
  height: string;
}

const StyledPlaceholder = styled.div<placeholderProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Placeholder: React.FC<{ width: string; height: string }> = ({
  width,
  height,
}) => {
  return (
    <StyledPlaceholder width={width} height={height}>
      <DisplayedMessage message="Loading..." />
    </StyledPlaceholder>
  );
};

export default Placeholder;
