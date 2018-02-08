import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  render() {
    const { children, ...other } = this.props;
    return (
      <button className="btn" {...other}>
        {children}
      </button>
    );
  }
}
