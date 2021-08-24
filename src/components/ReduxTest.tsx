import { useSelector, useDispatch } from 'react-redux';

const ReduxTest = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state);
  console.log(dispatch);

  return <h1>Redux Test</h1>;
};

export default ReduxTest;
