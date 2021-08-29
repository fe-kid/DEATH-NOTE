/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useTypedSelector } from '../../shared/hooks/useTypedSelector';
import { useActions } from '../../shared/hooks/useActions';
import { Post } from '../../shared/types';

const StyledPostItem = styled.div`
  position: relative;
  margin: 30px auto 0;
  padding: 30px 20px 20px;
  width: 80%;
  max-width: 600px;
  background-color: #333;
  box-sizing: border-box;
  span {
    display: block;
    font-size: 1.5rem;
    margin-left: 5px;
  }
  p {
    background-color: #222;
    word-wrap: break-word;
    font-size: 1.2rem;
    letter-spacing: 2px;
    line-height: 1.5;
    margin-top: 20px;
    padding: 20px;
  }
  button {
    font-size: 1rem;
    font-family: 'Special Elite';
    padding-top: 4px;
    background: none;
    border: 2px solid #fff;
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 24px;
  }
  @media (max-width: 699px) {
    width: 90%;
    padding: 20px 10px 15px;
    margin-top: 20px;
    span {
      font-size: 1rem;
    }
    p {
      padding: 10px;
      font-size: 1rem;
    }
    button {
      top: 20px;
      right: 20px;
    }
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
