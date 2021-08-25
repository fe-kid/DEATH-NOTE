import { useTypedSelector as useSelector } from '../hooks/useTypedSelector';

const SignIn = () => {
  const authUser = useSelector((state) => state.auth);

  return (
    <>
      <h1>SignIn</h1>
      {authUser && <p>{authUser.username}</p>}
    </>
  );
};

export default SignIn;
