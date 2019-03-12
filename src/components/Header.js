import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Header extends Component {
  render() {
    return (
      <header style={styleForHeader}>
        <h1 style={h1}>Calculator</h1>
        <button onClick={this.props.showForm.bind(this)} className="addButton">
          <FontAwesomeIcon icon="plus" size="3x" />
        </button>
      </header>
    );
  }
}

const styleForHeader = {
  backgroundColor: "#25274d",
  float: "left",
  width: "100%"
};

const h1 = {
  float: "left",
  padding: "10px",
  color: "#fff"
};

export default Header;
