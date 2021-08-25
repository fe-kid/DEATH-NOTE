import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import Home from '../pages/Home';
import GameStart from '../pages/GameStart';
import GamePlaying from '../pages/GamePlaying';
import Community from '../pages/Community';
import Ranking from '../pages/Ranking';
import Header from '../components/Header';
import GlobalStyle from '../styles/globalStyle';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game-start" component={GameStart} />
        <Route path="/game-playing" component={GamePlaying} />
        <Route path="/community" component={Community} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </Provider>
  );
};

export default App;
