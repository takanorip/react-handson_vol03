import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  styles() {
    return {
      opacity: '0.6'
    }
  }

  onMouseEnter() {
    this.setState({hovered: true});
  }

  onMouseLeave() {
    this.setState({hovered: false});
  }

  render() {
    const styles = this.styles();
    let hoverStyle;
    if (this.state.hovered) {
      hoverStyle = styles;
    }
    return (
      <div
        className="link"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={hoverStyle}
      >
        <Link
          className="nekopic"
          to={`/nekos/${this.props.id}`}
        >
          {this.props.name}
        </Link>
      </div>
    );
  }
}
