/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import styled from 'styled-components';

import { useTypedSelector } from '../../shared/hooks/useTypedSelector';
import { useActions } from '../../shared/hooks/useActions';
import PageHeading from '../../shared/components/UIElements/PageHeading';
import DisplayedMessage from '../../shared/components/UIElements/DisplayedMessage';
import UserList from '../components/UserList';

const StyledRanking = styled.div`
  padding-bottom: 50px;
`;

const Ranking = () => {
  const { ranking, auth } = useTypedSelector((state) => state);
  const { loading, error, data: users } = ranking;
  const { fetchRanking } = useActions();

  useEffect(() => {
    fetchRanking();
  }, []);

  useEffect(() => {
    fetchRanking();
  }, [auth]);

  return (
    <StyledRanking>
      <PageHeading onClick={fetchRanking}>랭킹</PageHeading>
      {loading && <DisplayedMessage message="Loading..." />}
      {error && <DisplayedMessage message={error} />}
      {!loading && !users.length && (
        <DisplayedMessage message="사용자가 없습니다..." />
      )}
      {!loading && users.length !== 0 && <UserList users={users} />}
    </StyledRanking>
  );
};

export default Ranking;
