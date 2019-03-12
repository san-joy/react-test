import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ValueItem extends Component {
  render() {
    const { id, valueOne, valueTwo } = this.props.value;
    return (
      <div>
        <p style={valueItemStyle}>
          {valueOne} + {valueTwo} = {parseInt(valueOne) + parseInt(valueTwo)}
          <button
            className="trashButton"
            onClick={this.props.deleteValue.bind(this, id)}
          >
            <FontAwesomeIcon icon="trash-alt" size="2x" />
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
ValueItem.propTypes = {
  value: PropTypes.object.isRequired,
  deleteValue: PropTypes.func.isRequired
};

const valueItemStyle = {
  padding: "10px",
  borderBottom: "1px #ffffff dotted"
};

export default ValueItem;
