import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './containers/app';
import Home from './containers/home';
import Nekos from './containers/nekos';
import Detail from './containers/nekos/detail';

import './index.css';

injectTapEventPlugin();

class Root extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/nekos" component={Nekos}>
              <IndexRoute component={Detail} />
              <Route path=":id" component={Detail} />
            </Route>
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

render(<Root />, document.getElementById('app'));
