import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Register, Login } from './views/Auth';
import { Edit, Profile } from './views/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/register' />
        </Route>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/edit' component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
