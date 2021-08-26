/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import DeadList from '../components/DeadList';
import { CurrentCriminal, Victim } from '../types';
import getRandomUser from '../apis/randomNews/randomUser';
import CriminalNews from '../components/CriminalNews';
import createRandomCrime from '../apis/randomNews/randomCrime';
import KillingForm from '../components/KillingForm';
import Timer from '../components/Timer';
import { useHistory } from 'react-router-dom';

const StyledKilling = styled.div`
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
`;

const Killing = () => {
  const [enteredText, setEnteredText] = useState('');
  const [deads, setDeads] = useState<Victim[]>([]);
  const [currentCriminal, setCurrentCriminal] = useState<CurrentCriminal>();
  const [mistake, setMistake] = useState(false);
  const [crime, setCrime] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const history = useHistory();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredText(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (currentCriminal && currentCriminal.name === enteredText) {
      addDeadHandler({
        name: currentCriminal.name,
        img: currentCriminal.img,
      });
      setCriminalHandler();
    } else {
      setMistake(true);
    }

    setEnteredText('');
  };

  const setCriminalHandler = async () => {
    const criminal = await getRandomUser();
    setCurrentCriminal(criminal);
    const crime = createRandomCrime();
    setCrime(crime);
  };

  const addDeadHandler = (dead: Victim) => {
    setDeads((prev) => {
      return [...prev, dead];
    });
  };

  const setFinishedHandler = () => {
    setIsFinished(true);
  };

  useEffect(() => {
    setCriminalHandler();
  }, []);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (mistake) {
      timerId = setTimeout(() => {
        setMistake(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [mistake]);

  useEffect(() => {
    if (isFinished) {
      history.push({
        pathname: '/killing-score',
        state: { deads: deads },
      });
    }
  }, [isFinished]);

  return (
    <StyledKilling>
      <Timer onFinish={setFinishedHandler} />
      <CriminalNews
        criminal={currentCriminal}
        mistake={mistake}
        crime={crime}
      />
      <DeadList deads={deads} />
      <KillingForm
        onSubmit={onSubmitHandler}
        onChange={onChangeHandler}
        onSkip={setCriminalHandler}
        text={enteredText}
      />
    </StyledKilling>
  );
};

export default Killing;
