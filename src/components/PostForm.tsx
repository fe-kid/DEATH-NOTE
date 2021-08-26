import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const StyledPostForm = styled.form`
  margin-bottom: 40px;
  & > * {
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    width: 80%;
    max-width: 600px;
  }
  textarea {
    resize: none;
    height: 180px;
    font-size: 24px;
    padding: 20px;
    letter-spacing: 2px;
    line-height: 1.5;
  }
  button {
    cursor: pointer;
    font-size: 20px;
    padding: 10px 0;
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
      setWarning('Write at least 5 letters.');
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
