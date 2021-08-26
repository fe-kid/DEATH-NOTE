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
        <Route path="/DEATH-NOTE" exact component={Home} />
        <Route path="/DEATH-NOTE/killing" component={Killing} />
        <Route path="/DEATH-NOTE/killing-start" component={KillingStart} />
        <Route path="/DEATH-NOTE/killing-score" component={KillingScore} />
        <Route path="/DEATH-NOTE/community" component={Community} />
        <Route path="/DEATH-NOTE/ranking" component={Ranking} />
        <Redirect to="/DEATH-NOTE" />
      </Switch>
    </Provider>
  );
};

export default App;
