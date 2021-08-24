import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import GameSelection from './pages/GameSelectino';
import GamePlaying from './pages/GamePlaying';
import Social from './pages/Social';
import Ranks from './pages/Ranks';
import ReduxTest from './components/ReduxTest';

const App = () => {
  return (
    <Provider store={store}>
      <ReduxTest />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/game-selection">
            <GameSelection />
          </Route>
          <Route path="/game-playing">
            <GamePlaying />
          </Route>
          <Route path="/social">
            <Social />
          </Route>
          <Route path="/ranks">
            <Ranks />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
