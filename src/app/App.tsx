import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import Home from '../pages/Home';
import Killing from '../pages/Killing';
import Community from '../pages/Community';
import Ranking from '../pages/Ranking';
import Header from '../components/Header';
import GlobalStyle from '../styles/globalStyle';
import KillingStart from '../pages/KillingStart';
import KillingScore from '../pages/KillingScore';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/DEATH_NOTE" exact component={Home} />
        <Route path="/DEATH_NOTE/killing" component={Killing} />
        <Route path="/DEATH_NOTE/killing-start" component={KillingStart} />
        <Route path="/DEATH_NOTE/killing-score" component={KillingScore} />
        <Route path="/DEATH_NOTE/community" component={Community} />
        <Route path="/DEATH_NOTE/ranking" component={Ranking} />
        <Redirect to="/DEATH_NOTE" />
      </Switch>
    </Provider>
  );
};

export default App;
