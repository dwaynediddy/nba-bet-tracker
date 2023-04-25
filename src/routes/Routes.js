import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './App';
import ErrorRoutePage from './routes/ErrorRoutePage';
import NbaTeamPage from './page/NbaTeamPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/team/:teamId" component={NbaTeamPage} />
        <Route path="*" component={ErrorRoutePage} />
      </Switch>
    </Router>
  );
};

export default Routes;