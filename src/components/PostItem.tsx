/* eslint-disable react-hooks/exhaustive-deps */
import { Post } from '../types';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const StyledPostItem = styled.div`
  position: relative;
  margin: 30px auto 0;
  padding: 30px 20px 20px;
  width: 80%;
  max-width: 600px;
  background-color: #333;
  span {
    display: block;
    font-size: 26px;
    margin-left: 5px;
  }
  p {
    background-color: #222;
    color: #fff;
    word-wrap: break-word;
    font-size: 20px;
    letter-spacing: 2px;
    line-break: 1.4;
    margin-top: 20px;
    padding: 20px;
  }
  button {
    font-size: 24px;
    font-family: monospace;
    color: #fff;
    background: none;
    border: 2px solid #fff;
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 24px;
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
      <span>{post.writtenUserName}</span>
      <p>{post.content}</p>
    </StyledPostItem>
  );
};

export default PostItem;
