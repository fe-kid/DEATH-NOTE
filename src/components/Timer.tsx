/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const StyledTimer = styled.h1`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 50px;
`;

const Timer: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (seconds !== 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds <= 0) {
      console.log(seconds);
      onFinish();
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return <StyledTimer>{seconds}</StyledTimer>;
};

export default Timer;
