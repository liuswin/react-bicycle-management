import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Admin from './admin';
import NoMatch from './pages/NoMatch';
import Buttons from './pages/UI/Button'

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" render={() => 
            <Admin>
              <Route path="/admin/ui/buttons" component={Buttons}></Route>
              <Route component={NoMatch}></Route>
            </Admin>
          }></Route>
          <Route path="/order/detail" component={Login}></Route>
        </App>
      </HashRouter>
    );
  }
}