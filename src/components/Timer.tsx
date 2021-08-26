/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useState } from 'react';

const Timer: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [seconds, setSeconds] = useState(10);

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

  return <h1>{seconds}</h1>;
};

export default Timer;
