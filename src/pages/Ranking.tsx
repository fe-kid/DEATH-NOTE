/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import UserList from '../components/UserList';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import PageHeading from '../components/PageHeading';
import DisplayedMessage from '../components/DisplayedMessage';
import styled from 'styled-components';

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
      <PageHeading>랭킹</PageHeading>
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
