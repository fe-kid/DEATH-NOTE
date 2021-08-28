/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import styled from 'styled-components';
import DisplayedMessage from '../components/DisplayedMessage';
import PageHeading from '../components/PageHeading';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const StyledCommunity = styled.div`
  padding-bottom: 50px;
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
      <PageHeading onClick={fetchCommunity}>커뮤니티</PageHeading>
      {auth && <PostForm />}
      <div>
        {loading && <DisplayedMessage message="Loading..." />}
        {error && <DisplayedMessage message={error} />}
        {!loading && !posts.length && (
          <DisplayedMessage message="게시물이 없습니다..." />
        )}
        {!loading && posts.length !== 0 && <PostList posts={posts} />}
      </div>
    </StyledCommunity>
  );
};

export default Community;
