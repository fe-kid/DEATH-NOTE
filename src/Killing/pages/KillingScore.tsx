/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

import { useTypedSelector } from '../../shared/hooks/useTypedSelector';
import { useActions } from '../../shared/hooks/useActions';
import PageHeading from '../../shared/components/UIElements/PageHeading';
import KillingScoreText from '../components/KillingScoreText';
import KillingScoreVictims from '../components/KillingScoreVictims';
import KillingScoreButtons from '../components/KillingScoreButtons';
import { Victim } from '../../shared/types';

const StyledKillingScore = styled.div`
  text-align: center;
  h2 {
    cursor: initial;
  }
  strong {
    font-size: 2rem;
    color: yellow;
    display: block;
    margin-bottom: 10px;
  }

  @media (max-width: 699px) {
    strong {
      font-size: 1.4rem;
    }
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
    }
  }, []);

  useEffect(() => {
    if (authUser) {
      if (authUser && deads.length > authUser.killedCount) {
        updateKilledCount(authUser.id, deads.length);
        setIsNewRecord(true);
      }
    }
  }, [authUser]);

  const compareDeadlist = () => {
    const newVictimsArray = deads.filter((dead) => {
      const result = authUser!.victims.findIndex((victim) => {
        return victim.name === dead.name;
      });
      return result === -1 ? true : false;
    });

    if (newVictimsArray.length >= 1) {
      const concatArray = authUser!.victims.concat(...newVictimsArray);
      updateVictims(authUser!.id, concatArray);
    }
  };

  return (
    <StyledKillingScore>
      <PageHeading onClick={() => {}}>결과</PageHeading>
      {isNewRecord && <strong>신기록 달성!</strong>}
      <KillingScoreText deads={deads} />
      <KillingScoreVictims deads={deads} />
      <KillingScoreButtons />
    </StyledKillingScore>
  );
};

export default KillingScore;
