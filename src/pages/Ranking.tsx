/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import UserList from '../components/UserList';
import styled from 'styled-components';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const StyledRanking = styled.div`
  color: #fff;
  h2,
  p {
    padding: 50px;
    text-align: center;
  }
  h2 {
    font-size: 50px;
  }
  p {
    font-size: 30px;
  }
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
      <h2>Ranking</h2>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !users.length && <p>No user...</p>}
      {!loading && users.length !== 0 && <UserList users={users} />}
    </StyledRanking>
  );
};

export default Ranking;
