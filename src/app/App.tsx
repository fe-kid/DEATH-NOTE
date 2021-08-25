import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import Home from '../pages/Home';
import Killing from '../pages/Killing';
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
        <Route path="/killing" component={Killing} />
        <Route path="/community" component={Community} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </Provider>
  );
};

export default App;
