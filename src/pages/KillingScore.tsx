/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { Victim } from '../types';
import KillingScoreText from '../components/KillingScoreText';
import KillingScoreVictims from '../components/KillingScoreVictims';
import KillingScoreButtons from '../components/KillingScoreButtons';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import PageHeading from '../components/PageHeading';

const StyledKillingScore = styled.div`
  text-align: center;
  strong {
    font-size: 2rem;
    color: yellow;
    display: block;
    margin-bottom: 10px;
  }
`;

interface StateType {
  deads: Victim[];
}

const KillingScore = () => {
  const authUser = useTypedSelector((state) => state.auth);
  const { updateKilledCount, updateVictims } = useActions();
  const [isNewRecord, setIsNewRecord] = useState(false);
  const location = useLocation<StateType>();
  const { deads } = location.state;

  useEffect(() => {
    if (authUser) {
      compareDeadlist();
      if (authUser && deads.length > authUser.killedCount) {
        updateKilledCount(authUser.id, deads.length);
        setIsNewRecord(true);
      }
    }
  }, [authUser]);

  const compareDeadlist = () => {
    const newVictimsArray = deads.filter((dead) => {
      return !authUser!.victims.find((victim) => victim.name !== dead.name);
    });

    if (newVictimsArray.length >= 1) {
      const concatArray = authUser!.victims.concat(...newVictimsArray);
      updateVictims(authUser!.id, concatArray);
    }
  };

  return (
    <StyledKillingScore>
      <PageHeading>결과</PageHeading>
      {isNewRecord && <strong>신기록 달성!</strong>}
      <KillingScoreText deads={deads} />
      <KillingScoreVictims deads={deads} />
      <KillingScoreButtons />
    </StyledKillingScore>
  );
};

export default KillingScore;