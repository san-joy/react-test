import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddValue extends Component {
  state = {
    valueOne: "",
    valueTwo: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  validate = () => {
    let valueOneError = "";
    let valueTwoError = "";

    if (!this.state.valueOne) {
      valueOneError = "Field cannot be blank";
    }

    if (!this.state.valueTwo) {
      valueTwoError = "Field cannot be blank";
    }

    if (valueOneError || valueTwoError) {
      this.setState({ valueOneError, valueTwoError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.props.addValue(this.state.valueOne, this.state.valueTwo);
      // clear form
      this.setState({
        valueOne: "",
        valueTwo: "",
        valueOneError: "",
        valueTwoError: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="valueOneStyle">
          <input
            name="valueOne"
            type="number"
            placeholder="First value"
            value={this.state.valueOne}
            onChange={this.onChange}
          />
          <div className="validationError">{this.state.valueOneError}</div>
        </div>
        <div className="valueTwoStyle">
          <input
            className="secondInput"
            name="valueTwo"
            type="number"
            placeholder="Second value"
            value={this.state.valueTwo}
            onChange={this.onChange}
          />
          <div className="validationError">{this.state.valueTwoError}</div>
        </div>
        <button className="addValueButton" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

AddValue.propTypes = {
  addValue: PropTypes.func.isRequired
};

export default AddValue;
