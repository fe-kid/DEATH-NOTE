import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './shared/state/store';
import GlobalStyle from './shared/styles/globalStyle';

import Header from './shared/components/Header/Header';
import Home from './Home/pages/Home';
import Killing from './Killing/pages/Killing';
import KillingStart from './Killing/pages/KillingStart';
import KillingScore from './Killing/pages/KillingScore';
import Community from './Community/pages/Community';
import Ranking from './Ranking/pages/Ranking';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/killing" component={Killing} />
        <Route path="/killing-start" component={KillingStart} />
        <Route path="/killing-score" component={KillingScore} />
        <Route path="/community" component={Community} />
        <Route path="/ranking" component={Ranking} />
        <Redirect to="/" />
      </Switch>
    </Provider>
  );
};

export default App;
