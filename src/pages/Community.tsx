/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import styled from 'styled-components';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const StyledCommunity = styled.div`
  background-color: red;
`;

const Community = () => {
  const { community, auth } = useTypedSelector((state) => state);
  const { loading, error, data: posts } = community;

  const { fetchCommunity } = useActions();

  useEffect(() => {
    fetchCommunity();
  }, []);

  useEffect(() => {
    fetchCommunity();
  }, [auth]);

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
