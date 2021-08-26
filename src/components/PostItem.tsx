/* eslint-disable react-hooks/exhaustive-deps */
import { Post } from '../types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const StyledPostItem = styled.div`
  margin: 10px;
  background-color: orange;
  span {
    display: block;
  }
`;

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  const [isIdSame, setIsIdSame] = useState(false);
  const auth = useTypedSelector((state) => state.auth);
  const { deletePost } = useActions();

  useEffect(() => {
    if (auth) {
      setIsIdSame(post.writtenUserId === auth.id);
    }
  }, [auth]);

  const deletePostHandler = () => {
    deletePost(
      post.id,
      auth!.id,
      auth!.postings.filter((posting) => {
        return posting !== post.id;
      })
    );
  };

  return (
    <StyledPostItem>
      {isIdSame && <button onClick={deletePostHandler}>Delete</button>}
      <span>{post.writtenDate}</span>
      <span>{post.writtenUserName}</span>
      <p>{post.content}</p>
    </StyledPostItem>
  );
};

export default PostItem;
