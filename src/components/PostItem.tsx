/* eslint-disable react-hooks/exhaustive-deps */
import { Post } from '../types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const StyledPostItem = styled.div`
  margin: 10px;
  background-color: orange;
  span {
    display: block;
  }
`;

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  const [isIdSame, setIsIdSame] = useState(false);
  const authState = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (authState) {
      setIsIdSame(post.id === authState.id);
    }
  }, [authState]);

  return (
    <StyledPostItem>
      {isIdSame && 'my post'}
      <span>{post.writtenDate}</span>
      <span>{post.writtenUserName}</span>
      <p>{post.content}</p>
    </StyledPostItem>
  );
};

export default PostItem;
