import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Admin from './admin';
import NoMatch from './pages/NoMatch';
import Buttons from './pages/UI/Button';
import Modals from './pages/UI/Modal';
import Loadings from './pages/UI/Loading';
import Notifications from './pages/UI/Notification';
import Messages from './pages/UI/Message';
import Tabs from './pages/UI/Tabs';
import Gallerys from './pages/UI/Gallery';
import Carousels from './pages/UI/Carousel';
import LoginForm from './pages/Form/Login';
import RegisterForm from './pages/Form/Register';
import BasicTable from './pages/Table/basicTable';
import HightTable from './pages/Table/highTable';

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
                  <Route path="/admin/ui/loadings" component={Loadings}></Route>
                  <Route path="/admin/ui/notification" component={Notifications}></Route>
                  <Route path="/admin/ui/messages" component={Messages}></Route>
                  <Route path="/admin/ui/tabs" component={Tabs}></Route>
                  <Route path="/admin/ui/gallery" component={Gallerys}></Route>
                  <Route path="/admin/ui/carousel" component={Carousels}></Route>
                  <Route path="/admin/form/login" component={LoginForm}></Route>
                  <Route path="/admin/form/register" component={RegisterForm}></Route>
                  <Route path="/admin/table/basic" component={BasicTable}></Route>
                  <Route path="/admin/table/high" component={HightTable}></Route>
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