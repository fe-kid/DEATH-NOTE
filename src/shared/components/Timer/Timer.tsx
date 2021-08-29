/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTimer = styled.h1`
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: red;
  line-height: 2.5rem;
  text-align: center;
  z-index: 200;
  @media (max-width: 699px) {
    font-size: 1.4rem;
    top: 10px;
  }
`;

const Timer: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (seconds !== 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds <= 0) {
      onFinish();
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return <StyledTimer>{seconds}</StyledTimer>;
};

export default Timer;
