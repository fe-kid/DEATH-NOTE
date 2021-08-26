/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import styled from 'styled-components';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const StyledCommunity = styled.div`
  color: #fff;
  & > div > p,
  h2 {
    text-align: center;
    padding: 50px;
  }
  h2 {
    font-size: 50px;
  }
  & > div > p {
    font-size: 30px;
  }
`;

const Community = () => {
  const { community, auth } = useTypedSelector((state) => state);
  const { loading, error, data: posts } = community;

  const { fetchCommunity } = useActions();

  useEffect(() => {
    fetchCommunity();
  }, []);

  return (
    <StyledCommunity>
      <h2>Community</h2>
      {auth && <PostForm />}
      <div>
        {loading && <p>loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !posts.length && <p>No post...</p>}
        {!loading && posts.length !== 0 && <PostList posts={posts} />}
      </div>
    </StyledCommunity>
  );
};

export default Community;
