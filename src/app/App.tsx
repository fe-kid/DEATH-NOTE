import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import GameSelection from '../pages/GameSelectino';
import GamePlaying from '../pages/GamePlaying';
import Social from '../pages/Social';
import Ranks from '../pages/Ranks';
import Header from '../components/Header';
import GlobalStyle from '../styles/globalStyle';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/game-selection" component={GameSelection} />
        <Route path="/game-playing" component={GamePlaying} />
        <Route path="/social" component={Social} />
        <Route path="/game-selection" component={GameSelection} />
        <Route path="/ranks" component={Ranks} />
      </Switch>
    </Provider>
  );
};

export default App;
