import React, { Component } from "react";
import "./App.css";
import Values from "./components/Values";
import Header from "./components/Header";
import AddValue from "./components/AddValue";
import uuid from "uuid";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
//Promise based HTTP client
// import axios from 'axios';

class App extends Component {
  //Hard coded data
  state = {
    values: [
      {
        id: uuid.v4(),
        valueOne: "30",
        valueTwo: "20"
      },
      {
        id: uuid.v4(),
        valueOne: "35",
        valueTwo: "22"
      },
      {
        id: uuid.v4(),
        valueOne: "15",
        valueTwo: "21"
      },
      {
        id: uuid.v4(),
        valueOne: "150",
        valueTwo: "210"
      },
      {
        id: uuid.v4(),
        valueOne: "45",
        valueTwo: "21"
      }
    ],
    showForm: false
  };

  //* API CALL to show data
  // componentDidMount(){
  //   axios.get('https://APIcallLinkHere.com')
  //     .then(result => this.setState({ values: result.data }))
  //     .catch(error => { console.log(error)});
  // }

  //Show form
  showForm = () => {
    console.log("Showing form!");
    this.setState({ showForm: true });
  };
  //Add New Value
  addValue = (valueOne, valueTwo) => {
    const newValue = {
      id: uuid.v4(),
      valueOne,
      valueTwo
    };
    this.setState({ values: [...this.state.values, newValue] });

    ////* API CALL
    // axios.post('https://APIcallLinkHere.com/values', { valueOne, valueTwo})
    //   .then(result => this.setState({ values: [...this.state.values, result.data]}))
    //   .catch(error => { console.log(error)});
  };

  //Delete Value
  deleteValue = id => {
    this.setState({
      values: [...this.state.values.filter(value => value.id !== id)]
    });
    ////* API CALL to delete data
    // axios.delete(`https://APIcallLinkHere.com/values/${id}`)
    //   .then(result => this.setState({ values: [...this.state.values.filter(value => value.id !== id)]}))
    //   .catch(error => { console.log(error)});
  };

  render() {
    return (
      <div>
        <Header showForm={this.showForm} />
        <div className="container">
          {this.state.showForm && <AddValue addValue={this.addValue} />}
          <p>List of the values from fake API or hard coded data</p>
          <Values values={this.state.values} deleteValue={this.deleteValue} />
        </div>
      </div>
    );
  }
}

library.add(faPlus, faTrashAlt);

export default App;
