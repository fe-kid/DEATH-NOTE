import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const PostForm = () => {
  const [enteredText, setEnteredText] = useState('');
  const [warning, setWarning] = useState<string | null>(null);
  const authUser = useTypedSelector((state) => state.auth);
  const { addPost } = useActions();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enteredText.trim().length < 10) {
      setWarning('Write at least 10 letters.');
      return;
    }

    addPost(authUser!.username, authUser!.id, enteredText);
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
    <form onSubmit={onSubmitHandler}>
      {warning && <span>{warning}</span>}
      <textarea
        value={enteredText}
        onChange={(e) => setEnteredText(e.target.value)}
      />
      <button>Post</button>
    </form>
  );
};

export default PostForm;
