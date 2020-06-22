import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Button.scss';

export default class Navigation extends Component {
  render() {

    return (
      <button className="rh-button">
        <Link to={this.props.url} title={this.props.title}
           className={'rh-button-link'}>{this.props.title}
        </Link>
      </button>
    );
  }
}