import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import GameSelection from './pages/GameSelectino';
import GamePlaying from './pages/GamePlaying';
import Social from './pages/Social';
import Ranks from './pages/Ranks';

const App = () => {
  return (
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
  );
};

export default App;
