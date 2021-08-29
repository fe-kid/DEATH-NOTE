import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1000;
`;

const Backdrop: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return ReactDOM.createPortal(
    <StyledBackdrop className="backdrop" onClick={onClick}></StyledBackdrop>,
    document.getElementById('backdrop-hook') as HTMLDivElement
  );
};

export default Backdrop;
