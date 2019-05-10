import React, { Component } from "react";
import "./SmurfForm.css";
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  /*
  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios
      .post("http://localhost:3333/smurfs", event)
      .then(res => {
        this.setState({
          name: res.data,
          age: res.data,
          height: res.data
        });
      })
      .catch(err => console.log(err));
  };
*/
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="SmurfForm">
        <form
          onSubmit={event => {
            this.props.addSmurf(this.state, event);
          }}
        >
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
