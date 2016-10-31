import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Link } from 'react-router';

export default class Root extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  styles() {
    return {
      header: {
        background: '#999',
        boxShadow: 'none',
        position: 'fixed',
        top: '0',
        left: '0'
      }
    }
  }

  render() {
    const styles = this.styles();
    return (
      <div>
        <MuiThemeProvider>
          <div className="main">
            <AppBar
              title="React HandsOn vol.03"
              onLeftIconButtonTouchTap={this.handleToggle}
              style={styles.header}
              />

            <Drawer
              docked={false}
              open={this.state.open}
              width={400}
              onRequestChange={(open) => this.setState({open})}
              >
              <Link to="/"><MenuItem onTouchTap={this.handleClose}>TOP</MenuItem></Link>
              <Link to="/nekos"><MenuItem onTouchTap={this.handleClose}>NEKOS</MenuItem></Link>
            </Drawer>
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
