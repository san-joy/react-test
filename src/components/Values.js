import React, { Component } from "react";
import PropTypes from "prop-types";
import ValueItem from "./ValueItem";

export class Values extends Component {
  render() {
    return this.props.values.map(value => (
      <ValueItem
        key={value.id}
        value={value}
        deleteValue={this.props.deleteValue}
      />
    ));
  }
}

//PropTypes
Values.propTypes = {
  values: PropTypes.array.isRequired,
  deleteValue: PropTypes.func.isRequired
};

export default Values;
