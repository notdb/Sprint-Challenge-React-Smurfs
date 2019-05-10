import React, { Component } from "react";

import Smurf from "./Smurf";
import "./Smurfs.css";

class Smurfs extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props.deleteSmurf);
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <div className="Smurfs2">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
