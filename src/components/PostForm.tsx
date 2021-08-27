import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const StyledPostForm = styled.form`
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: 0 auto 40px;
  & > * {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 3px solid #999;
  }
  span {
    position: absolute;
    top: 0;
    background-color: #000;
    padding: 10px;
    font-size: 1.4rem;
    text-align: center;
  }
  textarea {
    resize: none;
    height: 180px;
    font-size: 1.6rem;
    padding: 10px 20px;
    letter-spacing: 0.2rem;
    line-height: 1.5;
    color: #000;
    &:focus {
      outline: none;
    }
  }
  button {
    cursor: pointer;
    font-size: 1.4rem;
    padding: 10px 0;
    color: #000;
    border-top: none;
  }
`;

const PostForm = () => {
  const [enteredText, setEnteredText] = useState('');
  const [warning, setWarning] = useState<string | null>(null);
  const authUser = useTypedSelector((state) => state.auth);
  const { addPost } = useActions();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enteredText.trim().length < 5) {
      setWarning('5글자 이상 적는 성의를 보여주세요.');
      return;
    }

    addPost(authUser!.username, authUser!.id, enteredText, authUser!.postings);
    setEnteredText('');
  };

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (warning) {
      timerId = setTimeout(() => {
        setWarning(null);
      }, 2000);
    }
    return () => clearTimeout(timerId);
  }, [warning]);

  return (
    <StyledPostForm onSubmit={onSubmitHandler}>
      {warning && <span>{warning}</span>}
      <textarea
        value={enteredText}
        onChange={(e) => setEnteredText(e.target.value)}
      />
      <button>Post</button>
    </StyledPostForm>
  );
};

export default PostForm;
