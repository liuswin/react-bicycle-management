import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Admin from './admin';
import NoMatch from './pages/NoMatch';
import Buttons from './pages/UI/Button';
import Modals from './pages/UI/Modal';

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/admin" render={() => 
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons}></Route>
                  <Route path="/admin/ui/modals" component={Modals}></Route>
                  <Route component={NoMatch}></Route>
                </Switch>
              </Admin>
            }></Route>
            <Route path="/order/detail" component={Login}></Route>
          </Switch>
        </App>
      </HashRouter>
    );
  }
}