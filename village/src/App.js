import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        this.setState({ smurfs: res.data });
        console.log(this.state.smurfs);
      })
      .catch(err => {
        console.log(err);
      });
  }

  addSmurf = (smurf, event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header>
          Big Links
          <nav className="nav-links">
            <Link exact="true" to="/">
              Home
            </Link>
            <p />
            <Link to="/add-smurf">Add new smurf</Link>
          </nav>
        </header>
        <Route
          exact="true"
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
        <Route
          path="/add-smurf"
          render={props => <SmurfForm addSmurf={this.addSmurf} />}
        />
      </div>
    );
  }
}

export default App;
